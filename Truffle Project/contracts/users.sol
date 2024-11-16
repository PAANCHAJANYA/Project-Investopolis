//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
contract users
{
    event registerevent(string success);
    event adminEvent(string success);
    address[] private _admins=[0xc4190a00E34C4C7c2b46c0a2309f8D0D7Db3a7b7];
    struct User
    {
        string userid;
        bytes32 password;
        address metamaskaddress;
        string role;
        string aadharNum;
        string home;
        string mobile;
        string verified;
        string idimage;
    }
    User[] private _totalusers;
    User[] private _verifiedUsers;
    User[] private _unverifiedUsers;
    string[] private _discardedProofs;
    string[] private _userids;
    bool private locked;
    modifier lock
    {
        require(!locked, "Function is locked");
        locked = true;
        _;
        locked = false;
    }
    function _areEqual(string memory a, string memory b) private pure returns (bool)
    {
        return (keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b)));
    }
    function _isadmin(address[] memory admin, address currentUser) private pure returns (bool)
    {
        for(uint i=0;i<admin.length;i++)
        {
            if(admin[i]==currentUser)
            return true;
        }
        return false;
    }
    function login(string memory id, string memory pwd2, address currentUser) public view returns (string memory)
    {
        bytes memory tempEmptyStringTest = bytes(id);
        bytes32 pwd = keccak256(abi.encodePacked(pwd2));
        if (tempEmptyStringTest.length!=0)
        {
            for(uint i=0; i<_totalusers.length;i++)
            {
                if(_areEqual(_totalusers[i].userid,id))
                {
                    if(_totalusers[i].password==pwd && _areEqual(_totalusers[i].verified,"YES"))
                    {
                        return _totalusers[i].role;
                    }
                    else if(_totalusers[i].password==pwd && _areEqual(_totalusers[i].verified,"YET"))
                    {
                        return "YET";
                    }
                    else if(_totalusers[i].password==pwd && _areEqual(_totalusers[i].verified,"NOPE"))
                    {
                        return "NOPE";
                    }
                    else
                    {
                        return "NO";
                    }
                }
            }
        }
        else
        {
            if(_isadmin(_admins, currentUser))
            {
                return "admin";
            }
            for(uint i=0; i<_totalusers.length;i++)
            {
                if(_totalusers[i].metamaskaddress==currentUser)
                {
                    if(_areEqual(_totalusers[i].verified,"YES"))
                    {
                        return _totalusers[i].role;
                    }
                    else if(_areEqual(_totalusers[i].verified,"YET"))
                    {
                        return "YET";
                    }
                    else if(_areEqual(_totalusers[i].verified,"NOPE"))
                    {
                        return "NOPE";
                    }
                    else
                    {
                        return "NO";
                    }
                }
            }
        }
        return "NO";
    }
    function registerPossible(string memory id, address currentUser) public view returns (string memory)
    {
        if(_isadmin(_admins, currentUser))
        {
            return "NO";
        }
        for(uint i=0; i<_totalusers.length;i++)
        {
            if(_totalusers[i].metamaskaddress==currentUser || _areEqual(_totalusers[i].userid,id))
            {
                return "NO";
            }
        }
        return "YES";
    }
    function register(string memory id, string memory pwd, address currentUser, string memory rl, string memory idproof) public lock
    {
        if(_isadmin(_admins, currentUser))
        {
            emit registerevent("NO");
            return;
        }
        for(uint i=0;i<_totalusers.length;i++)
        {
            if(_totalusers[i].metamaskaddress==currentUser || _areEqual(_totalusers[i].userid,id))
            {
                emit registerevent("NO");
                return;
            }
        }
        User memory new_user;
        new_user.userid = id;
        new_user.password = keccak256(abi.encodePacked(pwd));
        new_user.metamaskaddress = currentUser;
        new_user.role = rl;
        new_user.idimage = idproof;
        new_user.verified="YET";
        _totalusers.push(new_user);
        emit registerevent("YES");
    }
    function userid(address currentUser) public view returns (string memory)
    {
        for(uint i=0;i<_totalusers.length;i++)
        {
            if(_totalusers[i].metamaskaddress==currentUser)
            {
                return _totalusers[i].userid;
            }
        }
        return "NA";
    }
    function metamask(string memory id) public view returns (address)
    {
        for(uint i=0; i<_totalusers.length;i++)
        {
            if(_areEqual(_totalusers[i].userid, id))
            {
                return _totalusers[i].metamaskaddress;
            }
        }
        return 0x0000000000000000000000000000000000000000;
    }
    function verify(address verifiedUser, string memory status, string memory aadhar, string memory homeaddress, string memory phone) public
    {
        for(uint i=0; i<_totalusers.length;i++)
        {
            if(_areEqual(_totalusers[i].aadharNum,aadhar))
            {
                status = "NOPE";
            }
        }
        for(uint i=0; i<_totalusers.length;i++)
        {
            if(_totalusers[i].metamaskaddress==verifiedUser && _areEqual(_totalusers[i].verified,"YET"))
            {
                _totalusers[i].verified = status;
                if(_areEqual(_totalusers[i].verified,"YES"))
                {
                    _totalusers[i].aadharNum = aadhar;
                    _totalusers[i].home = homeaddress;
                    _totalusers[i].mobile = phone;
                }
                else if(_areEqual(_totalusers[i].verified,"NOPE"))
                {
                    _totalusers[i].userid="";
                    _totalusers[i].metamaskaddress=0x0000000000000000000000000000000000000000;
                    _discardedProofs.push(_totalusers[i].idimage);
                }
            }
        }
    }
    function unverified() public returns(User[] memory)
    {
        delete _unverifiedUsers;
        for(uint i=0;i<_totalusers.length;i++)
        {
            if(_areEqual(_totalusers[i].verified,"YET"))
            {
                _unverifiedUsers.push(_totalusers[i]);
            }
        }
        return _unverifiedUsers;
    }
    function usersdb() public returns(User[] memory)
    {
        delete _verifiedUsers;
        for(uint i=0;i<_totalusers.length;i++)
        {
            if(_areEqual(_totalusers[i].verified,"YES"))
            {
                _verifiedUsers.push(_totalusers[i]);
            }
        }
        return _verifiedUsers;
    }
    function addAdmin(address newAdmin) public
    {
        for(uint i=0; i<_totalusers.length;i++)
        {
            if(_totalusers[i].metamaskaddress==newAdmin)
            {
                emit adminEvent("NO");
                return;
            }
        }
        _admins.push(newAdmin);
        emit adminEvent("YES");
    }
    function removableFiles() public view returns(string[] memory)
    {
        return _discardedProofs;
    }
    function getInfo(string memory id) public view returns(string[2] memory)
    {
        for(uint i=0; i<_totalusers.length;i++)
        {
            if(_areEqual(_totalusers[i].userid,id) && _areEqual(_totalusers[i].role, "ideator"))
            {
                return [_totalusers[i].home, _totalusers[i].mobile];
            }
        }
        return ["NA", "NA"];
    }
    function userids(address currentUser) public returns(string[] memory)
    {
        delete _userids;
        if(_isadmin(_admins, currentUser))
        {
            for(uint i=0;i<_totalusers.length;i++)
            {
                if(_areEqual(_totalusers[i].verified,"YES"))
                {
                    _userids.push(_totalusers[i].userid);
                }
            }
            return _userids;
        }
        else
        {
            for(uint i=0;i<_totalusers.length;i++)
            {
                if(_areEqual(_totalusers[i].verified,"YES") && !_areEqual(_totalusers[i].role,"registrar"))
                {
                    _userids.push(_totalusers[i].userid);
                }
            }
            return _userids;
        }
    }
}