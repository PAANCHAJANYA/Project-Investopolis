//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
contract nfts
{
    event nftMinted(string success);
    event nftTransferred(string success);
    event interestMarked(string success);
    event disinterestMarked(string success);
    struct NFT
    {
        uint256 nftID;
        string userid;
        string cid;
        string title;
        string sell;
        uint256 price;
        address metamaskaddress;
    }
    string[] private _minters;
    mapping (string => uint) private _mintCount;
    string[][] private _mintArr;
    uint256 private nftCount = 0;
    NFT[] private _nft;
    NFT[] private _retrieveNFT;
    mapping (string => address) private _alreadyMinted;
    NFT[] private _interestedNFT;
    NFT private new_nft;
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
    function mint(string memory t, string memory id, address metamask, string memory cd) public lock
    {
        if(_alreadyMinted[cd] != address(0))
        {
            if(_alreadyMinted[cd]!=metamask)
            {
                emit nftMinted("NO");
                return;
            }
        }
        nftCount +=1 ;
        new_nft.nftID = nftCount;
        new_nft.userid = id;
        new_nft.cid = cd;
        new_nft.title = t;
        new_nft.sell = "NO";
        new_nft.metamaskaddress = metamask;
        _alreadyMinted[cd]=metamask;
        _nft.push(new_nft);
        _minters.push(id);
        _mintCount[id]+=1;
        delete new_nft;
        emit nftMinted("YES");
    }
    function getMintCount() public returns (string[][] memory)
    {
        delete _mintArr;
        for(uint i=0;i<_minters.length;i++)
        {
            _mintArr.push([_minters[i],uint256ToString(_mintCount[_minters[i]])]);
        }
        return _mintArr;
    }
    function retrieve(string memory id) public lock returns(NFT[] memory)
    {
        delete _retrieveNFT;
        for(uint256 i=0; i<_nft.length; i++)
        {
            if(_areEqual(_nft[i].userid, id))
            {
                _retrieveNFT.push(_nft[i]);
            }
        }
        return _retrieveNFT;
    }
    function interest(uint256 id, uint256 amount) public lock
    {
        for(uint256 i=0; i<_nft.length; i++)
        {
            if(_nft[i].nftID==id)
            {
                _nft[i].sell = "YES";
                _nft[i].price = amount;
                emit interestMarked("YES");
                return;
            }
        }
        emit interestMarked("NO");
    }
    function disinterest(uint256 id) public
    {
        for(uint256 i=0; i<_nft.length; i++)
        {
            if(_nft[i].nftID==id)
            {
                _nft[i].sell = "NO";
                emit disinterestMarked("YES");
                return;
            }
        }
        emit disinterestMarked("NO");
    }
    function retrieveInterests() public returns(NFT[] memory)
    {
        delete _interestedNFT;
        for(uint256 i=0; i<_nft.length; i++)
        {
            if(_areEqual(_nft[i].sell, "YES"))
            {
                _interestedNFT.push(_nft[i]);
            }
        }
        return _interestedNFT;
    }
    function buy(uint256 id, string memory uid, address metamask) public lock payable
    {
        uint256 mul = 1000000000000000000;
        for(uint256 i=0; i<_nft.length; i++)
        {
            if(_nft[i].nftID==id)
            {
                if(_areEqual(_nft[i].sell, "YES"))
                {
                    (bool sent,) = address(_nft[i].metamaskaddress).call{value: _nft[i].price*mul}("");
                    require(sent, "Transaction Failed");
                    _nft[i].userid = uid;
                    _nft[i].metamaskaddress = metamask;
                    _nft[i].sell = "NO";
                    emit nftTransferred("YES");
                    return;
                }
                break;
            }
        }
        emit nftTransferred("NO");
        return;
    }
}