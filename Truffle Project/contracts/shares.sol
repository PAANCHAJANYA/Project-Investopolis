//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
contract shares
{
    event infoupdated(string success);
    event sharesBoughtEvent(string success, bytes32 verificationStr);
    event sharesShared(string success, bytes32 verificationStr);
    event interestMarked(string success);
    event disinterestMarked(string success);
    struct Profile
    {
        string name;
        string userid;
        string about;
        string[] investors;
        uint[][] sharesbought;
        uint[][] boughtFor;
        bytes32[][] verifyStrings;
        uint[] assets;
        uint[] liabilities;
        uint pv;
        uint shares;
        uint sharesLeft;
        uint[] timestamp;
        address metamaskaddress;
    }
    Profile[] private _ideators;
    mapping (string => string[][]) private _interested;
    mapping (bytes32 => string[5]) private _verificationStrings;
    mapping (string => address) private _investors;
    Profile private new_ideator;
    bool private locked;
    modifier lock
    {
        require(!locked, "Function is locked");
        locked = true;
        _;
        locked = false;
    }
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
    function uint256ToString(uint256 value) public pure returns (string memory)
    {
        if(value==0)
        {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0)
        {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0)
        {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
    function addIdeator(string memory title, string memory id, string memory desc, uint a, uint l, uint value, uint count, address metamask) public
    {
        new_ideator.name = title;
        new_ideator.userid = id;
        new_ideator.about = desc;
        new_ideator.assets.push(a);
        new_ideator.liabilities.push(l);
        new_ideator.pv = value;
        new_ideator.shares = count;
        new_ideator.sharesLeft = count;
        new_ideator.timestamp.push(block.timestamp);
        new_ideator.metamaskaddress = metamask;
        _ideators.push(new_ideator);
        delete new_ideator;
        emit infoupdated("YES");
    }
    function updateIdeator(string memory id, string memory desc, uint a, uint l) public
    {
        for(uint i=0;i<_ideators.length;i++)
        {
            if(_areEqual(_ideators[i].userid,id))
            {
                _ideators[i].about = desc;
                _ideators[i].assets.push(a);
                _ideators[i].liabilities.push(l);
                _ideators[i].timestamp.push(block.timestamp);
                emit infoupdated("YES");
                return;
            }
        }
        emit infoupdated("NO");
    }
    function getIdeator(string memory id) public view returns(Profile memory)
    {
        Profile memory a;
        for(uint i=0;i<_ideators.length;i++)
        {
            if(_areEqual(_ideators[i].userid,id))
            {
                return _ideators[i];
            }
        }
        return a;
    }
    function retrieve() public view returns(Profile[] memory)
    {
        return _ideators;
    }
    function invest(string memory id, string memory investorid, uint boughtCount, uint bVal, uint dec, address metamask, string memory combin) public lock payable
    {
        bytes32 verifystr = keccak256(bytes(combin));
        uint256 mul = 1000000000000000000;
        for(uint i=0;i<_ideators.length;i++)
        {
            if(_areEqual(_ideators[i].userid,id))
            {
                if(_ideators[i].sharesLeft<boughtCount)
                {
                    emit sharesBoughtEvent("NO", "");
                    return;
                }
                for(uint itr=0;itr<dec;itr++)
                {
                    mul/=10;
                }
                (bool sent,) = address(_ideators[i].metamaskaddress).call{value: boughtCount*bVal*mul}("");
                require(sent, "Transaction Failed");
                (bool sent1,) = 0xc4190a00E34C4C7c2b46c0a2309f8D0D7Db3a7b7.call{value: address(this).balance}("");
                require(sent1, "Transaction Failed");
                bVal = bVal*mul;
                _investors[investorid] = metamask;
                _verificationStrings[verifystr] = [id, investorid, uint256ToString(boughtCount), uint256ToString(block.timestamp),uint256ToString(boughtCount)];
                for(uint j=0;j<_ideators[i].investors.length;j++)
                {
                    if(_areEqual(_ideators[i].investors[j], investorid))
                    {
                        _ideators[i].sharesbought[j].push(boughtCount);
                        _ideators[i].sharesLeft-=boughtCount;
                        _ideators[i].boughtFor[j].push(bVal);
                        _ideators[i].verifyStrings[j].push(verifystr);
                        emit sharesBoughtEvent("YES", verifystr);
                        return;
                    }
                }
                _ideators[i].investors.push(investorid);
                _ideators[i].sharesbought.push([boughtCount]);
                _ideators[i].boughtFor.push([bVal]);
                _ideators[i].verifyStrings.push([verifystr]);
                _ideators[i].sharesLeft-=boughtCount;
                emit sharesBoughtEvent("YES", verifystr);
                return;
            }
        }
    }
    function verifydocument(bytes32 str) public view returns(string[5] memory)
    {
        return _verificationStrings[str];
    }
    function interest(string memory id, string memory investorID, uint shareCount) public
    {
        for(uint i=0;i<_ideators.length;i++)
        {
            if(_areEqual(_ideators[i].userid,id))
            {
                for(uint j=0;j<_ideators[i].investors.length;j++)
                {
                    if(_areEqual(_ideators[i].investors[j], investorID))
                    {
                        uint totalShares = 0;
                        for(uint itr=0;itr<_ideators[i].sharesbought[j].length;itr++)
                        {
					        totalShares+=_ideators[i].sharesbought[j][itr];
                        }
                        if(totalShares<shareCount)
                        {
                            emit interestMarked("NO");
                            return;
                        }
                        break;
                    }
                }
                break;
            }
        }
        _interested[id].push([investorID, uint256ToString(shareCount)]);
        emit interestMarked("YES");
    }
    function disinterest(string memory id, string memory investorID, uint shareCount) public
    {
        for(uint i=0;i<_interested[id].length;i++)
        {
            if(_areEqual(_interested[id][i][0], investorID) && _areEqual(_interested[id][i][1], uint256ToString(shareCount)))
            {
                _interested[id][i][1] = "0";
                emit disinterestMarked("YES");
                return;
            }
        }
        emit disinterestMarked("NO");
    }
    function retrieveInterests(string memory id) public view returns(string[][] memory)
    {
        return _interested[id];
    }
    function transfer(string memory ideatorID, string memory toID, string memory fromID, uint shareCount, uint bVal, uint dec, address metamask, string memory combin) public lock payable
    {
        bytes32 verifystr = keccak256(bytes(combin));
        uint256 mul = 1000000000000000000;
        bool flag = false;
        for(uint i=0;i<_interested[ideatorID].length;i++)
        {
            if(_areEqual(_interested[ideatorID][i][0], fromID) && _areEqual(_interested[ideatorID][i][1], uint256ToString(shareCount)))
            {
                flag = true;
            }
        }
        if(!flag)
        {
            emit sharesShared("NO","");
            return;
        }
        for(uint i=0;i<_ideators.length;i++)
        {
            if(_areEqual(_ideators[i].userid,ideatorID))
            {
                for(uint j=0;j<_ideators[i].investors.length;j++)
                {
                    if(_areEqual(_ideators[i].investors[j], fromID))
                    {
                        uint totalShares = 0;
                        for(uint itr=0;itr<_ideators[i].sharesbought[j].length;itr++)
                        {
					        totalShares+=_ideators[i].sharesbought[j][itr];
                        }
                        if(totalShares<shareCount)
                        {
                            emit sharesShared("NO","");
                            return;
                        }
                        for(uint itr=0;itr<dec;itr++)
                        {
                            mul/=10;
                        }
                        (bool sent,) = address(_investors[fromID]).call{value: shareCount*bVal*mul}("");
                        require(sent, "Transaction Failed");
                        _investors[toID] = metamask;
                        (bool sent1,) = 0xc4190a00E34C4C7c2b46c0a2309f8D0D7Db3a7b7.call{value: address(this).balance}("");
                        require(sent1, "Transaction Failed");
                        bVal = bVal*mul;
                        uint shareCountCopy = shareCount;
				        for(uint itr=0;itr<_ideators[i].sharesbought[j].length;itr++)
                        {
					        if(shareCountCopy<=_ideators[i].sharesbought[j][itr])
					        {
						        _ideators[i].sharesbought[j][itr] = _ideators[i].sharesbought[j][itr]-shareCountCopy;
                                _verificationStrings[_ideators[i].verifyStrings[j][itr]][4] = uint256ToString(_ideators[i].sharesbought[j][itr]);
						        break;
					        }
					        else
					        {
                                shareCountCopy-=_ideators[i].sharesbought[j][itr];
                                _verificationStrings[_ideators[i].verifyStrings[j][itr]][4] = "0";
						        _ideators[i].sharesbought[j][itr] = 0;
					        }
                        }
                        break;
                    }
                }
                for(uint j=0;j<_ideators[i].investors.length;j++)
                {
                    if(_areEqual(_ideators[i].investors[j], toID))
                    {
                        _ideators[i].sharesbought[j].push(shareCount);
                        _ideators[i].boughtFor[j].push(bVal);
                        _ideators[i].verifyStrings[j].push(verifystr);
                        _verificationStrings[verifystr] = [ideatorID, toID, uint256ToString(shareCount), uint256ToString(block.timestamp),uint256ToString(shareCount)];
                        emit sharesShared("YES", verifystr);
                        disinterest(ideatorID, fromID, shareCount);
                        return;
                    }
                }
                _ideators[i].investors.push(toID);
                _ideators[i].sharesbought.push([shareCount]);
                _ideators[i].boughtFor.push([bVal]);
                _ideators[i].verifyStrings.push([verifystr]);
                _verificationStrings[verifystr] = [ideatorID, toID, uint256ToString(shareCount), uint256ToString(block.timestamp),uint256ToString(shareCount)];
                emit sharesShared("YES", verifystr);
                disinterest(ideatorID, fromID, shareCount);
                break;
            }
        }
    }
}