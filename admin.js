function formatAMPM(date)
{
	const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var day = weekday[date.getDay()];
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12;
	minutes = minutes < 10 ? '0'+minutes : minutes;
	var strTime = day + ' ' + hours + ':' + minutes + ' ' + ampm;
	return strTime;
}
async function loadWeb3()
{
    if(window.ethereum)
    {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
        var checkCurrentAccount = setInterval(function(){
            web3.eth.getAccounts().then(function(acc){
                if(acc[0]!=window.sessionStorage.getItem("walletAddress"))
                {
                    window.sessionStorage.clear();
                    window.location="index.html";
                }
            });
        }, 1000);
    }
}
async function load()
{
    await loadWeb3();
}
load();
var abi=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "success",
				"type": "string"
			}
		],
		"name": "adminEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "success",
				"type": "string"
			}
		],
		"name": "registerevent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newAdmin",
				"type": "address"
			}
		],
		"name": "addAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "getInfo",
		"outputs": [
			{
				"internalType": "string[2]",
				"name": "",
				"type": "string[2]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pwd2",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "currentUser",
				"type": "address"
			}
		],
		"name": "login",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "metamask",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pwd",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "currentUser",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "rl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "idproof",
				"type": "string"
			}
		],
		"name": "register",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "currentUser",
				"type": "address"
			}
		],
		"name": "registerPossible",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "removableFiles",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unverified",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "userid",
						"type": "string"
					},
					{
						"internalType": "bytes32",
						"name": "password",
						"type": "bytes32"
					},
					{
						"internalType": "address",
						"name": "metamaskaddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "role",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "aadharNum",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "home",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "mobile",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "verified",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "verifiedBy",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "idimage",
						"type": "string"
					}
				],
				"internalType": "struct users.User[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "currentUser",
				"type": "address"
			}
		],
		"name": "userid",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userids",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usersdb",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "userid",
						"type": "string"
					},
					{
						"internalType": "bytes32",
						"name": "password",
						"type": "bytes32"
					},
					{
						"internalType": "address",
						"name": "metamaskaddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "role",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "aadharNum",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "home",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "mobile",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "verified",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "verifiedBy",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "idimage",
						"type": "string"
					}
				],
				"internalType": "struct users.User[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "verifiedUser",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "aadhar",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "homeaddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phone",
				"type": "string"
			}
		],
		"name": "verify",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
var contractAddress = "0xC6B8b987C177910FA9269A1506135924652389E5";
var abi2 = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "success",
				"type": "string"
			}
		],
		"name": "messagesent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "userrole",
				"type": "string"
			}
		],
		"name": "retrieve",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "viewedby",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "senderID",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "receiverID",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "message",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct messages.Message[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "receiver",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "receivers",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "send",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
var contractAddress2 = "0xA440C37C13fF5162015c39e7F11BF42565763f70";
var abi3 = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "success",
				"type": "string"
			}
		],
		"name": "disinterestMarked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "success",
				"type": "string"
			}
		],
		"name": "infoupdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "success",
				"type": "string"
			}
		],
		"name": "interestMarked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "success",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "verificationStr",
				"type": "bytes32"
			}
		],
		"name": "sharesBoughtEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "success",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "verificationStr",
				"type": "bytes32"
			}
		],
		"name": "sharesShared",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "desc",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "l",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "metamask",
				"type": "address"
			}
		],
		"name": "addIdeator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "investorID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "shareCount",
				"type": "uint256"
			}
		],
		"name": "disinterest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "getIdeator",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "userid",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "about",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "investors",
						"type": "string[]"
					},
					{
						"internalType": "uint256[][]",
						"name": "sharesbought",
						"type": "uint256[][]"
					},
					{
						"internalType": "uint256[][]",
						"name": "boughtFor",
						"type": "uint256[][]"
					},
					{
						"internalType": "bytes32[][]",
						"name": "verifyStrings",
						"type": "bytes32[][]"
					},
					{
						"internalType": "uint256[]",
						"name": "assets",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256[]",
						"name": "liabilities",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256",
						"name": "pv",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "shares",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sharesLeft",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "timestamp",
						"type": "uint256[]"
					},
					{
						"internalType": "address",
						"name": "metamaskaddress",
						"type": "address"
					}
				],
				"internalType": "struct shares.Profile",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "investorID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "shareCount",
				"type": "uint256"
			}
		],
		"name": "interest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "investorid",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "boughtCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "bVal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "dec",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "metamask",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "combin",
				"type": "string"
			}
		],
		"name": "invest",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retrieve",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "userid",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "about",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "investors",
						"type": "string[]"
					},
					{
						"internalType": "uint256[][]",
						"name": "sharesbought",
						"type": "uint256[][]"
					},
					{
						"internalType": "uint256[][]",
						"name": "boughtFor",
						"type": "uint256[][]"
					},
					{
						"internalType": "bytes32[][]",
						"name": "verifyStrings",
						"type": "bytes32[][]"
					},
					{
						"internalType": "uint256[]",
						"name": "assets",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256[]",
						"name": "liabilities",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256",
						"name": "pv",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "shares",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sharesLeft",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "timestamp",
						"type": "uint256[]"
					},
					{
						"internalType": "address",
						"name": "metamaskaddress",
						"type": "address"
					}
				],
				"internalType": "struct shares.Profile[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "retrieveInterests",
		"outputs": [
			{
				"internalType": "string[][]",
				"name": "",
				"type": "string[][]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ideatorID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "toID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "fromID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "shareCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "bVal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "dec",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "metamask",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "combin",
				"type": "string"
			}
		],
		"name": "transfer",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "uint256ToString",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "desc",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "l",
				"type": "uint256"
			}
		],
		"name": "updateIdeator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "str",
				"type": "bytes32"
			}
		],
		"name": "verifydocument",
		"outputs": [
			{
				"internalType": "string[5]",
				"name": "",
				"type": "string[5]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];
var contractAddress3 = "0x79Ee1017B0e365a48C1bB6a50688d862865542ed";
var abi5 = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "success",
				"type": "string"
			}
		],
		"name": "registerevent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "success",
				"type": "string"
			}
		],
		"name": "registrarUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "success",
				"type": "string"
			}
		],
		"name": "transferevent",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "sd",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "td",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rf",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "coord",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "metamask",
				"type": "address"
			}
		],
		"name": "addRegistrar",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "getOwnedLands",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "RDN",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "userids",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "names",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "home",
						"type": "string[]"
					},
					{
						"internalType": "address[]",
						"name": "metamaskaddress",
						"type": "address[]"
					},
					{
						"internalType": "string",
						"name": "details",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "coordinates",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "saledeed",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "verified",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "pendingTransfer",
						"type": "bool"
					},
					{
						"internalType": "string[]",
						"name": "new_userids",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "new_names",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "new_home",
						"type": "string[]"
					},
					{
						"internalType": "address[]",
						"name": "new_metamaskaddress",
						"type": "address[]"
					},
					{
						"internalType": "string",
						"name": "new_saledeed",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "fee",
						"type": "uint256"
					}
				],
				"internalType": "struct lands.Land[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "getRegistrar",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "userid",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "sd",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "td",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rf",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "coordinates",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "metamaskaddress",
						"type": "address"
					}
				],
				"internalType": "struct lands.Registrar",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "rd",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "ids",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "fullnames",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "addresses",
				"type": "string[]"
			},
			{
				"internalType": "address[]",
				"name": "metamask",
				"type": "address[]"
			},
			{
				"internalType": "string",
				"name": "det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "coord",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "deed",
				"type": "string"
			}
		],
		"name": "registerLand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retrieve",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "userid",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "sd",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "td",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rf",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "coordinates",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "metamaskaddress",
						"type": "address"
					}
				],
				"internalType": "struct lands.Registrar[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retrieveCoordinates",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "rd",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "ids",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "fullnames",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "addresses",
				"type": "string[]"
			},
			{
				"internalType": "address[]",
				"name": "metamask",
				"type": "address[]"
			},
			{
				"internalType": "string",
				"name": "deed",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "f",
				"type": "uint256"
			}
		],
		"name": "transferLand",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unverifiedLands",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "RDN",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "userids",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "names",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "home",
						"type": "string[]"
					},
					{
						"internalType": "address[]",
						"name": "metamaskaddress",
						"type": "address[]"
					},
					{
						"internalType": "string",
						"name": "details",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "coordinates",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "saledeed",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "verified",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "pendingTransfer",
						"type": "bool"
					},
					{
						"internalType": "string[]",
						"name": "new_userids",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "new_names",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "new_home",
						"type": "string[]"
					},
					{
						"internalType": "address[]",
						"name": "new_metamaskaddress",
						"type": "address[]"
					},
					{
						"internalType": "string",
						"name": "new_saledeed",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "fee",
						"type": "uint256"
					}
				],
				"internalType": "struct lands.Land[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "sd",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "td",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rf",
				"type": "uint256"
			}
		],
		"name": "updateRegistrar",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "rd",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"name": "verifyRegistration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "rd",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"name": "verifyTransfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];
