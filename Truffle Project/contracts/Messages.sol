//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
contract messages
{
    event messagesent(string success);
    struct Message
    {
        string viewedby;
        string senderID;
        string receiverID;
        string message;
        uint timestamp;
    }
    Message[] private _messages;
    Message[] private _retrievedMessages;
    uint private _lastDelete=block.timestamp;
    function _areEqual(string memory a, string memory b) private pure returns (bool)
    {
        return (keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b)));
    }
    function retrieve(string memory id, string memory userrole) public returns(Message[] memory)
    {
        if(block.timestamp-(_lastDelete)>604800)
        {
            delete _messages;
            _lastDelete=block.timestamp;
        }
        delete _retrievedMessages;
        for(uint i=0; i<_messages.length;i++)
        {
            if(_areEqual(id,_messages[i].senderID) || _areEqual(id,_messages[i].receiverID) || _areEqual(_messages[i].viewedby,userrole) || _areEqual(_messages[i].viewedby,"everyone"))
            {
                _retrievedMessages.push(_messages[i]);
            }
        }
        return _retrievedMessages;
    }
    function send(string memory receiver, string memory receivers, string memory sender, string memory message) public
    {
        if(block.timestamp-(_lastDelete)>604800)
        {
            delete _messages;
            _lastDelete=block.timestamp;
        }
        if(_areEqual(sender, "ADMIN"))
        {
            if(_areEqual(receivers,"everyone"))
            {
                Message memory new_message;
                new_message.senderID = sender;
                new_message.message = message;
                new_message.timestamp = block.timestamp;
                new_message.viewedby = "everyone";
                _messages.push(new_message);
            }
            else if(_areEqual(receivers,"investors"))
            {
                Message memory new_message;
                new_message.senderID = sender;
                new_message.message = message;
                new_message.timestamp = block.timestamp;
                new_message.viewedby = "investor";
                _messages.push(new_message);
            }
            else if(_areEqual(receivers,"ideators"))
            {
                Message memory new_message;
                new_message.senderID = sender;
                new_message.message = message;
                new_message.timestamp = block.timestamp;
                new_message.viewedby = "ideator";
                _messages.push(new_message);
            }
            else if(_areEqual(receivers,"vendors"))
            {
                Message memory new_message;
                new_message.senderID = sender;
                new_message.message = message;
                new_message.timestamp = block.timestamp;
                new_message.viewedby = "vendor";
                _messages.push(new_message);
            }
            else if(_areEqual(receivers,"registrars"))
            {
                Message memory new_message;
                new_message.senderID = sender;
                new_message.message = message;
                new_message.timestamp = block.timestamp;
                new_message.viewedby = "registrar";
                _messages.push(new_message);
            }
            else
            {
                Message memory new_message;
                new_message.senderID = sender;
                new_message.receiverID = receiver;
                new_message.message = message;
                new_message.timestamp = block.timestamp;
                _messages.push(new_message);
            }
            emit messagesent("YES");
            return;
        }
        else
        {
            Message memory new_message;
            new_message.senderID = sender;
            new_message.receiverID = receiver;
            new_message.message = message;
            new_message.timestamp = block.timestamp;
            _messages.push(new_message);
            emit messagesent("YES");
            return;
        }
    }
}