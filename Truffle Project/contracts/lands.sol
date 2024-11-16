//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
contract lands
{
    event registerevent(string success);
    event transferevent(string success);
    event registrarUpdated(string success);
    struct Registrar
    {
        string name;
        string userid;
        uint sd;
        uint td;
        uint rf;
        string coordinates;
        address metamaskaddress;
    }
    struct Land
    {
        string RDN;
        string[] userids;
        string[] names;
        string[] home;
        address[] metamaskaddress;
        string details;
        string coordinates;
        string saledeed;
        string verified;
        bool pendingTransfer;
        string[] new_userids;
        string[] new_names;
        string[] new_home;
        address[] new_metamaskaddress;
        string new_saledeed;
        uint fee;
    }
    Registrar[] private _registrars;
    Registrar private new_registrar;
    mapping(string => Land) private _lands;
    mapping(string => string[]) private _owns;
    string[] private _RDNs;
    string[] private _coordinatesList;
    Land[] private retrieve_lands;
    Land[] private _unverifiedLands;
    Land[] private _unverifiedLands2;
    function getBalance() public view returns (uint256)
    {
        return address(this).balance;
    }
    receive() external payable {}
    fallback() external payable {}
    function _areEqual(string memory a, string memory b) internal pure returns (bool)
    {
        return (keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b)));
    }
    function addRegistrar(string memory name, string memory id, uint sd, uint td, uint rf, string memory coord, address metamask) public
    {
        new_registrar.name = name;
        new_registrar.userid = id;
        new_registrar.sd = sd;
        new_registrar.td = td;
        new_registrar.rf = rf;
        new_registrar.coordinates = coord;
        new_registrar.metamaskaddress = metamask;
        _registrars.push(new_registrar);
        delete new_registrar;
        emit registrarUpdated("YES");
    }
    function updateRegistrar(string memory id, uint sd, uint td, uint rf) public
    {
        for(uint i=0;i<_registrars.length;i++)
        {
            if(_areEqual(_registrars[i].userid,id))
            {
                _registrars[i].sd = sd;
                _registrars[i].td = td;
                _registrars[i].rf = rf;
                emit registrarUpdated("YES");
                return;
            }
        }
        emit registrarUpdated("NO");
    }
    function getRegistrar(string memory id) public view returns(Registrar memory)
    {
        Registrar memory a;
        for(uint i=0;i<_registrars.length;i++)
        {
            if(_areEqual(_registrars[i].userid,id))
            {
                return _registrars[i];
            }
        }
        return a;
    }
    function retrieve() public view returns(Registrar[] memory)
    {
        return _registrars;
    }
    function registerLand(string memory rd, string[] memory ids, string[] memory fullnames, string[] memory addresses, address[] memory metamask, string memory det, string memory coord, string memory deed) public
    {
        Land memory new_land;
        bool flag = true;
        for(uint i=0;i<_RDNs.length;i++)
        {
            if(_areEqual(_RDNs[i], rd))
            {
                flag = false;
                break;
            }
        }
        if(_RDNs.length!=0)
        {
            flag = true;
        }
        if(!flag)
        {
            emit registerevent("NO");
            return;
        }
        new_land.RDN = rd;
        new_land.userids = ids;
        new_land.names = fullnames;
        new_land.home = addresses;
        new_land.metamaskaddress = metamask;
        new_land.coordinates = coord;
        _coordinatesList.push(coord);
        new_land.details = det;
        new_land.saledeed = deed;
        new_land.verified = "YET";
        _lands[rd] = new_land;
        _RDNs.push(rd);
        for(uint i=0;i<ids.length;i++)
        {
            if(_owns[ids[i]].length==0)
            {
                _owns[ids[i]] = [rd];
                continue;
            }
            _owns[ids[i]].push(rd);
        }
        emit registerevent("YES");
    }
    function getOwnedLands(string memory id) public returns(Land[] memory)
    {
        delete retrieve_lands;
        for(uint i=0;i<_owns[id].length;i++)
        {
            if(_areEqual(_owns[id][i],""))
            {
                continue;
            }
            retrieve_lands.push(_lands[_owns[id][i]]);
        }
        return retrieve_lands;
    }
    function transferLand(string memory rd, string[] memory ids, string[] memory fullnames, string[] memory addresses, address[] memory metamask, string memory deed, uint f) public payable
    {
        bool flag = false;
        if(_RDNs.length==0 || _areEqual(_lands[rd].verified, "YET"))
        {
            emit transferevent("NO");
            return;
        }
        for(uint i=0;i<_lands[rd].metamaskaddress.length;i++)
        {
            if(_lands[rd].metamaskaddress[i]==msg.sender)
            {
                flag = true;
                break;
            }
        }
        if(!flag)
        {
            emit transferevent("NO");
            return;
        }
        _lands[rd].pendingTransfer = true;
        _lands[rd].new_userids = ids;
        _lands[rd].new_names = fullnames;
        _lands[rd].new_home = addresses;
        _lands[rd].new_metamaskaddress = metamask;
        _lands[rd].new_saledeed = deed;
        _lands[rd].fee = f;
        emit transferevent("YES");
    }
    function retrieveCoordinates() public view returns(string[] memory)
    {
        return _coordinatesList;
    }
    function unverifiedLands() public returns(Land[] memory)
    {
        delete _unverifiedLands;
        for(uint i=0;i<_RDNs.length;i++)
        {
            if(_areEqual(_lands[_RDNs[i]].verified,"YET") || _lands[_RDNs[i]].pendingTransfer)
            {
                _unverifiedLands.push(_lands[_RDNs[i]]);
            }
        }
        return _unverifiedLands;
    }
    function verifyRegistration(string memory rd, string memory status) public
    {
        _lands[rd].verified = status;
        if(_areEqual(status,"NOPE"))
        {
            for(uint j=0;j<_lands[rd].userids.length;j++)
            {
                for(uint k=0;k<_owns[_lands[rd].userids[j]].length;k++)
                {
                    if(_areEqual(_owns[_lands[rd].userids[j]][k], rd))
                    {
                        _owns[_lands[rd].userids[j]][k]="";
                        break;
                    }
                }
            }
            delete _lands[rd];
        }
    }
    function verifyTransfer(string memory rd, string memory status) public
    {
        _lands[rd].pendingTransfer = false;
        if(_areEqual(status,"YES"))
        {
            (bool sent,) = address(msg.sender).call{value: (_lands[rd].fee)*1000000000000000000}("");
            require(sent, "Transaction Failed");
            for(uint i=0;i<_lands[rd].new_userids.length;i++)
            {
                if(_owns[_lands[rd].new_userids[i]].length==0)
                {
                    _owns[_lands[rd].new_userids[i]] = [rd];
                    continue;
                }
                _owns[_lands[rd].new_userids[i]].push(rd);
            }
            for(uint i=0;i<_lands[rd].userids.length;i++)
            {
                for(uint j=0;j<_owns[_lands[rd].userids[i]].length;j++)
                {
                    if(_areEqual(_owns[_lands[rd].userids[i]][j], rd))
                    {
                        _owns[_lands[rd].userids[i]][j] = "";
                    }
                }
            }
            _lands[rd].userids = _lands[rd].new_userids;
            _lands[rd].names = _lands[rd].new_names;
            _lands[rd].home = _lands[rd].new_home;
            _lands[rd].metamaskaddress = _lands[rd].new_metamaskaddress;
            _lands[rd].saledeed = _lands[rd].new_saledeed;
        }
    }
}