var contractAddress5 = "0xDE3Ce946b643AE52CE1B25fD336adf2012681d1D";
var abi6 = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "success",
				"type": "string"
			}
		],
		"name": "disinterestMarked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "success",
				"type": "string"
			}
		],
		"name": "interestMarked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "success",
				"type": "string"
			}
		],
		"name": "nftMinted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "success",
				"type": "string"
			}
		],
		"name": "nftTransferred",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "uid",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "metamask",
				"type": "address"
			}
		],
		"name": "buy",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "disinterest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMintCount",
		"outputs": [
			{
				"internalType": "string[][]",
				"name": "",
				"type": "string[][]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "interest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "t",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "metamask",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "cd",
				"type": "string"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "retrieve",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "nftID",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "userid",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "cid",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "sell",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "metamaskaddress",
						"type": "address"
					}
				],
				"internalType": "struct nfts.NFT[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retrieveInterests",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "nftID",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "userid",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "cid",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "sell",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "metamaskaddress",
						"type": "address"
					}
				],
				"internalType": "struct nfts.NFT[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "uint256ToString",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];
var contractAddress6 = "0x8C2D9dCA9E524c2884FCB771CEfE91bb73838f57";
var userids;
var unverifiedUsers;
var verifiedUsers;
var usersCount=0;
var messagesCount=0;
var othermessageids=[];
var retrievedMessages;
var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt,{expressionsTopbar:false, expressions: false, keypad:false, settingsMenu: false, invertedColors:true});
var ideatorsList = {};
var investorsList = {};
var registrarsList = {};
var vendorsList = {};

/*Header*/

$(".app-header__anchor").click(function()
{
	$("#participantsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#homePage").css("display", "block");
    $("#homePage .nav-section a").removeClass("nav__link--active");
	$("#homePage .channel-feed__body").css("display","none");
	if(usersCount>0)
	{
		$("#user1 a").addClass("nav__link--active");
		$("#user1verification").css("display","block");
	}
});
$(".homeButton").click(function()
{
	$("#participantsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#homePage").css("display", "block");
    $("#homePage .nav-section a").removeClass("nav__link--active");
	$("#homePage .channel-feed__body").css("display","none");
	if(usersCount>0)
	{
		$("#user1 a").addClass("nav__link--active");
		$("#user1verification").css("display","block");
	}
});
$(".participantsButton").click(function()
{
	ele = document.getElementById("ideatorPButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active');
	}
	ele.classList.add("button__active");
	$("#homePage").css("display", "none");
    $("#messagesPage").css("display", "none");
	$("#participantsPage").css("display", "block");
    $("#participantsPage .nav-section a").removeClass("nav__link--active");
	$("#ideatorsparticipants a").addClass("nav__link--active");
	$("#participantsPage .channel-feed__body").css("display","none");
	$("#ideatorsparticipantslist").css("display", "block");
});
$(".messagesButton").click(function()
{
	ele = document.getElementById("everyoneMButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active');
	}
	ele.classList.add("button__active");
    $("#homePage").css("display", "none");
	$("#participantsPage").css("display", "none");
    $("#messagesPage").css("display", "block");
	$("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#everyonemessage a").addClass("nav__link--active");
    $("#messagesPage .channel-feed__body").css("display","none");
    $("#everyonemessagecontent").css("display","block");
	appendTo = "#everyonemessagecontent";
    towhomid = "";
    towhomname = "everyone";
	var elem=document.getElementById("everyonemessagecontent");
	elem.scrollTop = elem.scrollHeight;
	$(".nav-mobile").html("");
});
$(".logout").click(function()
{
    window.sessionStorage.clear();
    window.location="index.html";
});
$(".segment-topbar__overline").html("Wallet Address: "+window.sessionStorage.getItem("walletAddress"));

/*Add Admin*/

function addAdmin()
{
	var adminAddress=prompt("Enter the metamask address of the new admin:");
	if(adminAddress=="" || adminAddress===null)
	{
		return;
	}
	if(!window.web3.utils.isAddress(adminAddress))
	{
		alert("Not a valid address!");
	}
	try
    {
        async function add()
        {
            try
            {
                window.contract = await new web3.eth.Contract(abi, contractAddress);
            }
            catch(err)
            {
                alert(err.message);
                return;
            }
            web3.eth.getAccounts().then(function(acc){
                accounts = acc;
                window.contract.methods.addAdmin(adminAddress).send({from: accounts[0], gas: 4000000}, function(err, result) {
                    if(err)
                    {
                        alert(err);
                    }
                }).on("receipt",function(res)
				{
                    if(res.events.adminEvent.returnValues.success=="YES")
					{
						alert("Admin Addition Successful");
					}
					else if(res.events.adminEvent.returnValues.success=="NO")
					{
						alert("Metamask Account already exists!");
					}
					else
					{
						alert("Operation Unsuccessful");
					}
				});
            });
        }
        add();
    }
    catch(err)
    {
        alert(err.message);
        return;
    }
}

/*Verification*/

