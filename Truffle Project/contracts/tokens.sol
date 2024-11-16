//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
contract tokens
{
    event tokenAdded(string success);
    event tokenActivated(string success);
    event tokensShared(string success);
    struct Investor
    {
        uint investments;
        uint token1;
        uint token2;
        uint remaining1;
        uint remaining2;
    }
    mapping (string => Investor) private _investors;
    function getInvestor(string memory id) public view returns(Investor memory)
    {
        return _investors[id];
    }
    function invest(string memory id, uint mode) public
    {
        _investors[id].investments+=1;
        if(_investors[id].token1!=0 && mode==1)
        {
            _investors[id].remaining1-=1;
            if(_investors[id].remaining1==0)
            {
                _investors[id].token1 = 0;
            }
        }
        if(_investors[id].token2!=0 && mode==2)
        {
            _investors[id].remaining2-=1;
            if(_investors[id].remaining2==0)
            {
                _investors[id].token2 = 0;
            }
        }
        emit tokenAdded("YES");
    }
    function activateToken(string memory id, uint grade) public
    {
        uint mode = (grade<=4) ? 1 : 2;
        if((_investors[id].token1!=0 && mode==1) || (_investors[id].token2!=0 && mode==2))
        {
            emit tokenActivated("NO");
            return;
        }
        else if(grade==1)
        {
            _investors[id].investments-=100;
            _investors[id].token1=1;
            _investors[id].remaining1=20;
            emit tokenActivated("YES");
        }
        else if(grade==2)
        {
            _investors[id].investments-=50;
            _investors[id].token1=2;
            _investors[id].remaining1=10;
            emit tokenActivated("YES");
        }
        else if(grade==3)
        {
            _investors[id].investments-=20;
            _investors[id].token1=3;
            _investors[id].remaining1=5;
            emit tokenActivated("YES");
        }
        else if(grade==4)
        {
            _investors[id].investments-=10;
            _investors[id].token1=4;
            _investors[id].remaining1=10;
            emit tokenActivated("YES");
        }
        else if(grade==5)
        {
            _investors[id].investments-=16;
            _investors[id].token2=5;
            _investors[id].remaining2=20;
            emit tokenActivated("YES");
        }
        else if(grade==6)
        {
            _investors[id].investments-=8;
            _investors[id].token2=6;
            _investors[id].remaining2=10;
            emit tokenActivated("YES");
        }
        else if(grade==7)
        {
            _investors[id].investments-=4;
            _investors[id].token2=7;
            _investors[id].remaining2=5;
            emit tokenActivated("YES");
        }
        else if(grade==8)
        {
            _investors[id].investments-=2;
            _investors[id].token2=8;
            _investors[id].remaining2=10;
            emit tokenActivated("YES");
        }
    }
    function transferTokens(string memory fromID, string memory toID, uint tokenCount) public
    {
        if(_investors[fromID].investments<tokenCount)
        {
            emit tokensShared("NO");
            return;
        }
        _investors[fromID].investments -= tokenCount;
        _investors[toID].investments+=tokenCount;
        emit tokensShared("YES");
        return;
    }
}