async function setImage(cid, uid, id)
{
	$.get("https://ipfs.io/ipfs/"+cid, function(data)
	{
		var decryptedImageDataString = JSON.parse(CryptoJS.AES.decrypt(data.toString(), uid).toString(CryptoJS.enc.Utf8)).uploaded_image;
		$("#user"+id+"Image").attr("src", decryptedImageDataString);
	})
	.fail(function()
	{
		$("#user"+id+"Image").attr("src", "");
		$("#user"+id+"Image").attr("alt", "IPFS Node Inactive");
	});
}
try
{
    async function getunverifiedusers()
    {
        try
        {
            window.contract = await new web3.eth.Contract(abi, contractAddress);
        }
        catch(err)
        {
            alert(err.message);
            return;
        }
        unverifiedUsers = await window.contract.methods.unverified().call();
		for(itr=0;itr<unverifiedUsers.length;itr++)
		{
			ele = unverifiedUsers[itr];
			$("#unverifiedUsersList").append(
			`<li class="nav__item" id="user`+(usersCount+1)+`">
				<a class="nav__link" href="#">
					<span class="channel-link">
						<span class="channel-link__icon">#</span>
						<span class="channel-link__element">`+ele.userid+`</span>
					</span>
				</a>
			</li>`
			);
			$("#user"+(usersCount+1)).click(function()
			{
				var id = this.id;
				$("#homePage .nav-section a").removeClass("nav__link--active");
				$("#"+id+" a").addClass("nav__link--active");
				$("#homePage .channel-feed__body").css("display","none");
				$("#"+id+"verification").css("display","block");
			});
			var toAdd="";
			if(usersCount>=1)
			{
				toAdd=`style="display:none;"`;
			}
			setImage(ele.idimage, ele.userid, usersCount+1);
			$("#userMarker").before(
				`
				<div class="channel-feed__body" id="user`+(usersCount+1)+`verification" `+toAdd+`>
					<div class="message">
						<div class="message__body">
							<div>
								<div style="display:flex;color:#E6455C;">Wallet Address:<span id="metamask`+(usersCount+1)+`" style="margin-left:auto;color:#fed33f;">`+ele.metamaskaddress+`</span></div>
								<div style="display:flex;color:#E6455C;">User ID:<span style="margin-left:auto;color:#fed33f;">`+ele.userid+`</span></div>
							</div>
							<div style="display: flex;justify-content:space-between;margin-top:32px;">
								<div style="width:40%;">
									<form id="user`+(usersCount+1)+`form" action="#">
										<div class="user-box">
											<input type="text" required maxlength="100" id="homeAddress`+(usersCount+1)+`">
											<label>Address: </label>
										</div>
										<div class="user-box">
											<input type="number" required id="mobileNo`+(usersCount+1)+`">
											<label>Mobile: </label>
										</div>
										<div class="user-box">
											<input type="number" maxlength="12" required id="UID`+(usersCount+1)+`">
											<label>Unique Identification No.: </label>
										</div>
										<div style="display:flex;justify-content:center;margin-right:32px;">
											<button onclick="acceptUser(this);" class="AcceptRejectButton" style="margin-right:30px;" type="button" id="acceptUser`+(usersCount+1)+`">Accept</button>
											<button onclick="rejectUser(this);" class="AcceptRejectButton" type="button" id="rejectUser`+(usersCount+1)+`">Reject</button>
										</div>
									</form>
								</div>
								<div style="width:40%">
									<img id="user`+(usersCount+1)+`Image" src="" alt="Loading..." style="width:80%;"/>
								</div>
							</div>
						</div>
						<div class="message__footer">
							<span class="message__authoring">`+ele.role.toUpperCase()+`</span>
						</div>
					</div>
				</div>`
			);
			usersCount++;
		}
		$("#homePage .nav-section a").removeClass("nav__link--active");
		$("#homePage .channel-feed__body").css("display","none");
		if(usersCount>0)
		{
			$("#user1 a").addClass("nav__link--active");
			$("#user1verification").css("display","block");
		}
    }
	getunverifiedusers();
}
catch(err)
{
    alert(err.message);
}
function acceptUser(ele)
{
	var verificationID = ele.id.substring(10);
	if($("#homeAddress"+verificationID).val().length>0 && $("#mobileNo"+verificationID).val().length>0 && $("#UID"+verificationID).val().length==12)
	{
		try
		{
			async function verifyUser()
			{
				try
				{
					window.contract = await new web3.eth.Contract(abi, contractAddress);
				}
				catch(err)
				{
					alert(err.message);
					return;
				}
				web3.eth.getAccounts().then(function(acc){
					accounts = acc;
					window.contract.methods.verify($("#metamask"+verificationID).html(),"YES",$("#UID"+verificationID).val(),$("#homeAddress"+verificationID).val(),$("#mobileNo"+verificationID).val()).send({from: accounts[0], gas: 4000000}, function(err, result) {
							if(err)
							{
								alert(err);
							}
						}).on("receipt",function(res){
							alert("Verification Successful!");
							window.location.reload();
					});
				});
			}
			verifyUser();
		}
		catch(err)
		{
			alert(err.message);
			return;
		}
	}
	else
	{
		alert("Fill in the details appropriately!");
	}
}
function rejectUser(ele)
{
	var verificationID = ele.id.substring(10);
	try
	{
		async function verifyUser()
		{
			try
			{
				window.contract = await new web3.eth.Contract(abi, contractAddress);
			}
			catch(err)
			{
				alert(err.message);
				return;
			}
			web3.eth.getAccounts().then(function(acc){
				accounts = acc;
				window.contract.methods.verify($("#metamask"+verificationID).html(),"NOPE",$("#UID"+verificationID).val(),$("#homeAddress"+verificationID).val(),$("#mobileNo"+verificationID).val()).send({from: accounts[0], gas: 4000000}, function(err, result) {
						if(err)
						{
							alert(err);
						}
					}).on("receipt",function(res){
						alert("Rejection Successful!");
						window.location.reload();
				});
			});
		}
		verifyUser();
	}
	catch(err)
	{
		alert(err.message);
		return;
	}
}
function previousVerification()
{
	var previousid = "user"+(parseInt($('#homePage .app-a .nav__link--active').parent()[0].id.substring(4))-1);
	if($("#"+previousid).length==0)
	{
		return;
	}
	$("#homePage .nav-section a").removeClass("nav__link--active");
	$("#"+previousid+" a").addClass("nav__link--active");
	$("#homePage .channel-feed__body").css("display","none");
	$("#"+previousid+"verification").css("display","block");
}
function nextVerification()
{
	var nextID = "user"+(parseInt($('#homePage .app-a .nav__link--active').parent()[0].id.substring(4))+1);
	if($("#"+nextID).length==0)
	{
		return;
	}
	$("#homePage .nav-section a").removeClass("nav__link--active");
	$("#"+nextID+" a").addClass("nav__link--active");
	$("#homePage .channel-feed__body").css("display","none");
	$("#"+nextID+"verification").css("display","block");
}

/*Participants*/

$("#ideatorsparticipants").click(function()
{
	ele = document.getElementById("ideatorPButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active')
	}
	ele.classList.add("button__active");
    $("#participantsPage .nav-section a").removeClass("nav__link--active");
	$("#ideatorsparticipants a").addClass("nav__link--active");
	$("#vendorsparticipantslist").css("display", "none");
	$("#registrarsparticipantslist").css("display", "none");
	$("#investorsparticipantslist").css("display", "none");
	$("#ideatorsparticipantslist").css("display", "block");
});
$("#vendorsparticipants").click(function()
{
	ele = document.getElementById("vendorPButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active')
	}
	ele.classList.add("button__active");
    $("#participantsPage .nav-section a").removeClass("nav__link--active");
	$("#vendorsparticipants a").addClass("nav__link--active");
    $("#ideatorsparticipantslist").css("display", "none");
	$("#registrarsparticipantslist").css("display", "none");
	$("#investorsparticipantslist").css("display", "none");
	$("#vendorsparticipantslist").css("display", "block");
});
$("#registrarsparticipants").click(function()
{
	ele = document.getElementById("registrarPButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active')
	}
	ele.classList.add("button__active");
    $("#participantsPage .nav-section a").removeClass("nav__link--active");
	$("#registrarsparticipants a").addClass("nav__link--active");
    $("#ideatorsparticipantslist").css("display", "none");
	$("#vendorsparticipantslist").css("display", "none");
	$("#investorsparticipantslist").css("display", "none");
	$("#registrarsparticipantslist").css("display", "block");
});
$("#investorsparticipants").click(function()
{
	ele = document.getElementById("investorPButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active')
	}
	ele.classList.add("button__active");
    $("#participantsPage .nav-section a").removeClass("nav__link--active");
	$("#investorsparticipants a").addClass("nav__link--active");
    $("#ideatorsparticipantslist").css("display", "none");
	$("#vendorsparticipantslist").css("display", "none");
	$("#registrarsparticipantslist").css("display", "none");
	$("#investorsparticipantslist").css("display", "block");
});
async function getIdeatorsInfo()
{
    try
    {
        window.contract = await new web3.eth.Contract(abi3, contractAddress3);
    }
    catch(err)
    {
        alert(err.message);
        return;
    }
    var ideatorInfo = await window.contract.methods.retrieve().call();
    for(i=0;i<ideatorInfo.length;i++)
    {
        var mv = ((parseInt(ideatorInfo[i].assets[ideatorInfo[i].assets.length-1])-parseInt(ideatorInfo[i].liabilities[ideatorInfo[i].liabilities.length-1]))/parseInt(ideatorInfo[i].shares));
        var profitPercent = (((mv-ideatorInfo[i].pv)/ideatorInfo[i].pv)*100);
		var pointsString = "";
		var maxValue=10;
		for(emo=0;emo<ideatorInfo[i].timestamp.length;emo++)
		{
			if(emo>0)
			{
				pointsString+=",";
			}
			k = ((parseInt(ideatorInfo[i].assets[emo])-parseInt(ideatorInfo[i].liabilities[emo]))*(1/parseInt(ideatorInfo[i].shares)));
			if(maxValue<k)
			{
				maxValue = k;
			}
			pointsString+=`(`+(emo+1)+`,`+k+`)`;
		}
		ideatorsList[ideatorInfo[i].userid] = [ideatorInfo[i].shares, ideatorInfo[i].sharesLeft, ideatorInfo[i].investors.length, profitPercent, pointsString, maxValue];
		for(emo=0;emo<ideatorInfo[i].investors.length;emo++)
		{
			if(ideatorInfo[i].investors[emo] in investorsList)
			{
				investorsList[ideatorInfo[i].investors[emo]].push([ideatorInfo[i].name, profitPercent]);
			}
			else
			{
				investorsList[ideatorInfo[i].investors[emo]]=[]
				investorsList[ideatorInfo[i].investors[emo]].push([ideatorInfo[i].name, profitPercent]);
			}
		}
    }
	getRegistrarsInfo();
}
async function getRegistrarsInfo()
{
    try
    {
        window.contract = await new web3.eth.Contract(abi5, contractAddress5);
    }
    catch(err)
    {
        alert(err.message);
        return;
    }
    var registrarInfo = await window.contract.methods.retrieve().call();
    for(i=0;i<registrarInfo.length;i++)
    {
		registrarsList[registrarInfo[i].userid] = [registrarInfo[i].sd, registrarInfo[i].td, registrarInfo[i].rf];
    }
	getVendorsInfo();
}
async function getVendorsInfo()
{
    try
    {
        window.contract = await new web3.eth.Contract(abi6, contractAddress6);
    }
    catch(err)
    {
        alert(err.message);
        return;
    }
    var vendorInfo = await window.contract.methods.getMintCount().call();
    for(i=0;i<vendorInfo.length;i++)
    {
		vendorsList[vendorInfo[i][0]] = [vendorInfo[i][1]];
    }
	getverifiedusers();
}
async function getverifiedusers()
{
    try
    {
        window.contract = await new web3.eth.Contract(abi, contractAddress);
    }
    catch(err)
    {
        alert(err.message);
        return;
    }
    verifiedUsers = await window.contract.methods.usersdb().call();
	var a=0, b=0, c=0,d=0;
	for(itr=0;itr<verifiedUsers.length;itr++)
	{
		ele = verifiedUsers[itr];
		if(ele.role=="ideator")
		{
			a++;
		}
		else if(ele.role=="investor")
		{
			b++;
		}
		else if(ele.role=="vendor")
		{
			c++;
		}
		else if(ele.role=="registrar")
		{
			d++;
		}
	}
	var page1=0, pages1=Math.ceil(a/10), ideatorCount=0;
	var styleString1="";
	var page2=0, pages2=Math.ceil(b/10), investorCount=0;
	var styleString2="";
	var page3=0, pages3=Math.ceil(c/10), vendorCount=0;
	var styleString3="";
	var page4=0, pages4=Math.ceil(d/10), registrarCount=0;
	var styleString4="";
	for(itr=0;itr<verifiedUsers.length;itr++)
	{
		ele = verifiedUsers[itr];
		if(ele.role=="ideator")
		{
			if(ideatorCount%10==0)
			{
				page1++;
				if(page1>1)
				{
					styleString1=`style="display:none;"`;
				}
				$("#ideatorsparticipantslist").append(`
				<div class="cards-wrapper" id="page`+page1+`" `+styleString1+`>
					<div class="cards-header">
						<div class="cards-header-date">
							<svg style="cursor:pointer;" onclick="previousPage1(`+page1+`)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><path d="M15 18l-6-6 6-6" /></svg>
							<div class="title">Page `+page1+` of `+pages1+`</div>
							<svg style="cursor:pointer;" onclick="nextPage1(`+page1+`)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><path d="M9 18l6-6-6-6" /></svg>
						</div>
					</div>
					<div class="cards card">
						<table class="table">
							<thead>
								<tr>
									<th>User ID</th>
									<th>Wallet Address</th>
									<th>Aadhar No.</th>
									<th>Address</th>
									<th>Mobile</th>
									<th>Shares</th>
									<th>Investors</th>
									<th>+/-</th>
									<th>Growth</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>`);
			}
			if(ele.userid in ideatorsList)
			{
				info = ideatorsList[ele.userid];
				if(info[3]>0)
				{
					statusColor="is-green";
				}
				else if(info[3]<0)
				{
					statusColor="is-red";
				}
				else
				{
					statusColor="is-wait";
				}
			}
			else
			{
				info = ["NA", "NA", "NA", "NA", "(0,0)", 5];
				statusColor="is-wait";
			}
			home2 = ele.home.includes(",") ? (ele.home.split(",").reverse()[1].trim()+","+ele.home.split(",").reverse()[0]) : ele.home;
			$("#ideatorsparticipantslist #page"+page1+" .table tbody").append(`
				<tr>
                    <td>`+ele.userid+`</td>
                    <td>`+ele.metamaskaddress+`</td>
                    <td>`+"XXXXXXXX"+ele.aadharNum.substring(8)+`</td>
                    <td>`+home2+`</td>
                    <td>`+"XXXXXXXX"+ele.mobile.substring(8)+`</td>
                    <td>`+info[0]+` (`+info[1]+`)</td>
                    <td>`+info[2]+`</td>
                    <td>
                        <div class="status `+statusColor+`">`+info[3]+` %</div>
                    </td>
                    <td>
                        <span class="time" onclick="growthGraph('`+info[4]+`',`+info[5]+`);">VIEW</span>
                	</td>
                </tr>
			`);
			ideatorCount++;
		}
		else if(ele.role=="investor")
		{
			if(investorCount%10==0)
			{
				page2++;
				if(page2>1)
				{
					styleString2=`style="display:none;"`;
				}
				$("#investorsparticipantslist").append(`
				<div class="cards-wrapper" id="ipage`+page2+`" `+styleString2+`>
					<div class="cards-header">
						<div class="cards-header-date">
							<svg style="cursor:pointer;" onclick="previousPage2(`+page2+`)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><path d="M15 18l-6-6 6-6" /></svg>
							<div class="title">Page `+page2+` of `+pages2+`</div>
							<svg style="cursor:pointer;" onclick="nextPage2(`+page2+`)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><path d="M9 18l6-6-6-6" /></svg>
						</div>
					</div>
					<div class="cards card">
						<table class="table">
							<thead>
								<tr>
									<th>User ID</th>
									<th>Wallet Address</th>
									<th>Aadhar No.</th>
									<th>Address</th>
									<th>Mobile</th>
									<th>Investments</th>
									<th>Judgement Score</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>`);
			}
			var score=0;
			if(ele.userid in investorsList)
			{
				info = investorsList[ele.userid];
				companyString="";
				for(k=0;k<info.length;k++)
				{
					if(info[k][1]>0)
					{
						companyString+="<p class='status'>"+info[k][0]+"</p>";
					}
					else if(info[k][1]<0)
					{
						companyString+="<p class='status is-red'>"+info[k][0]+"</p>";
					}
					else
					{
						companyString+="<p class='status is-wait'>"+info[k][0]+"</p>";
					}
					score+=info[k][1];
				}
				score=score/info.length;
				score = score.toFixed(3);
			}
			else
			{
				companyString="<p class='status is-wait'>NA</p>";
				score=0;
			}
			home2 = ele.home.includes(",") ? (ele.home.split(",").reverse()[1].trim()+","+ele.home.split(",").reverse()[0]) : ele.home;
			$("#investorsparticipantslist #ipage"+page2+" .table tbody").append(`
				<tr>
                    <td>`+ele.userid+`</td>
                    <td>`+ele.metamaskaddress+`</td>
                    <td>`+"XXXXXXXX"+ele.aadharNum.substring(8)+`</td>
                    <td>`+home2+`</td>
                    <td>`+"XXXXXXXX"+ele.mobile.substring(8)+`</td>
                    <td>`+companyString+`</td>
                    <td>
                        <span class="time">`+score+`</span>
                	</td>
                </tr>
			`);
			investorCount++;
		}
		else if(ele.role=="vendor")
		{
			if(vendorCount%10==0)
			{
				page3++;
				if(page3>1)
				{
					styleString3=`style="display:none;"`;
				}
				$("#vendorsparticipantslist").append(`
				<div class="cards-wrapper" id="vpage`+page3+`" `+styleString3+`>
					<div class="cards-header">
						<div class="cards-header-date">
							<svg style="cursor:pointer;" onclick="previousPage3(`+page3+`)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><path d="M15 18l-6-6 6-6" /></svg>
							<div class="title">Page `+page3+` of `+pages3+`</div>
							<svg style="cursor:pointer;" onclick="nextPage3(`+page3+`)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><path d="M9 18l6-6-6-6" /></svg>
						</div>
					</div>
					<div class="cards card">
						<table class="table">
							<thead>
								<tr>
									<th>User ID</th>
									<th>Wallet Address</th>
									<th>Aadhar No.</th>
									<th>Address</th>
									<th>Mobile</th>
									<th>NFTs Minted</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>`);
			}
			if(vendorsList[ele.userid]===undefined)
			{
				vendorsList[ele.userid] = ["-"];
			}
			home2 = ele.home.includes(",") ? (ele.home.split(",").reverse()[1].trim()+","+ele.home.split(",").reverse()[0]) : ele.home;
			$("#vendorsparticipantslist #vpage"+page3+" .table tbody").append(`
				<tr>
                    <td>`+ele.userid+`</td>
                    <td>`+ele.metamaskaddress+`</td>
                    <td>`+"XXXXXXXX"+ele.aadharNum.substring(8)+`</td>
                    <td>`+home2+`</td>
                    <td>`+"XXXXXXXX"+ele.mobile.substring(8)+`</td>
					<td>`+vendorsList[ele.userid][0]+`</td>
                </tr>
			`);
			vendorCount++;
		}
		else if(ele.role=="registrar")
		{
			if(registrarCount%10==0)
			{
				page4++;
				if(page4>1)
				{
					styleString4=`style="display:none;"`;
				}
				$("#registrarsparticipantslist").append(`
				<div class="cards-wrapper" id="rpage`+page4+`" `+styleString4+`>
					<div class="cards-header">
						<div class="cards-header-date">
							<svg style="cursor:pointer;" onclick="previousPage4(`+page4+`)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><path d="M15 18l-6-6 6-6" /></svg>
							<div class="title">Page `+page4+` of `+pages4+`</div>
							<svg style="cursor:pointer;" onclick="nextPage4(`+page4+`)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><path d="M9 18l6-6-6-6" /></svg>
						</div>
					</div>
					<div class="cards card">
						<table class="table">
							<thead>
								<tr>
									<th>User ID</th>
									<th>Wallet Address</th>
									<th>Aadhar No.</th>
									<th>Mobile</th>
									<th>Stamp Duty</th>
									<th>Transfer Duty</th>
									<th>Registration Fees</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>`);
			}
			if(registrarsList[ele.userid]===undefined)
			{
				registrarsList[ele.userid] = ["-", "-", "-"];
			}
			$("#registrarsparticipantslist #rpage"+page4+" .table tbody").append(`
				<tr>
                    <td>`+ele.userid+`</td>
                    <td>`+ele.metamaskaddress+`</td>
                    <td>`+"XXXXXXXX"+ele.aadharNum.substring(8)+`</td>
                    <td>`+"XXXXXXXX"+ele.mobile.substring(8)+`</td>
					<td>`+registrarsList[ele.userid][0]+`</td>
					<td>`+registrarsList[ele.userid][1]+`</td>
					<td>`+registrarsList[ele.userid][2]+`</td>
                </tr>
			`);
			registrarCount++;
		}
	}
	const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
	const comparer = (idx, asc) => (a, b) => ((v1, v2) => v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2))(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
	document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
		const table = th.closest('table');
		let siblings = th.parentElement.children;
		for(let sib of siblings)
		{
			sib.classList.remove('sorted')
		}
		th.classList.add("sorted");
		const tbody = table.querySelector('tbody');
		Array.from(tbody.querySelectorAll('tr'))
			.sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
			.forEach(tr => tbody.appendChild(tr) );
	})));
}
getIdeatorsInfo();
function growthGraph(points, maximum)
{
    calculator.setMathBounds({left: 0,right: 5,bottom: 0,top: maximum});
    calculator.setExpression({id: 'graph1',latex: points, lineWidth:1, points: true, lines: true, pointStyle: Desmos.Styles.POINT, lineStyle: Desmos.Styles.SOLID,color: "#012cc0"});
}
function previousPage1(page)
{
	if($("#ideatorsparticipantslist #page"+(page-1)).length==0)
	{
		return;
	}
	$("#ideatorsparticipantslist #page"+page).css("display", "none");
	$("#ideatorsparticipantslist #page"+(page-1)).css("display", "block");
}
function nextPage1(page)
{
	if($("#ideatorsparticipantslist #page"+(page+1)).length==0)
	{
		return;
	}
	$("#ideatorsparticipantslist #page"+page).css("display", "none");
	$("#ideatorsparticipantslist #page"+(page+1)).css("display", "block");
}
function previousPage2(page)
{
	if($("#investorsparticipantslist #ipage"+(page-1)).length==0)
	{
		return;
	}
	$("#investorsparticipantslist #ipage"+page).css("display", "none");
	$("#investorsparticipantslist #ipage"+(page-1)).css("display", "block");
}
function nextPage2(page)
{
	if($("#investorsparticipantslist #ipage"+(page+1)).length==0)
	{
		return;
	}
	$("#investorsparticipantslist #ipage"+page).css("display", "none");
	$("#investorsparticipantslist #ipage"+(page+1)).css("display", "block");
}
function previousPage3(page)
{
	if($("#vendorsparticipantslist #vpage"+(page-1)).length==0)
	{
		return;
	}
	$("#vendorsparticipantslist #vpage"+page).css("display", "none");
	$("#vendorsparticipantslist #vpage"+(page-1)).css("display", "block");
}
function nextPage3(page)
{
	if($("#vendorsparticipantslist #vpage"+(page+1)).length==0)
	{
		return;
	}
	$("#vendorsparticipantslist #vpage"+page).css("display", "none");
	$("#vendorsparticipantslist #vpage"+(page+1)).css("display", "block");
}
function previousPage4(page)
{
	if($("#registrarsparticipantslist #rpage"+(page-1)).length==0)
	{
		return;
	}
	$("#registrarsparticipantslist #rpage"+page).css("display", "none");
	$("#registrarsparticipantslist #rpage"+(page-1)).css("display", "block");
}
function nextPage4(page)
{
	if($("#registrarsparticipantslist #rpage"+(page+1)).length==0)
	{
		return;
	}
	$("#registrarsparticipantslist #rpage"+page).css("display", "none");
	$("#registrarsparticipantslist #rpage"+(page+1)).css("display", "block");
}
function ideatorParticipants(ele)
{
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active')
	}
	ele.classList.add("button__active");
    $("#participantsPage .nav-section a").removeClass("nav__link--active");
	$("#ideatorsparticipants a").addClass("nav__link--active");
	$("#vendorsparticipantslist").css("display", "none");
	$("#registrarsparticipantslist").css("display", "none");
	$("#investorsparticipantslist").css("display", "none");
	$("#ideatorsparticipantslist").css("display", "block");
}
function vendorParticipants(ele)
{
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active')
	}
	ele.classList.add("button__active");
    $("#participantsPage .nav-section a").removeClass("nav__link--active");
	$("#vendorsparticipants a").addClass("nav__link--active");
    $("#ideatorsparticipantslist").css("display", "none");
	$("#registrarsparticipantslist").css("display", "none");
	$("#investorsparticipantslist").css("display", "none");
	$("#vendorsparticipantslist").css("display", "block");
}
function registrarParticipants(ele)
{
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active')
	}
	ele.classList.add("button__active");
    $("#participantsPage .nav-section a").removeClass("nav__link--active");
	$("#registrarsparticipants a").addClass("nav__link--active");
    $("#ideatorsparticipantslist").css("display", "none");
	$("#vendorsparticipantslist").css("display", "none");
	$("#investorsparticipantslist").css("display", "none");
	$("#registrarsparticipantslist").css("display", "block");
}
function investorParticipants(ele)
{
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active')
	}
	ele.classList.add("button__active");
    $("#participantsPage .nav-section a").removeClass("nav__link--active");
	$("#investorsparticipants a").addClass("nav__link--active");
    $("#ideatorsparticipantslist").css("display", "none");
	$("#vendorsparticipantslist").css("display", "none");
	$("#registrarsparticipantslist").css("display", "none");
	$("#investorsparticipantslist").css("display", "block");
}

/*Broadcast*/

try
{
    async function getuserids()
    {
        try
        {
            window.contract = await new web3.eth.Contract(abi, contractAddress);
        }
        catch(err)
        {
            alert(err.message);
            return;
        }
        userids = await window.contract.methods.userids().call();
    }
    getuserids();
}
catch(err)
{
    alert(err.message);
}
function retrieveMsgs()
{
	try
    {
        async function retrieve()
        {
            try
            {
                window.contract = await new web3.eth.Contract(abi2, contractAddress2);
            }
            catch(err)
            {
                alert(err.message);
                return;
            }
            retrievedMessages = await window.contract.methods.retrieve("ADMIN","admin").call();
			$("#everyonemessagecontent").html("");
			$("#ideatorsmessagecontent").html("");
			$("#vendorsmessagecontent").html("");
			$("#registrarsmessagecontent").html("");
			$("#investorsmessagecontent").html("");
			for(i=1;i<=messagesCount;i++)
			{
				$("#message"+i+"content").html("");
			}
			for(itr=0;itr<retrievedMessages.length;itr++)
			{
				ele = retrievedMessages[itr];
				if(ele.viewedby=="everyone")
				{
					$("#everyonemessagecontent").append(
						`
						<div class="message" style="width: 45%;text-align: right;margin-left: auto;">
                            <div class="message__body">
                                <div>`+ele.message+`</div>
                            </div>
                            <div class="message__footer">
                                <span class="message__authoring">You</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
                            </div>
                        </div>`);
				}
				else if(ele.viewedby=="ideator")
				{
					$("#ideatorsmessagecontent").append(
						`
						<div class="message" style="width: 45%;text-align: right;margin-left: auto;">
                            <div class="message__body">
                                <div>`+ele.message+`</div>
                            </div>
                            <div class="message__footer">
                                <span class="message__authoring">You</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
                            </div>
                        </div>`);
				}
				else if(ele.viewedby=="vendor")
				{
					$("#vendorsmessagecontent").append(
						`
						<div class="message" style="width: 45%;text-align: right;margin-left: auto;">
                            <div class="message__body">
                                <div>`+ele.message+`</div>
                            </div>
                            <div class="message__footer">
                                <span class="message__authoring">You</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
                            </div>
                        </div>`);
				}
				else if(ele.viewedby=="registrar")
				{
					$("#registrarsmessagecontent").append(
						`
						<div class="message" style="width: 45%;text-align: right;margin-left: auto;">
                            <div class="message__body">
                                <div>`+ele.message+`</div>
                            </div>
                            <div class="message__footer">
                                <span class="message__authoring">You</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
                            </div>
                        </div>`);
				}
				else if(ele.viewedby=="investor")
				{
					$("#investorsmessagecontent").append(
						`
						<div class="message" style="width: 45%;text-align: right;margin-left: auto;">
                            <div class="message__body">
                                <div>`+ele.message+`</div>
                            </div>
                            <div class="message__footer">
                                <span class="message__authoring">You</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
                            </div>
                        </div>`);
				}
				else if(ele.senderID=="ADMIN" && othermessageids.includes(ele.receiverID))
				{
					var sno = othermessageids.findIndex((element) => element == ele.receiverID);
					sno++;
					$("#message"+sno+"content").append(
						`
						<div class="message" style="width: 45%;text-align: right;margin-left: auto;">
                            <div class="message__body">
                                <div>`+ele.message+`</div>
                            </div>
                            <div class="message__footer">
                                <span class="message__authoring">You</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
                            </div>
                        </div>`);
				}
				else if(ele.receiverID=="ADMIN" && othermessageids.includes(ele.senderID))
				{
					var sno = othermessageids.findIndex((element) => element == ele.senderID);
					sno++;
					$("#message"+sno+"content").append(
						`
						<div class="message" style="width: 45%;">
                            <div class="message__body" style="color:#FF6670;border:1px solid #C73848;">
                                <div>`+ele.message+`</div>
                            </div>
                            <div class="message__footer" style="color:#FF6670;">
                                <span class="message__authoring">`+ele.senderID+`</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
                            </div>
                        </div>`);
				}
				else if(ele.senderID=="ADMIN" && !othermessageids.includes(ele.receiverID))
				{
					$("#directMessages").append(
						`<li class="nav__item" id="message`+(messagesCount+1)+`">
							<a class="nav__link " href="#">
								<span class="conversation-link conversation-link--online">
									<span class="conversation-link__icon"></span>
									<span class="conversation-link__element">`+ele.receiverID+`</span>
								</span>
							</a>
						</li>`
					);
					$("#investorsmessagecontent").after(
						`
						<div class="channel-feed__body" id="message`+(messagesCount+1)+`content" style="display:none;">
							<div class="message" style="width: 45%;text-align: right;margin-left: auto;">
								<div class="message__body">
									<div>`+ele.message+`</div>
								</div>
								<div class="message__footer">
									<span class="message__authoring">You</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
								</div>
							</div>
						</div>`
					);
					$("#message"+(messagesCount+1)).click(function()
					{
						var id = this.id;
						$("#messagesPage .nav-section a").removeClass("nav__link--active");
						$("#"+id+" a").addClass("nav__link--active");
						$("#messagesPage .channel-feed__body").css("display","none");
						$("#"+id+"content").css("display","block");
						appendTo = "#"+id+"content";
						towhomid = $("#"+id+" .conversation-link__element").html();
						towhomname = "";
						var elem=document.getElementById(id+"content");
						elem.scrollTop = elem.scrollHeight;
						$(".nav-mobile").html($("#"+id+" a .conversation-link__element").html());
						buttonEle = document.getElementById("everyoneMButton");
						for(let sib of buttonEle.parentElement.children)
						{
							sib.classList.remove('button__active');
						}
					});
					othermessageids.push(ele.receiverID);
					messagesCount++;
				}
				else if(ele.receiverID=="ADMIN" && !othermessageids.includes(ele.senderID))
				{
					$("#directMessages").append(
						`<li class="nav__item" id="message`+(messagesCount+1)+`">
							<a class="nav__link " href="#">
								<span class="conversation-link conversation-link--online">
									<span class="conversation-link__icon"></span>
									<span class="conversation-link__element">`+ele.senderID+`</span>
								</span>
							</a>
						</li>`
					);
					$("#investorsmessagecontent").after(
						`
						<div class="channel-feed__body" id="message`+(messagesCount+1)+`content" style="display:none;">
							<div class="message" style="width: 45%;">
								<div class="message__body" style="color:#FF6670;border:1px solid #C73848;">
									<div>`+ele.message+`</div>
								</div> 
								<div class="message__footer" style="color:#FF6670;">
									<span class="message__authoring">`+ele.senderID+`</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
								</div>
							</div>
						</div>`
					);
					$("#message"+(messagesCount+1)).click(function()
					{
						var id = this.id;
						$("#messagesPage .nav-section a").removeClass("nav__link--active");
						$("#"+id+" a").addClass("nav__link--active");
						$("#messagesPage .channel-feed__body").css("display","none");
						$("#"+id+"content").css("display","block");
						appendTo = "#"+id+"content";
						towhomid = $("#"+id+" .conversation-link__element").html();
						towhomname = "";
						var elem=document.getElementById(id+"content");
						elem.scrollTop = elem.scrollHeight;
						$(".nav-mobile").html($("#"+id+" a .conversation-link__element").html());
						buttonEle = document.getElementById("everyoneMButton");
						for(let sib of buttonEle.parentElement.children)
						{
							sib.classList.remove('button__active');
						}
					});
					othermessageids.push(ele.senderID);
					messagesCount++;
				}
			}
        }
        retrieve();
    }
    catch(err)
    {
        alert(err.message);
    }
}
retrieveMsgs();
setInterval(retrieveMsgs, 30000);
var suggestionhovered = false;
$(".form-search input").on("input",function(e)
{
	$(".form-search input").val($(e.target).val());
    if(($(".form-search input").val().length)>0)
    {
        $(".useridslist").css("display","block");
        var filtereduserids = userids.filter(name => name.includes($(".form-search input").val().toUpperCase()));
        if(filtereduserids.length>=5)
        {
            filtereduserids = filtereduserids.slice(0,5);
        }
        $(".useridslist").html("");
        filtereduserids.forEach(ele => {
            $(".useridslist").append("<li class='searchSuggestions' onclick='searchSuggestionClicked(this);'>"+ele+"</li>");
        });
    }
    else
    {
        $(".useridslist").css("display","none");
    }
});
$(document).on('mouseenter','.searchSuggestions',function()
{
	suggestionhovered = true;
});
$(document).on('mouseleave','.searchSuggestions',function()
{
	suggestionhovered = false;
});
function searchSuggestionClicked(ele)
{
	$(".useridslist").css("display","none");
	if(!othermessageids.includes(ele.innerHTML))
	{
		othermessageids.push(ele.innerHTML);
		$("#directMessages").append(
			`<li class="nav__item" id="message`+(messagesCount+1)+`">
				<a class="nav__link " href="#">
					<span class="conversation-link conversation-link--online">
						<span class="conversation-link__icon"></span>
						<span class="conversation-link__element">`+ele.innerHTML+`</span>
					</span>
				</a>
			</li>`
		);
		$("#investorsmessagecontent").after(
			`<div class="channel-feed__body" id="message`+(messagesCount+1)+`content" style="display:none;">
			</div>`
		);
		$("#message"+(messagesCount+1)).click(function()
		{
			var id = this.id;
			$("#messagesPage .nav-section a").removeClass("nav__link--active");
			$("#"+id+" a").addClass("nav__link--active");
			$("#messagesPage .channel-feed__body").css("display","none");
			$("#"+id+"content").css("display","block");
			appendTo = "#"+id+"content";
			towhomid = $("#"+id+" .conversation-link__element").html();
			towhomname = "";
			var elem=document.getElementById(id+"content");
			elem.scrollTop = elem.scrollHeight;
			$(".nav-mobile").html($("#"+id+" a .conversation-link__element").html());
			buttonEle = document.getElementById("everyoneMButton");
			for(let sib of buttonEle.parentElement.children)
			{
				sib.classList.remove('button__active');
			}
		});
		$("#messagesPage .nav-section a").removeClass("nav__link--active");
		$("#message"+(messagesCount+1)+" a").addClass("nav__link--active");
		$("#messagesPage .channel-feed__body").css("display","none");
		$("#message"+(messagesCount+1)+"content").css("display","block");
		appendTo = "#message"+(messagesCount+1)+"content";
		towhomid = ele.innerHTML;
		towhomname = "";
		$(".nav-mobile").html($("#message"+(messagesCount+1)+" a .conversation-link__element").html());
		messagesCount++;
		buttonEle = document.getElementById("everyoneMButton");
		for(let sib of buttonEle.parentElement.children)
		{
			sib.classList.remove('button__active');
		}
	}
	else
	{
		var id = othermessageids.findIndex((element) => element == ele.innerHTML);
		id++;
		$("#messagesPage .nav-section a").removeClass("nav__link--active");
		$("#message"+id+" a").addClass("nav__link--active");
		$("#messagesPage .channel-feed__body").css("display","none");
		$("#message"+id+"content").css("display","block");
		appendTo = "#message"+id+"content";
		towhomid = $("#message"+id+" .conversation-link__element").html();
		towhomname = "";
		var elem=document.getElementById("message"+id+"content");
		elem.scrollTop = elem.scrollHeight;
		$(".nav-mobile").html($("#message"+id+" a .conversation-link__element").html());
		buttonEle = document.getElementById("everyoneMButton");
		for(let sib of buttonEle.parentElement.children)
		{
			sib.classList.remove('button__active');
		}
	}
}
$(".form-search input").blur(function()
{
	if(!suggestionhovered)
	{
		$(".useridslist").css("display","none");
	}
});
$("#everyonemessage").click(function()
{
	ele = document.getElementById("everyoneMButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active');
	}
	ele.classList.add("button__active");
    $("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#everyonemessage a").addClass("nav__link--active");
    $("#messagesPage .channel-feed__body").css("display","none");
    $("#everyonemessagecontent").css("display","block");
    appendTo = "#everyonemessagecontent";
    towhomid = "";
    towhomname = "everyone";
	var elem=document.getElementById("everyonemessagecontent");
	elem.scrollTop = elem.scrollHeight;
	$(".nav-mobile").html("");
});
$("#ideatorsmessage").click(function()
{
	ele = document.getElementById("ideatorMButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active');
	}
	ele.classList.add("button__active");
    $("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#ideatorsmessage a").addClass("nav__link--active");
    $("#messagesPage .channel-feed__body").css("display","none");
    $("#ideatorsmessagecontent").css("display","block");
    appendTo = "#ideatorsmessagecontent";
    towhomid = "";
    towhomname = "ideators";
	var elem=document.getElementById("ideatorsmessagecontent");
	elem.scrollTop = elem.scrollHeight;
	$(".nav-mobile").html("");
});
$("#vendorsmessage").click(function()
{
	ele = document.getElementById("vendorMButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active');
	}
	ele.classList.add("button__active");
    $("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#vendorsmessage a").addClass("nav__link--active");
    $("#messagesPage .channel-feed__body").css("display","none");
    $("#vendorsmessagecontent").css("display","block");
    appendTo = "#vendorsmessagecontent";
    towhomid = "";
    towhomname = "vendors";
	var elem=document.getElementById("vendorsmessagecontent");
	elem.scrollTop = elem.scrollHeight;
	$(".nav-mobile").html("");
});
$("#registrarsmessage").click(function()
{
	ele = document.getElementById("registrarMButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active');
	}
	ele.classList.add("button__active");
    $("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#registrarsmessage a").addClass("nav__link--active");
    $("#messagesPage .channel-feed__body").css("display","none");
    $("#registrarsmessagecontent").css("display","block");
    appendTo = "#registrarsmessagecontent";
    towhomid = "";
    towhomname = "registrars";
	var elem=document.getElementById("registrarsmessagecontent");
	elem.scrollTop = elem.scrollHeight;
	$(".nav-mobile").html("");
});
$("#investorsmessage").click(function()
{
	ele = document.getElementById("investorMButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active');
	}
	ele.classList.add("button__active");
    $("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#investorsmessage a").addClass("nav__link--active");
    $("#messagesPage .channel-feed__body").css("display","none");
    $("#investorsmessagecontent").css("display","block");
    appendTo = "#investorsmessagecontent";
    towhomid = "";
    towhomname = "investors";
	var elem=document.getElementById("investorsmessagecontent");
	elem.scrollTop = elem.scrollHeight;
	$(".nav-mobile").html("");
});
$(".channel-message-form").submit(function()
{
    var msg = $("#message").val();
    try
    {
        async function sendMessage()
        {
            try
            {
                window.contract = await new web3.eth.Contract(abi2, contractAddress2);
            }
            catch(err)
            {
                alert(err.message);
                return;
            }
            web3.eth.getAccounts().then(function(acc){
                accounts = acc;
                window.contract.methods.send(towhomid,towhomname,"ADMIN",msg).send({from: accounts[0], gas: 4000000}, function(err, result) {
                    if(err)
                    {
                        alert(err);
                    }
                }).on("receipt",function(res){
                    if(res.events.messagesent.returnValues.success=="YES")
					{
						$(appendTo).append(`
                        <div class="message" style="width: 45%;text-align: right;margin-left: auto;">
                            <div class="message__body">
                                <div>`+msg+`</div>
                            </div>
                            <div class="message__footer">
                                <span class="message__authoring">You</span> - `+ formatAMPM(new Date)+`
                            </div>
                        </div>`);
					}
					else if(res.events.messagesent.returnValues.success=="NO")
					{
						alert("Failed to send the message!");
					}
				});
            });
        }
        sendMessage();
    }
    catch(err)
    {
        alert(err.message);
        return;
    }
});
function everyoneBroadcast()
{
	ele = document.getElementById("everyoneMButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active');
	}
	ele.classList.add("button__active");
    $("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#everyonemessage a").addClass("nav__link--active");
    $("#messagesPage .channel-feed__body").css("display","none");
    $("#everyonemessagecontent").css("display","block");
    appendTo = "#everyonemessagecontent";
    towhomid = "";
    towhomname = "everyone";
	var elem=document.getElementById("everyonemessagecontent");
	elem.scrollTop = elem.scrollHeight;
	$(".nav-mobile").html("");
}
function ideatorBroadcast()
{
	ele = document.getElementById("ideatorMButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active');
	}
	ele.classList.add("button__active");
    $("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#ideatorsmessage a").addClass("nav__link--active");
    $("#messagesPage .channel-feed__body").css("display","none");
    $("#ideatorsmessagecontent").css("display","block");
    appendTo = "#ideatorsmessagecontent";
    towhomid = "";
    towhomname = "ideators";
	var elem=document.getElementById("ideatorsmessagecontent");
	elem.scrollTop = elem.scrollHeight;
	$(".nav-mobile").html("");
}
function vendorBroadcast()
{
	ele = document.getElementById("vendorMButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active');
	}
	ele.classList.add("button__active");
    $("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#vendorsmessage a").addClass("nav__link--active");
    $("#messagesPage .channel-feed__body").css("display","none");
    $("#vendorsmessagecontent").css("display","block");
    appendTo = "#vendorsmessagecontent";
    towhomid = "";
    towhomname = "vendors";
	var elem=document.getElementById("vendorsmessagecontent");
	elem.scrollTop = elem.scrollHeight;
	$(".nav-mobile").html("");
}
function registrarBroadcast()
{
	ele = document.getElementById("registrarMButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active');
	}
	ele.classList.add("button__active");
    $("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#registrarsmessage a").addClass("nav__link--active");
    $("#messagesPage .channel-feed__body").css("display","none");
    $("#registrarsmessagecontent").css("display","block");
    appendTo = "#registrarsmessagecontent";
    towhomid = "";
    towhomname = "registrars";
	var elem=document.getElementById("registrarsmessagecontent");
	elem.scrollTop = elem.scrollHeight;
	$(".nav-mobile").html("");
}
function investorBroadcast()
{
	ele = document.getElementById("investorMButton");
	for(let sib of ele.parentElement.children)
	{
		sib.classList.remove('button__active');
	}
	ele.classList.add("button__active");
    $("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#investorsmessage a").addClass("nav__link--active");
    $("#messagesPage .channel-feed__body").css("display","none");
    $("#investorsmessagecontent").css("display","block");
    appendTo = "#investorsmessagecontent";
    towhomid = "";
    towhomname = "investors";
	var elem=document.getElementById("investorsmessagecontent");
	elem.scrollTop = elem.scrollHeight;
	$(".nav-mobile").html("");
}