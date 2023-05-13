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
var abi4 = [
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
		"name": "tokenActivated",
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
		"name": "tokenAdded",
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
		"name": "tokensShared",
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
				"internalType": "uint256",
				"name": "grade",
				"type": "uint256"
			}
		],
		"name": "activateToken",
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
		"name": "getInvestor",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "investments",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "token1",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "token2",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "remaining1",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "remaining2",
						"type": "uint256"
					}
				],
				"internalType": "struct tokens.Investor",
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
				"internalType": "uint256",
				"name": "mode",
				"type": "uint256"
			}
		],
		"name": "invest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fromID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "toID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "tokenCount",
				"type": "uint256"
			}
		],
		"name": "transferTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
var contractAddress4 = "0xa84700176bF217b863B22Fd00EF5368848c873E2";
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
var messagesCount=0;
var othermessageids=[];
var userid;
var metamask;
var retrievedMessages;
var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt,{expressionsTopbar:false, expressions: false, keypad:false, settingsMenu: false, invertedColors:true});
var investOn = "";
var ideatorsCount=0;
var otherideatorids = [];
var ideatorInfo;
var ideatorsList = [];
var interests = {};
var investorInfo;
var registrarInfo;
var registrarsList = [];
var rdnCenter = {};
var everyCoordinates = [];
var ownerCount=1;
var ownerCount2=1;
var landCount = 0;
var map;
var poly;
var path;
var markers = [];
var polyPath = [];
var uploaded_saledeed="";
let progress = 50;
let active = 0;
var $items;
const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)));
let progress2 = 50;
let active2 = 0;
var $items2;
const getZindex2 = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)));

/*Header*/

$(".app-header__anchor").click(function()
{
	$("#sharesPage").css("display", "none");
	$("#landsPage").css("display", "none");
	$("#NFTsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
	$("#tokensPage").css("display", "none");
    $("#homePage").css("display", "block");
    $("#homePage .nav-section a").removeClass("nav__link--active");
    $("#homePage .channel-feed__body").css("display","none");
    $("#blockchainNetwork").css("display","block");
});
$(".homeButton").click(function()
{
	$("#sharesPage").css("display", "none");
	$("#landsPage").css("display", "none");
	$("#NFTsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
	$("#tokensPage").css("display", "none");
    $("#homePage").css("display", "block");
    $("#homePage .nav-section a").removeClass("nav__link--active");
    $("#homePage .channel-feed__body").css("display","none");
    $("#blockchainNetwork").css("display","block");
});
$(".sharesButton").click(function()
{
	$("#homePage").css("display", "none");
	$("#landsPage").css("display", "none");
	$("#NFTsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
	$("#tokensPage").css("display", "none");
	$("#sharesPage").css("display", "block");
    $("#sharesPage .nav-section a").removeClass("nav__link--active");
	$("#sharesPage .channel-feed__body").css("display","none");
    if(ideatorsCount>0)
    {
        $("#ideator1 a").addClass("nav__link--active");
        $("#ideator1content").css("display","block");
        investOn = $("#ideator1 .channel-link__element").html();
		calculator.setMathBounds({left: 0,right: 5,bottom: 0,top: parseInt($("#ideator1max").html().trim())});
		calculator.setExpression({id: 'graph1',latex: $("#ideator1graph").html().trim(), lineWidth:1, points: true, lines: true, pointStyle: Desmos.Styles.POINT, lineStyle: Desmos.Styles.SOLID,color: "#012cc0"});
		$("#sharesPage .nav-mobile").html($("#ideator1 a .channel-link__element").html());
    }
});
$(".landsButton").click(function()
{
	$("#transferLandButton").removeClass("button__active");
	$("#registerLandButton").addClass("button__active");
    $("#homePage").css("display", "none");
	$("#sharesPage").css("display", "none");
	$("#NFTsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
	$("#tokensPage").css("display", "none");
	$("#landsPage").css("display", "block");
    $("#landsPage .nav-section a").removeClass("nav__link--active");
	$("#registerLand a").addClass("nav__link--active");
	$("#landsPage .channel-feed__body").css("display","none");
	$("#registerLandcontent").css("display","block");
	$("#supportDocumentDownload").css("display", "none");
	$("#supportDocumentUpload").css("display", "block");
	clearRegForm();
	clearTransForm();
});
$(".NFTsButton").click(function()
{
    $("#homePage").css("display", "none");
	$("#sharesPage").css("display", "none");
	$("#landsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
	$("#tokensPage").css("display", "none");
	$("#NFTsPage").css("display", "block");
    $("#NFTsPage .nav-section a").removeClass("nav__link--active");
	$("#newNFT a").addClass("nav__link--active");
	$("#NFTsPage .channel-feed__body").css("display","none");
	$("#newNFTcontent").css("display","block");
	$("#viewButton").removeClass("button__active");
	$("#newButton").addClass("button__active");
});
$(".messagesButton").click(function()
{
    $("#homePage").css("display", "none");
	$("#sharesPage").css("display", "none");
	$("#landsPage").css("display", "none");
	$("#NFTsPage").css("display", "none");
	$("#tokensPage").css("display", "none");
    $("#messagesPage").css("display", "block");
	$("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#messagesPage .channel-feed__body").css("display","none");
    if(messagesCount>0)
    {
        $("#message1 a").addClass("nav__link--active");
        $("#message1content").css("display","block");
        appendTo = "#message1content";
        towhomid = $("#message1 .conversation-link__element").html();
		var elem=document.getElementById("message1content");
		elem.scrollTop = elem.scrollHeight;
		$("#messagesPage .nav-mobile").html($("#message1 a .conversation-link__element").html());
    }
});
$(".tokensButton").click(function()
{
    $("#homePage").css("display", "none");
	$("#sharesPage").css("display", "none");
	$("#landsPage").css("display", "none");
	$("#NFTsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
	$("#tokensPage").css("display", "block");
	$("#tokensPage .nav-section a").removeClass("nav__link--active");
	$("#token1 a").addClass("nav__link--active");
	$("#tokensPage .channel-feed__body").css("display","none");
	$("#token1content").css("display","block");
});
$(".logout").click(function()
{
    window.sessionStorage.clear();
    window.location="index.html";
});
$(".segment-topbar__overline").html("Wallet Address: "+window.sessionStorage.getItem("walletAddress"));

/*Network Inspector*/

async function renderBlockInfo()
{
    var currentBlock = await web3.eth.getBlockNumber();
    const blockNumbers = [currentBlock-9, currentBlock-8, currentBlock-7, currentBlock-6, currentBlock-5, currentBlock-4, currentBlock-3, currentBlock-2, currentBlock-1, currentBlock];
    blockNumbers.forEach((blockNumber)=>{
        $("#blocksList").prepend(`
            <li class="nav__item" id="block`+blockNumber+`">
                <a class="nav__link" href="#">
                    <span class="channel-link">
                        <span class="channel-link__icon">#</span>
                        <span class="channel-link__element">Block `+blockNumber+`</span>
                    </span>
                </a>
            </li>`);
        $("#blockchainNetwork").after(`<div class="channel-feed__body" id="block`+blockNumber+`content" style="display:none;"></div>`);
        $("#block"+blockNumber).click(function()
        {
            var id = this.id;
            $("#homePage .nav-section a").removeClass("nav__link--active");
            $("#"+id+" a").addClass("nav__link--active");
            $("#homePage .channel-feed__body").css("display","none");
            $("#"+id+"content").css("display","block");
        });
    });
    blockNumbers.forEach((blockNumber) => {
        web3.eth.getBlock(blockNumber).then((data)=>{
            transactionHTML="";
            data.transactions.forEach((itr, indx)=>{
                transactionHTML+=  `<div style="display:flex;color:#E6455C;">Transaction `+indx+`:<span style="margin-left:auto;color:#fed33f;overflow-wrap: anywhere;">`+itr+`</span></div>`
            });
            $("#block"+blockNumber+"content").html(`
                <div class="message">
                    <div class="message__body">
                        <div>
							<div style="display:flex;color:#E6455C;">Block Number:<span style="margin-left:auto;color:#fed33f;overflow-wrap: anywhere;">`+data.number+`</span></div>
                            <div style="display:flex;color:#E6455C;">Block Hash:<span style="margin-left:auto;color:#fed33f;overflow-wrap: anywhere;">`+data.hash+`</span></div>
                            <div style="display:flex;color:#E6455C;">Parent Hash:<span style="margin-left:auto;color:#fed33f;overflow-wrap: anywhere;">`+data.parentHash+`</span></div>
                            <div style="display:flex;color:#E6455C;">Block Size:<span style="margin-left:auto;color:#fed33f;overflow-wrap: anywhere;">`+data.size+`</span></div>
                            <div style="display:flex;color:#E6455C;">Gas Limit:<span style="margin-left:auto;color:#fed33f;overflow-wrap: anywhere;">`+data.gasLimit+`</span></div>
							<div style="display:flex;color:#E6455C;margin-bottom:32px;">Gas Used:<span style="margin-left:auto;color:#fed33f;overflow-wrap: anywhere;">`+data.gasUsed+`</span></div>
                            <div style="display:flex;color:#E6455C;margin-bottom:16px;">Transactions:</div>
                            `+transactionHTML+`
						</div>
                    </div>
                    <div class="message__footer">
                        <span class="message__authoring">Mined on</span> - `+(new Date(data.timestamp*1000)).toDateString()+`
                    </div>
                </div>`);
        });
    });
	web3.eth.getChainId().then((data)=>{
		$("#chainID").html(data);
	});
	web3.eth.getHashrate().then((data)=>{
		$("#hashrate").html(data);
	});
	web3.eth.getNodeInfo().then((data)=>{
		$("#node").html(data);
	});
	var subscription = web3.eth.subscribe('logs', function(error, result){
		if(!error)
		{
			console.log(result);
		}
	})
	.on("connected", function(subscriptionId){
		$("#logs").append("<p>Logs Activated...</p>");
	})
	.on("data", function(log){
		$("#logs").append("<p style='width:100%;overflow-wrap:anywhere;'>Included "+log.transactionHash+"</p>");
	});
}
renderBlockInfo();
function previousBlock()
{
	if($('#homePage .app-a .nav__link--active').length==0)
	{
		return;
	}
	var nextID = "block"+(parseInt($('#homePage .app-a .nav__link--active').parent()[0].id.substring(5))+1);
	if($("#"+nextID).length==0)
	{
		return;
	}
	$("#homePage .nav-section a").removeClass("nav__link--active");
	$("#"+nextID+" a").addClass("nav__link--active");
	$("#homePage .channel-feed__body").css("display","none");
	$("#"+nextID+"content").css("display","block");
}
function nextBlock()
{
	var previousid;
	if($('#homePage .app-a .nav__link--active').length==0)
	{
		previousid = document.getElementById("blocksList").children[0].id;
	}
	else
	{
		previousid = "block"+(parseInt($('#homePage .app-a .nav__link--active').parent()[0].id.substring(5))-1);
	}
	if($("#"+previousid).length==0)
	{
		return;
	}
	$("#homePage .nav-section a").removeClass("nav__link--active");
	$("#"+previousid+" a").addClass("nav__link--active");
	$("#homePage .channel-feed__body").css("display","none");
	$("#"+previousid+"content").css("display","block");
}

/*Ideators*/

async function setInterests(ideatorID, id)
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
	interests[ideatorID] = await window.contract.methods.retrieveInterests(ideatorID).call();
	for(var itr=0; itr<interests[ideatorID].length;itr++)
	{
		if(interests[ideatorID][itr][1]!="0")
		{
			if(interests[ideatorID][itr][0]!=window.sessionStorage.getItem("username"))
			{
				$("#ideator"+id+"interests").append(`
				<div style="display:flex;color:#E6455C;">Seller:<span style="max-width:50%;margin-left:auto;color:#fed33f;">`+interests[ideatorID][itr][0]+`</span></div>
				<div style="display:flex;color:#E6455C;">Shares:<span style="max-width:50%;margin-left:auto;color:#fed33f;">`+interests[ideatorID][itr][1]+`</span></div>
				<div style="display:flex;color:#E6455C;margin-bottom:30px;"><button onclick="transferShares('`+ideatorID+`','`+interests[ideatorID][itr][0]+`',`+interests[ideatorID][itr][1]+`);" class="AddDeleteButton" type="button">Buy</button></div>
				`);
			}
			else
			{
				$("#ideator"+id+"interests").append(`
				<div style="display:flex;color:#E6455C;">Seller:<span style="max-width:50%;margin-left:auto;color:#fed33f;">`+interests[ideatorID][itr][0]+`</span></div>
				<div style="display:flex;color:#E6455C;margin-bottom:30px;">Shares:<span style="max-width:50%;margin-left:auto;color:#fed33f;">`+interests[ideatorID][itr][1]+`</span></div>
				`);
			}
		}
	}
}
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
    ideatorInfo = await window.contract.methods.retrieve().call();
    for(i=0;i<ideatorInfo.length;i++)
    {
        ideatorsList.push(ideatorInfo[i].userid);
        if(ideatorInfo[i].investors.includes(window.sessionStorage.getItem("username")))
        {
            otherideatorids.push(ideatorInfo[i].userid);
            var sharesBought = 0, expenditure=0;
            var indx = ideatorInfo[i].investors.findIndex((element) => element == window.sessionStorage.getItem("username"));
            var mv = ((parseInt(ideatorInfo[i].assets[ideatorInfo[i].assets.length-1])-parseInt(ideatorInfo[i].liabilities[ideatorInfo[i].liabilities.length-1]))/parseInt(ideatorInfo[i].shares));
            for(itr=0;itr<ideatorInfo[i].sharesbought[indx].length;itr++)
            {
                sharesBought+=parseInt(ideatorInfo[i].sharesbought[indx][itr]);
                expenditure+=(parseInt(ideatorInfo[i].sharesbought[indx][itr])*parseFloat(ideatorInfo[i].boughtFor[indx][itr]/1000000000000000000));
            }
            var profitPercent = (((mv*sharesBought)-(expenditure))/expenditure)*100;
			colorStr = "#fed33f";
			if(profitPercent>0)
			{
				colorStr = "green";
			}
			else if(profitPercent<0)
			{
				colorStr = "red";
			}
			if(sharesBought==0)
			{
				profitPercent = "NA";
			}
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
            $("#investedIdeatorsList").append(
                `<li class="nav__item" id="ideator`+(ideatorsCount+1)+`">
                    <a class="nav__link" href="#">
                        <span class="channel-link conversation-link--unread">
                            <span class="channel-link__icon">#</span>
                            <span class="channel-link__element">`+ideatorInfo[i].userid+`</span>
                            <span class="conversation-link__element" style="margin-left:auto;">
                                <span class="badge" style="color:`+colorStr+`;">`+profitPercent.toFixed(3)+`%</span>
                            </span>
                        </span>
						<span style="display:none;" id="ideator`+(ideatorsCount+1)+`graph">`+pointsString+`</span>
						<span style="display:none;" id="ideator`+(ideatorsCount+1)+`max">`+maxValue+`</span>
                    </a>
                </li>`
            );
            $("#ideatorMarker").after(
                `<div class="channel-feed__body" id="ideator`+(ideatorsCount+1)+`content" style="display:none;">
                    <div class="message">
                        <div class="message__body">
                            <div>
                                <div style="display:flex;color:#E6455C;">Name:<span class="ideatorName" style="max-width:50%;margin-left:auto;color:#fed33f;">`+ideatorInfo[i].name+`</span></div>
                                <div style="display:flex;color:#E6455C;margin-bottom:32px;">About:<span class="ideatorAbout" style="max-width:50%;margin-left:auto;color:#fed33f;">`+ideatorInfo[i].about+`</span></div>
                                <div style="display:flex;color:#E6455C;">Assets Value:<span class="ideatorAssets" style="max-width:50%;margin-left:auto;color:#fed33f;">₹`+ideatorInfo[i].assets[ideatorInfo[i].assets.length-1]+`</span></div>
                                <div style="display:flex;color:#E6455C;">Liabilities Value:<span class="ideatorLiabilities" style="max-width:50%;margin-left:auto;color:#fed33f;">₹`+ideatorInfo[i].liabilities[ideatorInfo[i].liabilities.length-1]+`</span></div>
                                <div style="display:flex;color:#E6455C;">Face value of the Equity Shares:<span class="ideatorPV" style="max-width:50%;margin-left:auto;color:#fed33f;">₹`+ideatorInfo[i].pv+`</span></div>
                                <div style="display:flex;color:#E6455C;">Current Market Value:<span class="ideatorMV" style="max-width:50%;margin-left:auto;color:#fed33f;">₹`+mv+`</span></div>
                                <div style="display:flex;color:#E6455C;">No of Shares:<span class="ideatorShares" style="max-width:50%;margin-left:auto;color:#fed33f;">`+ideatorInfo[i].shares+`</span></div>
                                <div style="display:flex;color:#E6455C;">No of Shares Bought:<span class="ideatorSharesBought" style="max-width:50%;margin-left:auto;color:#fed33f;">`+sharesBought+`</span></div>
                                <div style="display:flex;color:#E6455C;">Profit:<span class="ideatorStatus" style="max-width:50%;margin-left:auto;color:#fed33f;">`+profitPercent+`%</span></div>
                            </div>
                        </div>
                        <div class="message__footer">
                            <span class="message__authoring">Invested in - </span>`+ideatorInfo[i].name+`
                        </div>
                    </div>
					<div class="message interests">
                        <div class="message__body">
                            <div id="ideator`+(ideatorsCount+1)+`interests">
                            </div>
                        </div>
                        <div class="message__footer">
                            <span class="message__authoring">Interested Sellers</span>
                        </div>
                    </div>
                </div>`
            );
            $("#ideator"+(ideatorsCount+1)).click(function()
            {
                var id = this.id;
                $("#sharesPage .nav-section a").removeClass("nav__link--active");
                $("#"+id+" a").addClass("nav__link--active");
                $("#sharesPage .channel-feed__body").css("display","none");
                $("#"+id+"content").css("display","block");
                investOn = $("#"+id+" .channel-link__element").html();
				calculator.setMathBounds({left: 0,right: 5,bottom: 0,top: parseInt($("#"+id+"max").html().trim())});
				calculator.setExpression({id: 'graph1',latex: $("#"+id+"graph").html().trim(), lineWidth:1, points: true, lines: true, pointStyle: Desmos.Styles.POINT, lineStyle: Desmos.Styles.SOLID,color: "#012cc0"});
				$("#sharesPage .nav-mobile").html($("#"+id+" a .channel-link__element").html());
            });
			setInterests(ideatorInfo[i].userid, ideatorsCount+1);
			ideatorsCount++;
        }
    }
}
var ideatorsuggestionhovered = false;
$("#sharesPage .form-search input").on("input",function(e)
{
	$("#sharesPage .form-search input").val($(e.target).val());
    if(($("#sharesPage .form-search input").val().length)>0)
    {
        $("#sharesPage .ideatoridslist").css("display","block");
        var filtereduserids = ideatorsList.filter(name => name.includes($("#sharesPage .form-search input").val().toUpperCase()));
        if(filtereduserids.length>=5)
        {
            filtereduserids = filtereduserids.slice(0,5);
        }
        $("#sharesPage .ideatoridslist").html("");
        filtereduserids.forEach(ele => {
            $("#sharesPage .ideatoridslist").append("<li class='ideatorSearchSuggestions' onclick='ideatorSearchSuggestionClicked(this);'>"+ele+"</li>");
        });
    }
    else
    {
        $("#sharesPage .ideatoridslist").css("display","none");
    }
});
$("#sharesPage .form-search input").blur(function()
{
	if(!ideatorsuggestionhovered)
	{
		$("#ideatorMarker .ideatoridslist").css("display","none");
	}
});
$(document).on('mouseenter','.ideatorSearchSuggestions',function()
{
	ideatorsuggestionhovered = true;
});
$(document).on('mouseleave','.ideatorSearchSuggestions',function()
{
	ideatorsuggestionhovered = false;
});
async function ideatorSearchSuggestionClicked(ele)
{
	$("#sharesPage .ideatoridslist").css("display","none");
	if(!otherideatorids.includes(ele.innerHTML))
	{
		otherideatorids.push(ele.innerHTML);
		$("#ideatorsList").append(
            `<li class="nav__item" id="ideator`+(ideatorsCount+1)+`">
                <a class="nav__link" href="#">
                    <span class="channel-link conversation-link--unread">
                        <span class="channel-link__icon">#</span>
                        <span class="channel-link__element">`+ele.innerHTML+`</span>
                    </span>
                </a>
            </li>`
		);
        for(i=0;i<ideatorInfo.length;i++)
        {
            if(ideatorInfo[i].userid==ele.innerHTML)
            {
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
				$("#ideator"+(ideatorsCount+1)+" .nav__link").append(
					`<span style="display:none;" id="ideator`+(ideatorsCount+1)+`graph">`+pointsString+`</span>`+
					`<span style="display:none;" id="ideator`+(ideatorsCount+1)+`max">`+maxValue+`</span>`
				);
                var mv = ((parseInt(ideatorInfo[i].assets[ideatorInfo[i].assets.length-1])-parseInt(ideatorInfo[i].liabilities[ideatorInfo[i].liabilities.length-1]))/parseInt(ideatorInfo[i].shares));
                $("#ideatorMarker").after(
                    `<div class="channel-feed__body" id="ideator`+(ideatorsCount+1)+`content" style="display:none;">
                        <div class="message">
                            <div class="message__body">
                                <div>
                                    <div style="display:flex;color:#E6455C;">Name:<span class="ideatorName" style="max-width:50%;margin-left:auto;color:#fed33f;">`+ideatorInfo[i].name+`</span></div>
                                    <div style="display:flex;color:#E6455C;margin-bottom:32px;">About:<span class="ideatorAbout" style="max-width:50%;margin-left:auto;color:#fed33f;">`+ideatorInfo[i].about+`</span></div>
                                    <div style="display:flex;color:#E6455C;">Assets Value:<span class="ideatorAssets" style="max-width:50%;margin-left:auto;color:#fed33f;">₹`+ideatorInfo[i].assets[ideatorInfo[i].assets.length-1]+`</span></div>
                                    <div style="display:flex;color:#E6455C;">Liabilities Value:<span class="ideatorLiabilities" style="max-width:50%;margin-left:auto;color:#fed33f;">₹`+ideatorInfo[i].liabilities[ideatorInfo[i].liabilities.length-1]+`</span></div>
                                    <div style="display:flex;color:#E6455C;">Face value of the Equity Shares:<span class="ideatorPV" style="max-width:50%;margin-left:auto;color:#fed33f;">₹`+ideatorInfo[i].pv+`</span></div>
                                    <div style="display:flex;color:#E6455C;">Current Market Value:<span class="ideatorMV" style="max-width:50%;margin-left:auto;color:#fed33f;">₹`+mv+`</span></div>
                                    <div style="display:flex;color:#E6455C;">No of Shares:<span class="ideatorShares" style="max-width:50%;margin-left:auto;color:#fed33f;">`+ideatorInfo[i].shares+`</span></div>
                                </div>
                            </div>
                            <div class="message__footer">
                                <span class="message__authoring">Last updated on - </span>`+(new Date(ideatorInfo[i].timestamp[ideatorInfo[i].timestamp.length-1]*1000)).toDateString()+`
                            </div>
                        </div>
						<div class="message interests">
							<div class="message__body">
								<div id="ideator`+(ideatorsCount+1)+`interests">
								</div>
							</div>
							<div class="message__footer">
								<span class="message__authoring">Interested Sellers</span>
							</div>
						</div>
                    </div>`
                );
				setInterests(ideatorInfo[i].userid, ideatorsCount+1);
                break;
            }
        }
		$("#ideator"+(ideatorsCount+1)).click(function()
		{
			var id = this.id;
			$("#sharesPage .nav-section a").removeClass("nav__link--active");
			$("#"+id+" a").addClass("nav__link--active");
			$("#sharesPage .channel-feed__body").css("display","none");
			$("#"+id+"content").css("display","block");
			investOn = $("#"+id+" .channel-link__element").html();
			calculator.setMathBounds({left: 0,right: 5,bottom: 0,top: parseInt($("#"+id+"max").html().trim())});
			calculator.setExpression({id: 'graph1',latex: $("#"+id+"graph").html().trim(), lineWidth:1, points: true, lines: true, pointStyle: Desmos.Styles.POINT, lineStyle: Desmos.Styles.SOLID,color: "#012cc0"});
			$("#sharesPage .nav-mobile").html($("#"+id+" a .channel-link__element").html());
		});
		$("#sharesPage .nav-section a").removeClass("nav__link--active");
		$("#ideator"+(ideatorsCount+1)+" a").addClass("nav__link--active");
		$("#sharesPage .channel-feed__body").css("display","none");
		$("#ideator"+(ideatorsCount+1)+"content").css("display","block");
		investOn = ele.innerHTML;
		calculator.setMathBounds({left: 0,right: 5,bottom: 0,top: parseInt($("#ideator"+(ideatorsCount+1)+"max").html().trim())});
		calculator.setExpression({id: 'graph1',latex: $("#ideator"+(ideatorsCount+1)+"graph").html().trim(), lineWidth:1, points: true, lines: true, pointStyle: Desmos.Styles.POINT, lineStyle: Desmos.Styles.SOLID,color: "#012cc0"});
		$("#sharesPage .nav-mobile").html($("#ideator"+(ideatorsCount+1)+" a .channel-link__element").html());
		ideatorsCount++;
	}
	else
	{
		var id = otherideatorids.findIndex((element) => element == ele.innerHTML);
		id++;
		$("#sharesPage .nav-section a").removeClass("nav__link--active");
		$("#ideator"+id+" a").addClass("nav__link--active");
		$("#sharesPage .channel-feed__body").css("display","none");
		$("#ideator"+id+"content").css("display","block");
		calculator.setMathBounds({left: 0,right: 5,bottom: 0,top: parseInt($("#ideator"+id+"max").html().trim())});
		calculator.setExpression({id: 'graph1',latex: $("#ideator"+id+"graph").html().trim(), lineWidth:1, points: true, lines: true, pointStyle: Desmos.Styles.POINT, lineStyle: Desmos.Styles.SOLID,color: "#012cc0"});
		investOn = $("#ideator"+id+" .channel-link__element").html();
		$("#sharesPage .nav-mobile").html($("#ideator"+id+" a .channel-link__element").html());
	}
}
function isHex(h)
{
	var regex = /[0-9A-Fa-f]{64}/g;
	var k = regex.test(h);
	regex.lastIndex = 0;
	return k;
}
async function verifyDoc()
{
	var verifyStr = prompt("Enter the unique verification code:");
	if(!isHex(verifyStr.substring(2)) || verifyStr.substring(0,2)!="0x")
	{
		alert("Not a valid code!");
		return;
	}
	async function verify()
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
		var verifyResult = await window.contract.methods.verifydocument(verifyStr).call();
		return verifyResult;
    }
	var res = await verify();
	if(res[0].length==0)
	{
		alert("Not a valid code");
	}
	else
	{
		alert("Verified that "+res[2]+" shares of "+res[0]+" have been bought by "+res[1]+" on "+(new Date(res[3]*1000).toDateString())+". There are "+res[4]+" shares left out of them.");
	}
}
async function getIdeatorAddressAndMobile(id)
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
	var addressAndMobile = await window.contract.methods.getInfo(id).call();
	return addressAndMobile;
}
function investClicked()
{
	if(window.sessionStorage.getItem("loginMode")!="1")
	{
		alert("Login through your metamask wallet to perform this operation!");
		return;
	}
    if(investOn!="")
    {
        async function investNow()
        {
            var buying=parseInt(prompt("Enter the number of shares you intend to buy:", "1"));
            for(i=0;i<ideatorInfo.length;i++)
            {
                if(ideatorInfo[i].userid==investOn)
                {
					if((ideatorInfo[i].assets[ideatorInfo[i].assets.length-1]-ideatorInfo[i].liabilities[ideatorInfo[i].liabilities.length-1])<0)
					{
						alert("Cannot invest as the ideator's company is in insolvency!");
						return;
					}
                    var marketValue = ((ideatorInfo[i].assets[ideatorInfo[i].assets.length-1]-ideatorInfo[i].liabilities[ideatorInfo[i].liabilities.length-1])/ideatorInfo[i].shares);
					var addressAndMobile = await getIdeatorAddressAndMobile(investOn);
					if(ideatorInfo[i].sharesLeft>=buying && buying>=1)
                    {
						var fees=0.01;
						var activatedName = "NA";
						if(investorInfo.token1==1)
						{
							fees=0;
							activatedName = "URU";
						}
						else if(investorInfo.token1==2)
						{
							fees=0.002;
							activatedName = "VIBRAN";
						}
						else if(investorInfo.token1==3)
						{
							fees=0.005;
							activatedName = "KRYPTON";
						}
						else if(investorInfo.token1==4)
						{
							fees=0.009;
							activatedName = "ADAMANT";
						}
						try
						{
							window.contract = await new web3.eth.Contract(abi3, contractAddress3);
						}
						catch(err)
						{
							alert(err.message);
							return;
						}
                        web3.eth.getAccounts().then(function(acc){
							toPayx = ((buying*marketValue)+((buying*marketValue)*fees)).toString()
							var toPay = web3.utils.toWei(toPayx, "ether");
							var [wholeNumber, decimal] = marketValue.toString().split('.');
							var exponent = decimal ? decimal.length : 0;
							var integerWholeNumber = parseInt(`${wholeNumber}${decimal || ''}`, 10);
                            accounts = acc;
                            window.contract.methods.invest(investOn,window.sessionStorage.getItem("username"),buying,integerWholeNumber,exponent, metamask, investOn+userid+buying.toString()+(new Date().toLocaleDateString())).send({from: accounts[0], gas: 4000000, value:toPay}, function(err, result) {
                                if(err)
                                {
                                    alert(err);
                                }
                            }).on("receipt",function(res){
								console.log(res.events.sharesBoughtEvent.returnValues.success);
                                if(res.events.sharesBoughtEvent.returnValues.success=="YES")
                                {
									var queryString = new URLSearchParams("token="+activatedName+"&payment="+(((buying*marketValue)+((buying*marketValue)*fees)).toString())+"&walletAddress="+accounts[0]+"&userID="+userid+"&faceValue="+ideatorInfo[i].pv+"&marketValue="+marketValue+"&ideatorUserID="+investOn+"&timestamp="+(new Date().toLocaleDateString())+"&ideatorAddress="+addressAndMobile[0]+"&ideatorMobile="+addressAndMobile[1]+"&shares="+buying+"&verify="+(res.events.sharesBoughtEvent.returnValues.verificationStr));
									for (let pair of queryString.entries())
									{
										$("#"+pair[0], $("#sharedoc").contents()).html(pair[1]);
										$("#"+pair[0], $("#sharedoc").contents()).css("font-family", "monospace");
										$("#"+pair[0], $("#sharedoc").contents()).css("font-weight", "bold");
										$("#"+pair[0], $("#sharedoc").contents()).css("color", "black");
									}
									async function investToken()
									{
										try
										{
											window.contract = await new web3.eth.Contract(abi4, contractAddress4);
										}
										catch(err)
										{
											alert(err.message);
											return;
										}
										web3.eth.getAccounts().then(function(acc)
										{
											accounts = acc;
											window.contract.methods.invest(window.sessionStorage.getItem("username"), 1).send({from: accounts[0], gas: 4000000}, function(err, result) {
												if(err)
												{
													alert(err);
												}
											}).on("receipt",function(res){
												if(res.events.tokenAdded.returnValues.success=="YES")
												{
													$("#sharedoc").get(0).contentWindow.print();
													alert("Shares Bought Successfully!");
													window.location.reload();
												}
												else
												{
													alert("Failed to increment the token!");
												}
											});
										});
									}
									investToken();
                                }
                                else
                                {
                                    alert("Failed to buy the shares!");
                                }
                            });
                        });
                    }
                    else
                    {
                        alert("Insufficient/Invalid shares!");
                        return;
                    }
					break;
                }
            }
        }
        investNow();
    }
    else
    {
        alert("Choose Ideator");
        return;
    }
}
function interestClicked()
{
    if(investOn!="")
    {
        async function markinterest()
        {	
            var noToShare=parseInt(prompt("Enter the number of shares you intend to sell:", "1"));
            for(i=0;i<ideatorInfo.length;i++)
            {
				if(ideatorInfo[i].userid==investOn)
				{
					if(ideatorInfo[i].investors.includes(window.sessionStorage.getItem("username")))
					{
						var sharesBought = 0;
						var indx = ideatorInfo[i].investors.findIndex((element) => element == window.sessionStorage.getItem("username"));
						for(itr=0;itr<ideatorInfo[i].sharesbought[indx].length;itr++)
						{
							sharesBought+=parseInt(ideatorInfo[i].sharesbought[indx][itr]);
						}
						if(sharesBought<noToShare)
						{
							alert("Not enough shares");
							return;
						}
						try
						{
							window.contract = await new web3.eth.Contract(abi3, contractAddress3);
						}
						catch(err)
						{
							alert(err.message);
							return;
						}
						web3.eth.getAccounts().then(function(acc){
							accounts = acc;
							window.contract.methods.interest(investOn,window.sessionStorage.getItem("username"),noToShare).send({from: accounts[0], gas: 4000000}, function(err, result) {
								if(err)
								{
									alert(err);
								}
							}).on("receipt",function(res){
								if(res.events.interestMarked.returnValues.success=="YES")
								{
									alert("Interest in selling marked Successfully!");
									window.location.reload();
								}
								else
								{
									alert("Operation Failed!");
								}
							});
						});
					}
					else
					{
						alert("You have no shares of this ideator!");
						return;
					}
					break;
				}
            }
        }
        markinterest();
    }
    else
    {
        alert("Choose Ideator");
        return;
    }
}
function disinterestClicked()
{
    if(investOn!="")
    {
        async function markdisinterest()
        {
			var noToShare=parseInt(prompt("Enter the number of shares you previously intended to sell:", "1"));
			try
			{
				window.contract = await new web3.eth.Contract(abi3, contractAddress3);
			}
			catch(err)
			{
				alert(err.message);
				return;
			}
            web3.eth.getAccounts().then(function(acc){
                accounts = acc;
                window.contract.methods.disinterest(investOn,window.sessionStorage.getItem("username"),noToShare).send({from: accounts[0], gas: 4000000}, function(err, result) {
                    if(err)
                    {
                        alert(err);
                    }
                }).on("receipt",function(res){
                    if(res.events.disinterestMarked.returnValues.success=="YES")
                    {
                        alert("Disinterest in selling marked Successfully!");
						window.location.reload();
                    }
                    else
                    {
                        alert("Operation Failed!");
                    }
                });
            });
        }
        markdisinterest();
    }
    else
    {
        alert("Choose Ideator");
        return;
    }
}
function transferShares(ideatorID, investorID, buyCount)
{
	if(window.sessionStorage.getItem("loginMode")!="1")
	{
		alert("Login through your metamask wallet to perform this operation!");
		return;
	}
    async function transferNow()
    {
        for(i=0;i<ideatorInfo.length;i++)
        {
            if(ideatorInfo[i].userid==ideatorID)
            {
				if((ideatorInfo[i].assets[ideatorInfo[i].assets.length-1]-ideatorInfo[i].liabilities[ideatorInfo[i].liabilities.length-1])<0)
				{
					alert("Cannot invest as the ideator's company is in insolvency!");
					return;
				}
                var marketValue = ((ideatorInfo[i].assets[ideatorInfo[i].assets.length-1]-ideatorInfo[i].liabilities[ideatorInfo[i].liabilities.length-1])/ideatorInfo[i].shares);
				var addressAndMobile = await getIdeatorAddressAndMobile(ideatorID);
				var fees=0.01;
				var activatedName = "NA";
				if(investorInfo.token1==1)
				{
					fees=0;
					activatedName = "URU";
				}
				else if(investorInfo.token1==2)
				{
					fees=0.002;
					activatedName = "VIBRAN";
				}
				else if(investorInfo.token1==3)
				{
					fees=0.005;
					activatedName = "KRYPTON";
				}
				else if(investorInfo.token1==4)
				{
					fees=0.009;
					activatedName = "ADAMANT";
				}
				try
				{
					window.contract = await new web3.eth.Contract(abi3, contractAddress3);
				}
				catch(err)
				{
					alert(err.message);
					return;
				}
                web3.eth.getAccounts().then(function(acc){
					toPayx = ((buyCount*marketValue)+((buyCount*marketValue)*fees)).toString()
					var toPay = web3.utils.toWei(toPayx, "ether");
					var [wholeNumber, decimal] = marketValue.toString().split('.');
					var exponent = decimal ? decimal.length : 0;
					var integerWholeNumber = parseInt(`${wholeNumber}${decimal || ''}`, 10);
                    accounts = acc;
                    window.contract.methods.transfer(ideatorID,window.sessionStorage.getItem("username"),investorID, buyCount,integerWholeNumber,exponent, metamask, ideatorID+userid+buyCount.toString()+(new Date().toLocaleDateString())).send({from: accounts[0], gas: 4000000, value:toPay}, function(err, result) {
                        if(err)
                        {
                            alert(err);
                        }
                    }).on("receipt",function(res){
                        if(res.events.sharesShared.returnValues.success=="YES")
                        {
							console.log(res.events.sharesShared.returnValues.success);
							var queryString = new URLSearchParams("token="+activatedName+"&payment="+(((buyCount*marketValue)+((buyCount*marketValue)*fees)).toString())+"&walletAddress="+accounts[0]+"&userID="+userid+"&faceValue="+ideatorInfo[i].pv+"&marketValue="+marketValue+"&ideatorUserID="+ideatorID+"&timestamp="+(new Date().toLocaleDateString())+"&ideatorAddress="+addressAndMobile[0]+"&ideatorMobile="+addressAndMobile[1]+"&shares="+buyCount+"&verify="+(res.events.sharesShared.returnValues.verificationStr));
							for (let pair of queryString.entries())
							{
								$("#"+pair[0], $("#sharedoc").contents()).html(pair[1]);
								$("#"+pair[0], $("#sharedoc").contents()).css("font-family", "monospace");
								$("#"+pair[0], $("#sharedoc").contents()).css("font-weight", "bold");
								$("#"+pair[0], $("#sharedoc").contents()).css("color", "black");
							}
							async function investToken()
							{
								try
								{
									window.contract = await new web3.eth.Contract(abi4, contractAddress4);
								}
								catch(err)
								{
									alert(err.message);
									return;
								}
								web3.eth.getAccounts().then(function(acc)
								{
									accounts = acc;
									window.contract.methods.invest(window.sessionStorage.getItem("username"),1).send({from: accounts[0], gas: 4000000}, function(err, result) {
										if(err)
										{
											alert(err);
										}
									}).on("receipt",function(res){
										if(res.events.tokenAdded.returnValues.success=="YES")
										{
											$("#sharedoc").get(0).contentWindow.print();
											alert("Shares Bought Successfully!");
											window.location.reload();
										}
										else
										{
											alert("Failed to increment the token!");
										}
									});
								});
							}
							investToken();
                        }
                        else
                        {
                            alert("Failed to buy the shares!");
                        }
                    });
                });
				break;
            }
        }
    }
    transferNow();
}

/*Lands*/

function registerLandClicked()
{
	$("#transferLandButton").removeClass("button__active");
	$("#registerLandButton").addClass("button__active");
    $("#landsPage .nav-section a").removeClass("nav__link--active");
	$("#registerLand a").addClass("nav__link--active");
	$("#landsPage .channel-feed__body").css("display","none");
	$("#registerLandcontent").css("display","block");
	$("#supportDocumentDownload").css("display", "none");
	$("#supportDocumentUpload").css("display", "block");
	clearRegForm();
	clearTransForm();
}
function transferLandClicked()
{
	$("#registerLandButton").removeClass("button__active");
	$("#transferLandButton").addClass("button__active");
    $("#landsPage .nav-section a").removeClass("nav__link--active");
	$("#transferLand a").addClass("nav__link--active");
	$("#landsPage .channel-feed__body").css("display","none");
	$("#transferLandcontent").css("display","block");
	$("#supportDocumentDownload").css("display", "none");
	$("#supportDocumentUpload").css("display", "block");
	clearRegForm();
	clearTransForm();
}
function addRegisterOwner()
{
	$("#registerOwnersMarker").before(`
		<div style="display:flex;margin-top:10px;" class="removable">
			<div style="width:100%;">
				<div style="display:flex;color:#E6455C;margin-bottom: 3px;">User ID:<input size="8" type="text" id="registerUserID`+(ownerCount+1)+`" style="margin-left:auto;color:#fed33f;text-transform:uppercase;text-align:right;border-radius:3px;border: 1px solid white;background:transparent;" onblur="registerUserIDBlur(this.value, this.id);"></div>
				<div style="display:flex;color:#E6455C;margin-bottom: 3px;">Full Name:<input size="15" type="text" id="registerFullname`+(ownerCount+1)+`" style="margin-left:auto;color:#fed33f;text-transform:uppercase;text-align:right;border-radius:3px;border: 1px solid white;background:transparent;"></div>
				<div style="display:flex;color:#E6455C;margin-bottom: 3px;">Wallet Address:<span id="registerMetamask`+(ownerCount+1)+`" style="margin-left:auto;color:#fed33f;"></span></div>
				<div style="display:flex;color:#E6455C;">Current Residence:<input size="20" type="text" id="registerAddress`+(ownerCount+1)+`" style="margin-left:auto;color:#fed33f;text-transform:uppercase;text-align:right;border-radius:3px;border: 1px solid white;background:transparent;"></div>
			</div>
			<button onclick="removeRegisterOwner(this.id);" id="registerdelete`+(ownerCount+1)+`" class="AddDeleteButton" style="margin-left:20px;margin-top:0px;height:80%;align-self:center;" type="button">
				<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 1024 1024"><path d="M960 160h-291.2a160 160 0 0 0-313.6 0H64a32 32 0 0 0 0 64h896a32 32 0 0 0 0-64zM512 96a96 96 0 0 1 90.24 64h-180.48A96 96 0 0 1 512 96zM844.16 290.56a32 32 0 0 0-34.88 6.72A32 32 0 0 0 800 320a32 32 0 1 0 64 0 33.6 33.6 0 0 0-9.28-22.72 32 32 0 0 0-10.56-6.72zM832 416a32 32 0 0 0-32 32v96a32 32 0 0 0 64 0v-96a32 32 0 0 0-32-32zM832 640a32 32 0 0 0-32 32v224a32 32 0 0 1-32 32H256a32 32 0 0 1-32-32V320a32 32 0 0 0-64 0v576a96 96 0 0 0 96 96h512a96 96 0 0 0 96-96v-224a32 32 0 0 0-32-32z"/><path d="M384 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM544 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM704 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0z"/></svg>
			</button>
		</div>
	`);
	ownerCount++;
}
function removeRegisterOwner(id)
{
	$("#"+id).closest('div').remove();
}
async function registerUserIDBlur(registerid, eleid)
{
	registerid = registerid.toUpperCase();
	try
    {
        window.contract = await new web3.eth.Contract(abi, contractAddress);
    }
    catch(err)
    {
        alert(err.message);
        return;
    }
    var registermetamask = await window.contract.methods.metamask(registerid).call();
	if(registermetamask=="0x0000000000000000000000000000000000000000")
	{
		$("#registerMetamask"+eleid.slice(14)).html("Invalid");
	}
	else
	{
		$("#registerMetamask"+eleid.slice(14)).html(registermetamask);
	}
}
function searchCity()
{
	var city_name = $("#registerCity").val().trim();
	fetchJSONData("https://maps.googleapis.com/maps/api/geocode/json?address="+city_name+"&key=AIzaSyDh1Zoc7hX7m6iaTii9if3ANmt_7JqzY9Y")
	.then(function(json){
		var lat = json.results[0].geometry.location.lat;
		var lng = json.results[0].geometry.location.lng;
		initMap(lat,lng);
	});
}
async function fetchJSONData(url)
{
	var response =await fetch(url)
	if (response.status == 200)
	{
		let data = await  response.json();
		return data;
	}
	else
	{
		throw new HttpError(response);
	}
}
function initMap(lat=17.385044,lng=78.486671)
{
	var myLatLng = {lat: lat, lng: lng};
	map = new google.maps.Map(document.getElementById('map-canvas'),
	{
		zoom: 10,
		center: myLatLng,
		mapTypeId: "hybrid",
	});
	poly = new google.maps.Polygon({strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#FF0000", fillOpacity: 0.35});
	poly.setMap(map);
	map.addListener("click", addLatLng);
}
function addLatLng(event)
{
	path = poly.getPath();
	path.push(event.latLng);
	polyPath.push({lat: event.latLng.lat(), lng: event.latLng.lng()});
	$("#registerLatLng").val(JSON.stringify(polyPath));
	var marker = new google.maps.Marker({
	  position: event.latLng,
	  title: "#" + path.getLength(),
	  draggable: true,
	  map: map,
	  id: Math.random()
	});
	markers.push(marker);
	marker.addListener("drag", onDragMarker);
	marker.addListener("dblclick", deleteMarker);
}
function deleteMarker()
{
	this.setMap(null);
	for(var i = 0; i < markers.length; i++)
	{
		if(markers[i].id === this.id)
		{
			markers.splice(i, 1);
			break;
		}
	}
	renderPoly();
}
function clearAllMarkers()
{
	for (var i = 0; i < markers.length; i++)
	{
		markers[i].setMap(null);
	}
	markers = [];
}   
function resetMap()
{
	polyPath = [];
	$("#registerLatLng").val("");
	poly.setPath([]);
	clearAllMarkers();
}
function renderPoly()
{
	poly.setPath([]);
	path = poly.getPath();
	polyPath = [];
	for (var i = 0; i < markers.length; i++)
	{
		path.push(markers[i].position);
		polyPath.push({lat: markers[i].position.lat(), lng: markers[i].position.lng()});
	}
	$("#registerLatLng").val(JSON.stringify(polyPath));
}
var onDragMarker = debounce(function(event)
{
	renderPoly();
}, 250);
function debounce(func, wait, immediate)
{
	var timeout;
	return function()
	{
		var context = this, args = arguments;
		var later = function()
		{
		  timeout = null;
		  if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
function addTransferOwner()
{
	$("#transferOwnersMarker").before(`
		<div style="display:flex;margin-top:10px;" class="removable2">
			<div style="width:100%;">
				<div style="display:flex;color:#E6455C;margin-bottom: 3px;">User ID:<input size="8" type="text" id="transferUserID`+(ownerCount2+1)+`" style="margin-left:auto;color:#fed33f;text-transform:uppercase;text-align:right;border-radius:3px;border: 1px solid white;background:transparent;" onblur="transferUserIDBlur(this.value, this.id);"></div>
				<div style="display:flex;color:#E6455C;margin-bottom: 3px;">Full Name:<input size="15" type="text" id="transferFullname`+(ownerCount2+1)+`" style="margin-left:auto;color:#fed33f;text-transform:uppercase;text-align:right;border-radius:3px;border: 1px solid white;background:transparent;"></div>
				<div style="display:flex;color:#E6455C;margin-bottom: 3px;">Wallet Address:<span id="transferMetamask`+(ownerCount2+1)+`" style="margin-left:auto;color:#fed33f;"></span></div>
				<div style="display:flex;color:#E6455C;">Current Residence:<input size="20" type="text" id="transferAddress`+(ownerCount2+1)+`" style="margin-left:auto;color:#fed33f;text-transform:uppercase;text-align:right;border-radius:3px;border: 1px solid white;background:transparent;"></div>
			</div>
			<button onclick="removeTransferOwner(this.id);" id="transferdelete`+(ownerCount2+1)+`" class="AddDeleteButton" style="margin-left:20px;margin-top:0px;height:80%;align-self:center;" type="button">
				<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 1024 1024"><path d="M960 160h-291.2a160 160 0 0 0-313.6 0H64a32 32 0 0 0 0 64h896a32 32 0 0 0 0-64zM512 96a96 96 0 0 1 90.24 64h-180.48A96 96 0 0 1 512 96zM844.16 290.56a32 32 0 0 0-34.88 6.72A32 32 0 0 0 800 320a32 32 0 1 0 64 0 33.6 33.6 0 0 0-9.28-22.72 32 32 0 0 0-10.56-6.72zM832 416a32 32 0 0 0-32 32v96a32 32 0 0 0 64 0v-96a32 32 0 0 0-32-32zM832 640a32 32 0 0 0-32 32v224a32 32 0 0 1-32 32H256a32 32 0 0 1-32-32V320a32 32 0 0 0-64 0v576a96 96 0 0 0 96 96h512a96 96 0 0 0 96-96v-224a32 32 0 0 0-32-32z"/><path d="M384 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM544 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM704 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0z"/></svg>
			</button>
		</div>
	`);
	ownerCount2++;
}
function removeTransferOwner(id)
{
	$("#"+id).closest('div').remove();
}
async function transferUserIDBlur(transferid, eleid)
{
	transferid = transferid.toUpperCase();
	try
    {
        window.contract = await new web3.eth.Contract(abi, contractAddress);
    }
    catch(err)
    {
        alert(err.message);
        return;
    }
    var transfermetamask = await window.contract.methods.metamask(transferid).call();
	if(transfermetamask=="0x0000000000000000000000000000000000000000")
	{
		$("#transferMetamask"+eleid.slice(14)).html("Invalid");
	}
	else
	{
		$("#transferMetamask"+eleid.slice(14)).html(transfermetamask);
	}
}
$('#uploadSaleDeedButton').click(function() {
	$('#saleDeedToUpload').trigger('click')
});
$('#saleDeedToUpload').change(function()
{
	const reader = new FileReader();
	reader.addEventListener("load", async () => {
		uploaded_saledeed = reader.result;
		$("#uploadSaleDeedButton").html(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 487.451 487.451" style="enable-background:new 0 0 487.451 487.451;fill:white;" xml:space="preserve">
			<g>
				<path d="M371.694,63.921h-87.83V88.06c0,4.046-3.281,7.326-7.326,7.326h-59.521c-3.164,0-5.851-2.01-6.876-4.819   c0.353,0.054,0.71,0.089,1.077,0.089h59.521c4.045,0,7.325-3.28,7.325-7.326V7.326c0-4.045-3.28-7.326-7.325-7.326h-59.521   c-4.047,0-7.326,3.281-7.326,7.326v56.596h-88.136c-4.046,0-7.326,3.281-7.326,7.326v408.879c0,4.045,3.28,7.324,7.326,7.324   h255.938c4.046,0,7.326-3.279,7.326-7.324V71.247C379.021,67.203,375.74,63.921,371.694,63.921z M226.48,26.247h28.994   c5.271,0,9.541,4.271,9.541,9.54s-4.271,9.54-9.541,9.54H226.48c-5.268,0-9.54-4.271-9.54-9.54S221.212,26.247,226.48,26.247z    M205.566,169.084l0.293-0.337c1.13-0.82,1.68-2.11,1.464-3.43c-2.823-17.042-0.974-24.141-0.336-25.921   c4.931-15.135,20.479-22.223,23.53-23.474c0.638-0.248,1.827-0.615,3.082-0.811l0.32-0.075l2.575-0.143l0.014,0.158l0.55-0.045   l2.183-0.386c0.479,0.003,6.479,0.752,15.52,3.53l6.237,2.14c11.382,3.365,16.676,9.663,17.656,10.922   c9.139,10.367,6.701,26.012,4.424,34.415c-0.248,0.966-0.098,1.975,0.449,2.796l0.516,0.659c0.834,1.11,1.146,4.843-0.719,11.769   c-0.383,2.26-1.213,4.094-2.457,5.315c-0.429,0.473-0.75,1.117-0.871,1.807c-3.096,18.125-19.323,38.402-36.438,38.402   c-14.546,0-31.129-18.662-34.11-38.384c-0.11-0.72-0.417-1.361-0.918-1.912c-1.238-1.285-2.035-3.145-2.518-5.899   C204.573,174.992,204.429,170.824,205.566,169.084z M172.086,248.342c0.121-0.156,3.497-4.445,11.511-7.504   c0,0,17.322-6.747,17.646-6.855c9.015-3.272,18.066-10.093,18.066-10.093l0.621,0.539c7.484,6.446,15.589,9.857,23.432,9.857   c0.045,0,0.091-0.004,0.136-0.006c0,0,0.546,0.006,0.591,0.006c7.843,0,15.947-3.411,23.432-9.857l0.622-0.539   c0,0,9.051,6.82,18.064,10.093c0.324,0.108,17.646,6.855,17.646,6.855c8.014,3.059,11.391,7.348,11.511,7.504   c12.41,18.43,14.507,58.693,14.718,63.191c-0.097,6.309-1.885,7.915-2.361,8.238c-26.687,11.939-62.956,16.791-84.223,16.791   s-57.082-4.852-83.768-16.791c-0.477-0.323-2.265-1.932-2.36-8.238C157.58,307.036,159.677,266.771,172.086,248.342z    M285.438,433.861H150.569v-21.553h134.868V433.861L285.438,433.861z M336.882,391.455H150.569v-21.553h186.312V391.455z"/>
			</g>
		</svg>`+this.files[0].name);
	});
	reader.readAsDataURL(this.files[0]);
});
async function allCoordinates()
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
	tempCoordinates = await window.contract.methods.retrieveCoordinates().call();
	for(var itr=0;itr<tempCoordinates.length;itr++)
	{
		everyCoordinates.push(JSON.parse(tempCoordinates[itr]));
	}
}
allCoordinates();
function polygonsIntersect(polygn)
{
	polygon = JSON.parse(polygn)
	var poly2arr = [];
	
	for(var itr=0;itr<polygon.length;itr++)
	{
		poly2arr.push([polygon[itr].lat, polygon[itr].lng]);
	}
	for(var itr=0;itr<everyCoordinates.length;itr++)
	{
		var poly1arr = [];
		for(var itr2=0;itr2<everyCoordinates[itr].length;itr2++)
		{
			poly1arr.push([everyCoordinates[itr][itr2].lat, everyCoordinates[itr][itr2].lng]);
		}
		var poly1 = turf.lineToPolygon(turf.lineString(poly1arr));
		var poly2 = turf.lineToPolygon(turf.lineString(poly2arr));
		console.log(poly1arr, poly2arr, poly1, poly2);
		if(turf.booleanIntersects(poly1, poly2) || turf.booleanContains(poly1, poly2) || turf.booleanContains(poly1, poly2))
		{
			return true;
		}
	}
	return false;
}
function register()
{
	$("#registerButton").prop('disabled', true);
	var userIDArr = [$("#registerUserID1").html()];
	var nameArr = [$("#registerFullname1").val()];
	var homeArr = [$("#registerAddress1").val()];
	var metamaskArr = [$("#registerMetamask1").html()];
	for(var i=2;i<=ownerCount;i++)
	{
		userIDArr.push($("#registerUserID"+i).val());
		nameArr.push($("#registerFullname"+i).val());
		homeArr.push($("#registerAddress"+i).val());
		metamaskArr.push($("#registerMetamask"+i).html());
		if($("#registerUserID"+i).val().length==0 || $("#registerFullname"+i).val().length==0 || $("#registerAddress"+i).val().length==0 || $("#registerMetamask"+i).html().length==0 || $("#registerMetamask"+i).html()=="Invalid")
		{
			alert("Fill the form properly");
			$("#registerButton").prop('disabled', false);
			return;
		}
	}
	if($("#registerFullname1").val().length==0 || $("#registerAddress1").val().length==0 || $("#registerDocumentNumber").val().length==0 || $("#registerPropertyDetails").val().length==0 || uploaded_saledeed=="" || ($("#registerLatLng").val().match(/lat/g) || []).length<3 || polygonsIntersect($("#registerLatLng").val()))
	{
		alert("Fill the form properly");
		$("#registerButton").prop('disabled', false);
		return;
	}
	try
    {
		$.ajax({
			"async": true,
			"crossDomain": true,
			"url": "https://api.web3.storage/upload",
			"method": "POST",
			"headers": {
			  "accept": "application/json",
			  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEZmMjMzNkE4NjdFMzQxYmUyYTI4QUI4YTU5ZDQ3MmNFRjQzNDk1MTIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzk3NjEyNjM3NDEsIm5hbWUiOiJJbnZlc3RvcG9saXMifQ.yXRVRbyOmctb8oc-_MiZXWIH2uzG4ePN17DTF-H2hwM",
			},
			"data": uploaded_saledeed,
			success: async function (data) {
				registerLnd(data["cid"]);
			}
		});
        async function registerLnd(path)
        {
			try
			{
				window.contract = await new web3.eth.Contract(abi5, contractAddress5);
			}
			catch(err)
			{
				alert(err.message);
				$("#registerButton").prop('disabled', false);
				return;
			}
			web3.eth.getAccounts().then(function(acc){
				accounts = acc;
				window.contract.methods.registerLand($("#registerDocumentNumber").val(), userIDArr, nameArr, homeArr, metamaskArr, $("#registerPropertyDetails").val(), $("#registerLatLng").val(), path).send({from: accounts[0], gas: 4000000}, function(err, result) {
					if(err)
					{
						alert(err);
						$("#registerButton").prop('disabled', false);
					}
				}).on("receipt",function(res)
				{
					if(res.events.registerevent.returnValues.success=="YES")
					{
						alert("Registration request submitted! ");
						$("#registerButton").prop('disabled', false);
						window.location.reload();
					}
					else if(res.events.registerevent.returnValues.success=="NO")
					{
						alert("Land already exists!");
						$("#registerButton").prop('disabled', false);
					}
					else
					{
						alert("Registration Unsuccessful");
						$("#registerButton").prop('disabled', false);
					}
				});
			});
        }
    }
    catch(err)
    {
        alert(err.message);
		$("#registerButton").prop('disabled', false);
        return;
    }
}
function clearRegForm()
{
	$(".removable").remove();
	$("#registerFullname1").val("");
	$("#registerAddress1").val("");
	$("#registerDocumentNumber").val("");
	$("#registerPropertyDetails").val("");
	uploaded_saledeed = "";
	$("#uploadSaleDeedButton").html(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 487.451 487.451" style="enable-background:new 0 0 487.451 487.451;fill:white;" xml:space="preserve">
			<g>
				<path d="M371.694,63.921h-87.83V88.06c0,4.046-3.281,7.326-7.326,7.326h-59.521c-3.164,0-5.851-2.01-6.876-4.819   c0.353,0.054,0.71,0.089,1.077,0.089h59.521c4.045,0,7.325-3.28,7.325-7.326V7.326c0-4.045-3.28-7.326-7.325-7.326h-59.521   c-4.047,0-7.326,3.281-7.326,7.326v56.596h-88.136c-4.046,0-7.326,3.281-7.326,7.326v408.879c0,4.045,3.28,7.324,7.326,7.324   h255.938c4.046,0,7.326-3.279,7.326-7.324V71.247C379.021,67.203,375.74,63.921,371.694,63.921z M226.48,26.247h28.994   c5.271,0,9.541,4.271,9.541,9.54s-4.271,9.54-9.541,9.54H226.48c-5.268,0-9.54-4.271-9.54-9.54S221.212,26.247,226.48,26.247z    M205.566,169.084l0.293-0.337c1.13-0.82,1.68-2.11,1.464-3.43c-2.823-17.042-0.974-24.141-0.336-25.921   c4.931-15.135,20.479-22.223,23.53-23.474c0.638-0.248,1.827-0.615,3.082-0.811l0.32-0.075l2.575-0.143l0.014,0.158l0.55-0.045   l2.183-0.386c0.479,0.003,6.479,0.752,15.52,3.53l6.237,2.14c11.382,3.365,16.676,9.663,17.656,10.922   c9.139,10.367,6.701,26.012,4.424,34.415c-0.248,0.966-0.098,1.975,0.449,2.796l0.516,0.659c0.834,1.11,1.146,4.843-0.719,11.769   c-0.383,2.26-1.213,4.094-2.457,5.315c-0.429,0.473-0.75,1.117-0.871,1.807c-3.096,18.125-19.323,38.402-36.438,38.402   c-14.546,0-31.129-18.662-34.11-38.384c-0.11-0.72-0.417-1.361-0.918-1.912c-1.238-1.285-2.035-3.145-2.518-5.899   C204.573,174.992,204.429,170.824,205.566,169.084z M172.086,248.342c0.121-0.156,3.497-4.445,11.511-7.504   c0,0,17.322-6.747,17.646-6.855c9.015-3.272,18.066-10.093,18.066-10.093l0.621,0.539c7.484,6.446,15.589,9.857,23.432,9.857   c0.045,0,0.091-0.004,0.136-0.006c0,0,0.546,0.006,0.591,0.006c7.843,0,15.947-3.411,23.432-9.857l0.622-0.539   c0,0,9.051,6.82,18.064,10.093c0.324,0.108,17.646,6.855,17.646,6.855c8.014,3.059,11.391,7.348,11.511,7.504   c12.41,18.43,14.507,58.693,14.718,63.191c-0.097,6.309-1.885,7.915-2.361,8.238c-26.687,11.939-62.956,16.791-84.223,16.791   s-57.082-4.852-83.768-16.791c-0.477-0.323-2.265-1.932-2.36-8.238C157.58,307.036,159.677,266.771,172.086,248.342z    M285.438,433.861H150.569v-21.553h134.868V433.861L285.438,433.861z M336.882,391.455H150.569v-21.553h186.312V391.455z"/>
			</g>
		</svg><span>Upload Sale Deed</span>`);
	resetMap();
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
		registrarsList.push([registrarInfo[i].coordinates, parseInt(registrarInfo[i].sd), parseInt(registrarInfo[i].td), parseInt(registrarInfo[i].rf)]);
    }
}
function pointInsidePolygon(rdn)
{
	var point = turf.point(rdnCenter[rdn]);
	for(var i=0;i<registrarsList.length;i++)
	{
		coord = JSON.parse(registrarsList[i][0]);
		var polygonArr = [];
		for(var j=0;j<coord.length;j++)
		{
			polygonArr.push([coord[j].lat, coord[j].lng]);
		}
		var polygon = turf.lineToPolygon(turf.lineString(polygonArr));
		if(turf.booleanPointInPolygon(point, polygon))
		{
			return [registrarsList[i][1], registrarsList[i][2], registrarsList[i][3]];
		}
		else
		{
			return [1, 1, 1];
		}
	}
	return [1,1,1];
}
function transfer()
{
	$("#transferButton").prop('disabled', true);
	var userIDArr = [];
	var nameArr = [];
	var homeArr = [];
	var metamaskArr = [];
	for(var i=1;i<=ownerCount2;i++)
	{
		userIDArr.push($("#transferUserID"+i).val());
		nameArr.push($("#transferFullname"+i).val());
		homeArr.push($("#transferAddress"+i).val());
		metamaskArr.push($("#transferMetamask"+i).html());
		if($("#transferUserID"+i).val().length==0 || $("#transferFullname"+i).val().length==0 || $("#transferAddress"+i).val().length==0 || $("#transferMetamask"+i).html().length==0 || $("#transferMetamask"+i).html()=="Invalid")
		{
			alert("Fill the form properly");
			$("#transferButton").prop('disabled', false);
			return;
		}
	}
	if($("#transferDocumentNumber").val().length==0 || uploaded_saledeed=="")
	{
		alert("Fill the form properly");
		$("#transferButton").prop('disabled', false);
		return;
	}
	try
    {
		$.ajax({
			"async": true,
			"crossDomain": true,
			"url": "https://api.web3.storage/upload",
			"method": "POST",
			"headers": {
			  "accept": "application/json",
			  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEZmMjMzNkE4NjdFMzQxYmUyYTI4QUI4YTU5ZDQ3MmNFRjQzNDk1MTIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzk3NjEyNjM3NDEsIm5hbWUiOiJJbnZlc3RvcG9saXMifQ.yXRVRbyOmctb8oc-_MiZXWIH2uzG4ePN17DTF-H2hwM",
			},
			"data": uploaded_saledeed,
			success: async function (data) {
				transferLnd(data["cid"]);
			}
		});
        async function transferLnd(path)
        {
			try
			{
				window.contract = await new web3.eth.Contract(abi5, contractAddress5);
			}
			catch(err)
			{
				alert(err.message);
				$("#transferButton").prop('disabled', false);
				return;
			}
			var fees=0.00001;
			if(investorInfo.token2==5)
			{
				fees=0;
			}
			else if(investorInfo.token2==6)
			{
				fees=0.000002;
			}
			else if(investorInfo.token2==7)
			{
				fees=0.000005;
			}
			else if(investorInfo.token2==8)
			{
				fees=0.000009;
			}
			var rdnFees = pointInsidePolygon($("#transferDocumentNumber").val());
			console.log(rdnFees);
			var toPayx = (rdnFees[0]+rdnFees[1]+rdnFees[2]+rdnFees[2]*fees).toString();
			var toPay = web3.utils.toWei(toPayx, "ether");
			web3.eth.getAccounts().then(function(acc){
				accounts = acc;
				window.contract.methods.transferLand($("#transferDocumentNumber").val(), userIDArr, nameArr, homeArr, metamaskArr, path, rdnFees[0]+rdnFees[1]+rdnFees[2]).send({from: accounts[0], gas: 4000000, value: toPay}, function(err, result) {
					if(err)
					{
						alert(err);
						$("#transferButton").prop('disabled', false);
					}
				}).on("receipt",function(res)
				{
					if(res.events.transferevent.returnValues.success=="YES")
					{
						$("#transferButton").prop('disabled', false);
						async function investToken2()
						{
							try
							{
								window.contract = await new web3.eth.Contract(abi4, contractAddress4);
							}
							catch(err)
							{
								alert(err.message);
								return;
							}
							web3.eth.getAccounts().then(function(acc)
							{
								accounts = acc;
								window.contract.methods.invest(window.sessionStorage.getItem("username"), 2).send({from: accounts[0], gas: 4000000}, function(err, result) {
									if(err)
									{
										alert(err);
									}
								}).on("receipt",function(res){
									if(res.events.tokenAdded.returnValues.success=="YES")
									{
										alert("Transfer of ownership request submitted!");
										window.location.reload();
									}
									else
									{
										alert("Failed to increment the token!");
									}
								});
							});
						}
						investToken2();
					}
					else if(res.events.transferevent.returnValues.success=="NO")
					{
						alert("Invalid operation!");
						$("#transferButton").prop('disabled', false);
					}
					else
					{
						alert("Transfer of ownership Unsuccessful");
						$("#transferButton").prop('disabled', false);
					}
				});
			});
        }
    }
    catch(err)
    {
        alert(err.message);
		$("#transferButton").prop('disabled', false);
        return;
    }
}
function clearTransForm()
{
	$(".removable2").remove();
	$("#transferUserID1").val("");
	$("#transferFullname1").val("");
	$("#transferAddress1").val("");
	$("#transferMetamask1").html("");
	$("#transferDocumentNumber").val("");
	uploaded_saledeed = "";
	$("#uploadSaleDeedButton").html(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 487.451 487.451" style="enable-background:new 0 0 487.451 487.451;fill:white;" xml:space="preserve">
			<g>
				<path d="M371.694,63.921h-87.83V88.06c0,4.046-3.281,7.326-7.326,7.326h-59.521c-3.164,0-5.851-2.01-6.876-4.819   c0.353,0.054,0.71,0.089,1.077,0.089h59.521c4.045,0,7.325-3.28,7.325-7.326V7.326c0-4.045-3.28-7.326-7.325-7.326h-59.521   c-4.047,0-7.326,3.281-7.326,7.326v56.596h-88.136c-4.046,0-7.326,3.281-7.326,7.326v408.879c0,4.045,3.28,7.324,7.326,7.324   h255.938c4.046,0,7.326-3.279,7.326-7.324V71.247C379.021,67.203,375.74,63.921,371.694,63.921z M226.48,26.247h28.994   c5.271,0,9.541,4.271,9.541,9.54s-4.271,9.54-9.541,9.54H226.48c-5.268,0-9.54-4.271-9.54-9.54S221.212,26.247,226.48,26.247z    M205.566,169.084l0.293-0.337c1.13-0.82,1.68-2.11,1.464-3.43c-2.823-17.042-0.974-24.141-0.336-25.921   c4.931-15.135,20.479-22.223,23.53-23.474c0.638-0.248,1.827-0.615,3.082-0.811l0.32-0.075l2.575-0.143l0.014,0.158l0.55-0.045   l2.183-0.386c0.479,0.003,6.479,0.752,15.52,3.53l6.237,2.14c11.382,3.365,16.676,9.663,17.656,10.922   c9.139,10.367,6.701,26.012,4.424,34.415c-0.248,0.966-0.098,1.975,0.449,2.796l0.516,0.659c0.834,1.11,1.146,4.843-0.719,11.769   c-0.383,2.26-1.213,4.094-2.457,5.315c-0.429,0.473-0.75,1.117-0.871,1.807c-3.096,18.125-19.323,38.402-36.438,38.402   c-14.546,0-31.129-18.662-34.11-38.384c-0.11-0.72-0.417-1.361-0.918-1.912c-1.238-1.285-2.035-3.145-2.518-5.899   C204.573,174.992,204.429,170.824,205.566,169.084z M172.086,248.342c0.121-0.156,3.497-4.445,11.511-7.504   c0,0,17.322-6.747,17.646-6.855c9.015-3.272,18.066-10.093,18.066-10.093l0.621,0.539c7.484,6.446,15.589,9.857,23.432,9.857   c0.045,0,0.091-0.004,0.136-0.006c0,0,0.546,0.006,0.591,0.006c7.843,0,15.947-3.411,23.432-9.857l0.622-0.539   c0,0,9.051,6.82,18.064,10.093c0.324,0.108,17.646,6.855,17.646,6.855c8.014,3.059,11.391,7.348,11.511,7.504   c12.41,18.43,14.507,58.693,14.718,63.191c-0.097,6.309-1.885,7.915-2.361,8.238c-26.687,11.939-62.956,16.791-84.223,16.791   s-57.082-4.852-83.768-16.791c-0.477-0.323-2.265-1.932-2.36-8.238C157.58,307.036,159.677,266.771,172.086,248.342z    M285.438,433.861H150.569v-21.553h134.868V433.861L285.438,433.861z M336.882,391.455H150.569v-21.553h186.312V391.455z"/>
			</g>
		</svg><span>Upload Sale Deed</span>`);
}
function renderMap(id)
{
	var c = rdnCenter[$("#"+id).attr("data-rdn")];
	var myLatLng = {lat: c[0], lng: c[1]};
	console.log(myLatLng);
	var map2 = new google.maps.Map(document.getElementById(id),
	{
		zoom: 10,
		center: myLatLng,
		mapTypeId: "hybrid",
	});
	var poly2 = new google.maps.Polygon({paths: JSON.parse($("#"+id).attr("data-coordinates")), strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#FF0000", fillOpacity: 0.35});
	poly2.setMap(map2);
}
function downloadPdf(ele)
{
	$.get(ele.getAttribute("data-href"), function(data)
	{
		download(data, "SaleDeed.pdf", "application/pdf");
	})
}
async function retrieveLands()
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
    retrievedLands = await window.contract.methods.getOwnedLands(userid).call();
    for(itr=0;itr<retrievedLands.length;itr++)
    {
        ele = retrievedLands[itr];
        $("#ownedLands").append(
            `<li class="nav__item" id="land`+(landCount+1)+`">
                <a class="nav__link " href="#">
                    <span class="channel-link conversation-link--unread">
                        <span class="channel-link__icon">#</span>
                        <span class="channel-link__element">`+ele.RDN+`</span>
                    </span>
                </a>
            </li>`
        );
		var ownedLandContent = `
		<div class="channel-feed__body" id="land`+(landCount+1)+`content" style="display:none;">
			<div class="message">
				<div class="message__body">
					<div>`;
		var ownedLandContent2 = "";
		for(var itr2=0;itr2<ele.userids.length;itr2++)
		{
			ownedLandContent += `
			<div style="display:flex;color:#E6455C;">User ID:<span style="margin-left:auto;color:#fed33f;text-transform:uppercase;">`+ele.userids[itr2]+`</span></div>
            <div style="display:flex;color:#E6455C;">Full Name:<span style="margin-left:auto;color:#fed33f;">`+ele.names[itr2]+`</span></div>
            <div style="display:flex;color:#E6455C;">Wallet Address:<span style="margin-left:auto;color:#fed33f;">`+ele.home[itr2]+`</span></div>
            <div style="display:flex;color:#E6455C;margin-bottom:15px;">Current Residence:<span style="margin-left:auto;color:#fed33f;">`+ele.metamaskaddress[itr2]+`</span></div>`;
		}
		if(ele.pendingTransfer)
		{
			for(var itr2=0;itr2<ele.new_userids.length;itr2++)
			{
				ownedLandContent2 += `
				<div style="display:flex;color:#E6455C;">Claimant User ID:<span style="margin-left:auto;color:#fed33f;text-transform:uppercase;">`+ele.new_userids[itr2]+`</span></div>
				<div style="display:flex;color:#E6455C;">Claimant Full Name:<span style="margin-left:auto;color:#fed33f;">`+ele.new_names[itr2]+`</span></div>
				<div style="display:flex;color:#E6455C;">Claimant Wallet Address:<span style="margin-left:auto;color:#fed33f;">`+ele.new_home[itr2]+`</span></div>
				<div style="display:flex;color:#E6455C;margin-bottom:15px;">Claimant Current Residence:<span style="margin-left:auto;color:#fed33f;">`+ele.new_metamaskaddress[itr2]+`</span></div>`;
			}
		}
        $("#ownedMarker").after(ownedLandContent+`
							<div style="display:flex;color:#E6455C;">Regular Document Number (RDN):<span style="margin-left:auto;color:#fed33f;overflow-wrap: anywhere;">`+ele.RDN+`</span></div>
							<div style="display:flex;color:#E6455C;">Property Details:<span style="margin-left:auto;color:#fed33f;overflow-wrap: anywhere;">`+ele.details+`</span></div>
							<div style="display:flex;color:#E6455C;">Location:<div class="owned-map-canvas" id="ownedMap`+(landCount+1)+`" style="width:60%;min-width:200px;margin-left: auto;position: relative;overflow: hidden;height: 200px;" data-coordinates='`+ele.coordinates+`' data-rdn="`+ele.RDN+`"></div></div>
							<div style="display:flex;color:#E6455C;margin-bottom:20px;">Registration Verification Status:<span style="margin-left:auto;color:#fed33f;overflow-wrap: anywhere;">`+ele.verified+`</span></div>
							<div style="display:flex;color:#E6455C;margin-bottom:20px;">Any Pending Transfer of Ownership?:<span id="ownedPath`+(landCount+1)+`" data-path1="`+ele.saledeed+`" data-path2="`+ele.new_saledeed+`" style="margin-left:auto;color:#fed33f;overflow-wrap: anywhere;">`+(ele.pendingTransfer ? "YES": "NO")+`</span></div>`
							+ownedLandContent2+
						`</div>
					</div>
					<div class="message__footer">
						<span class="message__authoring">This is a property you currently own</span>
					</div>
				</div>
            </div>`
        );
		var coords = JSON.parse(ele.coordinates);
		var bounds = new google.maps.LatLngBounds();
		var polygonCoords = [];
		for(itc=0;itc<coords.length;itc++)
		{
			polygonCoords.push(new google.maps.LatLng(coords[itc].lat, coords[itc].lng));
		}
		for(itc=0;itc<polygonCoords.length;itc++)
		{
			bounds.extend(polygonCoords[itc]);
		}
		rdnCenter[ele.RDN] = [bounds.getCenter().lat(), bounds.getCenter().lng()];
        $("#land"+(landCount+1)).click(function()
        {
            var id = this.id;
			$("#registerLandButton").removeClass("button__active");
			$("#transferLandButton").removeClass("button__active");
            $("#landsPage .nav-section a").removeClass("nav__link--active");
            $("#"+id+" a").addClass("nav__link--active");
            $("#landsPage .channel-feed__body").css("display","none");
            $("#"+id+"content").css("display","block");
			renderMap("ownedMap"+id.slice(4));
			$("#supportDocumentUpload").css("display", "none");
			$("#supportDocumentDownload").css("display", "block");
			$("#supportDocumentDownload").html(
				`
				<h4 class="text-heading3 undefined">Supporting Documents</h4>
                <div id="saledeedcontainer">
                    <button type="button"id="downloadSaleDeedButton">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 487.451 487.451" style="enable-background:new 0 0 487.451 487.451;fill:white;" xml:space="preserve">
                            <g>
                                <path d="M371.694,63.921h-87.83V88.06c0,4.046-3.281,7.326-7.326,7.326h-59.521c-3.164,0-5.851-2.01-6.876-4.819   c0.353,0.054,0.71,0.089,1.077,0.089h59.521c4.045,0,7.325-3.28,7.325-7.326V7.326c0-4.045-3.28-7.326-7.325-7.326h-59.521   c-4.047,0-7.326,3.281-7.326,7.326v56.596h-88.136c-4.046,0-7.326,3.281-7.326,7.326v408.879c0,4.045,3.28,7.324,7.326,7.324   h255.938c4.046,0,7.326-3.279,7.326-7.324V71.247C379.021,67.203,375.74,63.921,371.694,63.921z M226.48,26.247h28.994   c5.271,0,9.541,4.271,9.541,9.54s-4.271,9.54-9.541,9.54H226.48c-5.268,0-9.54-4.271-9.54-9.54S221.212,26.247,226.48,26.247z    M205.566,169.084l0.293-0.337c1.13-0.82,1.68-2.11,1.464-3.43c-2.823-17.042-0.974-24.141-0.336-25.921   c4.931-15.135,20.479-22.223,23.53-23.474c0.638-0.248,1.827-0.615,3.082-0.811l0.32-0.075l2.575-0.143l0.014,0.158l0.55-0.045   l2.183-0.386c0.479,0.003,6.479,0.752,15.52,3.53l6.237,2.14c11.382,3.365,16.676,9.663,17.656,10.922   c9.139,10.367,6.701,26.012,4.424,34.415c-0.248,0.966-0.098,1.975,0.449,2.796l0.516,0.659c0.834,1.11,1.146,4.843-0.719,11.769   c-0.383,2.26-1.213,4.094-2.457,5.315c-0.429,0.473-0.75,1.117-0.871,1.807c-3.096,18.125-19.323,38.402-36.438,38.402   c-14.546,0-31.129-18.662-34.11-38.384c-0.11-0.72-0.417-1.361-0.918-1.912c-1.238-1.285-2.035-3.145-2.518-5.899   C204.573,174.992,204.429,170.824,205.566,169.084z M172.086,248.342c0.121-0.156,3.497-4.445,11.511-7.504   c0,0,17.322-6.747,17.646-6.855c9.015-3.272,18.066-10.093,18.066-10.093l0.621,0.539c7.484,6.446,15.589,9.857,23.432,9.857   c0.045,0,0.091-0.004,0.136-0.006c0,0,0.546,0.006,0.591,0.006c7.843,0,15.947-3.411,23.432-9.857l0.622-0.539   c0,0,9.051,6.82,18.064,10.093c0.324,0.108,17.646,6.855,17.646,6.855c8.014,3.059,11.391,7.348,11.511,7.504   c12.41,18.43,14.507,58.693,14.718,63.191c-0.097,6.309-1.885,7.915-2.361,8.238c-26.687,11.939-62.956,16.791-84.223,16.791   s-57.082-4.852-83.768-16.791c-0.477-0.323-2.265-1.932-2.36-8.238C157.58,307.036,159.677,266.771,172.086,248.342z    M285.438,433.861H150.569v-21.553h134.868V433.861L285.438,433.861z M336.882,391.455H150.569v-21.553h186.312V391.455z"/>
                            </g>
                        </svg>
                        <a  onclick="downloadPdf(this);" href="#">Download Current Sale Deed</a>
                    </button>
                </div>`
			);
			$("#saledeedcontainer a").attr("data-href", "https://ipfs.io/ipfs/"+$("#ownedPath"+id.slice(4)).attr("data-path1"));
			if($("#ownedPath"+id.slice(4)).html()=="YES")
			{
				$("#saledeedcontainer").after(
					`<div id="saledeedcontainer2">
						<button type="button" id="downloadNewSaleDeedButton">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 487.451 487.451" style="enable-background:new 0 0 487.451 487.451;fill:white;" xml:space="preserve">
								<g>
									<path d="M371.694,63.921h-87.83V88.06c0,4.046-3.281,7.326-7.326,7.326h-59.521c-3.164,0-5.851-2.01-6.876-4.819   c0.353,0.054,0.71,0.089,1.077,0.089h59.521c4.045,0,7.325-3.28,7.325-7.326V7.326c0-4.045-3.28-7.326-7.325-7.326h-59.521   c-4.047,0-7.326,3.281-7.326,7.326v56.596h-88.136c-4.046,0-7.326,3.281-7.326,7.326v408.879c0,4.045,3.28,7.324,7.326,7.324   h255.938c4.046,0,7.326-3.279,7.326-7.324V71.247C379.021,67.203,375.74,63.921,371.694,63.921z M226.48,26.247h28.994   c5.271,0,9.541,4.271,9.541,9.54s-4.271,9.54-9.541,9.54H226.48c-5.268,0-9.54-4.271-9.54-9.54S221.212,26.247,226.48,26.247z    M205.566,169.084l0.293-0.337c1.13-0.82,1.68-2.11,1.464-3.43c-2.823-17.042-0.974-24.141-0.336-25.921   c4.931-15.135,20.479-22.223,23.53-23.474c0.638-0.248,1.827-0.615,3.082-0.811l0.32-0.075l2.575-0.143l0.014,0.158l0.55-0.045   l2.183-0.386c0.479,0.003,6.479,0.752,15.52,3.53l6.237,2.14c11.382,3.365,16.676,9.663,17.656,10.922   c9.139,10.367,6.701,26.012,4.424,34.415c-0.248,0.966-0.098,1.975,0.449,2.796l0.516,0.659c0.834,1.11,1.146,4.843-0.719,11.769   c-0.383,2.26-1.213,4.094-2.457,5.315c-0.429,0.473-0.75,1.117-0.871,1.807c-3.096,18.125-19.323,38.402-36.438,38.402   c-14.546,0-31.129-18.662-34.11-38.384c-0.11-0.72-0.417-1.361-0.918-1.912c-1.238-1.285-2.035-3.145-2.518-5.899   C204.573,174.992,204.429,170.824,205.566,169.084z M172.086,248.342c0.121-0.156,3.497-4.445,11.511-7.504   c0,0,17.322-6.747,17.646-6.855c9.015-3.272,18.066-10.093,18.066-10.093l0.621,0.539c7.484,6.446,15.589,9.857,23.432,9.857   c0.045,0,0.091-0.004,0.136-0.006c0,0,0.546,0.006,0.591,0.006c7.843,0,15.947-3.411,23.432-9.857l0.622-0.539   c0,0,9.051,6.82,18.064,10.093c0.324,0.108,17.646,6.855,17.646,6.855c8.014,3.059,11.391,7.348,11.511,7.504   c12.41,18.43,14.507,58.693,14.718,63.191c-0.097,6.309-1.885,7.915-2.361,8.238c-26.687,11.939-62.956,16.791-84.223,16.791   s-57.082-4.852-83.768-16.791c-0.477-0.323-2.265-1.932-2.36-8.238C157.58,307.036,159.677,266.771,172.086,248.342z    M285.438,433.861H150.569v-21.553h134.868V433.861L285.438,433.861z M336.882,391.455H150.569v-21.553h186.312V391.455z"/>
								</g>
							</svg>
							<a  onclick="downloadPdf(this);" href="#">Download New Sale Deed</a>
						</button>
					</div>`
				);
				$("#saledeedcontainer2 a").attr("data-href", "https://ipfs.io/ipfs/"+$("#ownedPath"+id.slice(4)).attr("data-path2"));
			}
			clearRegForm();
			clearTransForm();
        });
        landCount++;
    }
}


/*NFTs*/

$("#newNFT").click(function()
{
	$("#viewNFT a").removeClass("nav__link--active");
	$("#newNFT a").addClass("nav__link--active");
	$("#viewNFTcontent").css("display", "none");
	$("#newNFTcontent").css("display", "block");
	$("#viewButton").removeClass("button__active");
	$("#newButton").addClass("button__active");
});
$("#viewNFT").click(function()
{
	$("#newNFT a").removeClass("nav__link--active");
	$("#viewNFT a").addClass("nav__link--active");
	$("#newNFTcontent").css("display", "none");
	$("#viewNFTcontent").css("display", "block");
	$("#newButton").removeClass("button__active");
	$("#viewButton").addClass("button__active");
});
function newNFTClicked()
{
	$("#viewNFT a").removeClass("nav__link--active");
	$("#newNFT a").addClass("nav__link--active");
	$("#viewNFTcontent").css("display", "none");
	$("#newNFTcontent").css("display", "block");
	$("#viewButton").removeClass("button__active");
	$("#newButton").addClass("button__active");
}
function viewNFTClicked()
{
	$("#newNFT a").removeClass("nav__link--active");
	$("#viewNFT a").addClass("nav__link--active");
	$("#newNFTcontent").css("display", "none");
	$("#viewNFTcontent").css("display", "block");
	$("#newButton").removeClass("button__active");
	$("#viewButton").addClass("button__active");
}
const canvas = window.canvas;
const gl = canvas.getContext("webgl2");
const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
const touches = new Map();
const vertexSource = `#version 300 es
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

in vec2 position;

void main(void) {
    gl_Position = vec4(position, 0., 1.);
}
`;
const fragmentSource = `#version 300 es
/*********
* made by Matthias Hurrle (@atzedent)
*/

#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;
uniform vec2 touch;
uniform int pointerCount;

out vec4 fragColor;

#define PI 3.14159
#define TAU 6.28318
#define T (mod(time,90.)*.05)
#define S smoothstep
#define mouse (touch/resolution)
#define hue(a) (.5+.2*cos(10.3*(a)+vec3(0,23,21)))
#define rot(a) mat2(cos(a),-sin(a),sin(a),cos(a))
#define syl(p,r) (length(p)-r)

vec3 dflame(vec2 uv) {
    vec2
    n=vec2(0),
    q=vec2(0);

    uv*=.875;

    float
    d=dot(uv,uv),
    s=9.,
    a=.02,
    b=sin(T*.4-d*4.)*.9,
    t=T*4.;

    uv*=rot(sin(6.+t*.05)*.8-.567);
    uv.y-=t*.05;

    mat2 m=mat2(.6,1.2,-1.2,.6);
    for (float i=.0; i<30.; i++) {
        n*=m;
        q=uv*s-t+b+i+n;
        a+=dot(cos(q)/s,vec2(.2));
        n+=sin(q);
        s*=1.2;
    }

    vec3 col=vec3(4,2,1)*(a+.2)+a+a-d;
    col=exp(-col*8.);
    col=abs(col);
    col=sqrt(col);
    col=exp(-col*4.);

    return col;
}

float tick(float t, float e) {
  return floor(t)+pow(S(.0, 1.,fract(t)), e);
}

float box(vec3 p, vec3 s, float r) {
  p = abs(p)-s;

  return length(max(p,.0))+
    min(.0, max(max(p.x, p.y), p.z))-r;
}

float map(vec3 p) {
  const float n = 5.5;
  p.yz = (fract(p.yz/n)-.5)*n;
  p.xz = (p.xz-n*clamp(round(p.xz/n), -10.,10.));
  p.yz *= rot(sin(tick(T, 1.)));
  p.xz *= rot(sin(tick(T, 1.)));
  float d = 1e5,
  bx = box(p, vec3(.85),.125);

  d = min(d, bx);

  return d;
}

vec3 norm(vec3 p) {
  vec2 e = vec2(1e-2, 0);
  float d = map(p);
  vec3 n = d-vec3(
    map(p-e.xyy),
    map(p-e.yxy),
    map(p-e.yyx)
  );

  return normalize(n);
}

vec3 dir(vec2 uv, vec3 ro, vec3 t, float z) {
  vec3 up = vec3(0, 1, 0),
  f = normalize(t-ro),
  r = normalize(cross(up, f)),
  u = cross(f, r),
  c = f*z,
  i = c+uv.x*r+uv.y*u,
  d = normalize(i);

  return d;
}

void cam(inout vec3 p) {
  if (pointerCount == 0) {
    p.xy *= rot(cos(T*.2)*PI);

  }
}

void cam2(inout vec3 p) {
  if (pointerCount > 0) {
    p.yz *= rot(-mouse.y*acos(-1.)+acos(.0));
    p.xz *= rot(-mouse.x*acos(-1.)*2.);
  } else {
    p.xz *= rot(sin(T*.2)*PI);
  }
}

void main(void) {
  vec2 uv = (
    gl_FragCoord.xy-.5*resolution
  )/min(resolution.x, resolution.y);

  vec3 col = vec3(0),
  tg = vec3(0, 0, T*10.),
  ro = vec3(0, 0, tg.z-20.),
  rd = dir(uv, ro, tg, 1.);

  cam(ro);
  cam(rd);
  cam2(rd);

  vec3
  l = normalize(ro-vec3(1, 2, 3)),
  p = ro;

  const float steps = 90., maxd = 30.;

  float i = .0,
  dd = .0,
  side = 1., e = 1.;

  for (; i < steps; i++) {
    float d = map(p)*side;

    if (d < 1e-3) {
      vec3 n = norm(p) * side;
      float fog = 1. - clamp(dd / maxd, .0, 1.),
      diff = max(.0, dot(normalize(ro - p), n)),
      fres = clamp(dot(-rd, n), .0, 1.);

      vec3 h = normalize(l - rd);
      col += e
      * (1. - max(.0, i / 200.))
      * diff
      * (
        5. * pow(max(.0, dot(n, h)), 64.) +
        .5 * pow(max(.0, fres), 32.)
      )
      * hue(diff);

      side = -side;
      vec3 rdo = refract(rd, n, 1. + side * .45);

      if (dot(rdo, rdo) == .0) {
        rdo = reflect(rd, n);
      }

      rd = rdo;
      d = 9e-2;
      e *= .925;
    }
    if (dd > maxd) {
      dd = maxd;
      break;
    }

    p += rd * d;
    dd += d;
  }

  p = ro+rd*maxd;
  float ends = pow(abs(rd.z), 7.);
  col += ends*dflame(abs(p.xy * .05));
  
  fragColor = vec4(col*2., 1);
}`;
let time;
let buffer;
let program;
let touch;
let resolution;
let pointerCount;
let vertices = [];
let touching = false;
function resize()
{
	const { innerWidth: width, innerHeight: height } = window;
	canvas.width = width * dpr;
	canvas.height = height * dpr;
	gl.viewport(0, 0, width * dpr, height * dpr);
}
function compile(shader, source)
{
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
	{
		console.error(gl.getShaderInfoLog(shader));
	}
}
function setup()
{
	const vs = gl.createShader(gl.VERTEX_SHADER);
	const fs = gl.createShader(gl.FRAGMENT_SHADER);
	program = gl.createProgram();
	compile(vs, vertexSource);
	compile(fs, fragmentSource);
	gl.attachShader(program, vs);
	gl.attachShader(program, fs);
	gl.linkProgram(program);
	if (!gl.getProgramParameter(program, gl.LINK_STATUS))
	{
		console.error(gl.getProgramInfoLog(program));
	}
	vertices = [-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0];
	buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	const position = gl.getAttribLocation(program, "position");
	gl.enableVertexAttribArray(position);
	gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
	time = gl.getUniformLocation(program, "time");
	touch = gl.getUniformLocation(program, "touch");
	pointerCount = gl.getUniformLocation(program, "pointerCount");
	resolution = gl.getUniformLocation(program, "resolution");
}
function draw(now)
{
	gl.clearColor(0, 0, 0, 1);
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.useProgram(program);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.uniform1f(time, now * 0.001);
	gl.uniform2f(touch, ...getTouches());
	gl.uniform1i(pointerCount, touches.size);
	gl.uniform2f(resolution, canvas.width, canvas.height);
	gl.drawArrays(gl.TRIANGLES, 0, vertices.length * 0.5);
}
function getTouches()
{
	if (!touches.size)
	{
		return [0, 0];
	}
	for (let [id, t] of touches)
	{
		const result = [dpr * t.clientX, dpr * (innerHeight - t.clientY)];
		return result;
	}
}
function loop(now)
{
	draw(now);
	requestAnimationFrame(loop);
}
function init()
{
	setup();
	resize();
	loop(0);
}
document.body.onload = init;
window.onresize = resize;
canvas.onpointerdown = (e) => {
	touching = true;
	touches.set(e.pointerId, e);
};
canvas.onpointermove = (e) => {
	if (!touching) return;
	touches.set(e.pointerId, e);
};
canvas.onpointerup = (e) => {
	touching = false;
	touches.clear();
};
canvas.onpointerout = (e) => {
	touching = false;
	touches.clear();
};
async function setImage2(cid, id)
{
	$.get("https://ipfs.io/ipfs/"+cid, function(data)
	{
		$("#nft2image"+id).attr("src", data);
	})
	.fail(function()
	{
		$("#nft2image"+id).attr("src", "");
		$("#nft2image"+id).attr("alt", "IPFS Node Inactive");
	});
}
const displayItems2 = (item2, index2, active2) =>
{
	const zIndex2 = getZindex2([...$items2], active2)[index2];
	item2.style.setProperty('--zIndex', zIndex2);
	item2.style.setProperty('--active', (index2-active2)/$items2.length);
}
const animate2 = () =>
{
	progress2 = Math.max(0, Math.min(progress2, 100));
	active2 = Math.floor(progress2/100*($items2.length-1));
	$items2.forEach((item2, index2) => displayItems(item2, index2, active2));
}
async function retrieveinterestedNFT()
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
    retrievedinterestedNFTs = await window.contract.methods.retrieveInterests().call();
    for(itr=1;itr<=retrievedinterestedNFTs.length;itr++)
    {
        ele = retrievedinterestedNFTs[itr-1];
		$("#newNFTcontent .carousel").append(
			`<div class="carousel-item">
				<div class="carousel-box" id="nfttwo`+itr+`">
					<img src="" id="nft2image`+itr+`"/>
				</div>
			</div>`
		);
		setImage2(ele.cid, itr);
		styleAdd="";
		if(itr>1)
		{
			styleAdd = "display:none;";
		}
		$("#newNFTcontent .carousel").after(
			`<div style="width:40%;display:flex;flex-direction: column;`+styleAdd+`" id="nft2content`+itr+`" class="nft2content">
				<div style="display:flex;color:#E6455C;">Title:<span id="nft2title`+itr+`" style="max-width:50%;margin-left:auto;color:#fed33f;overflow-wrap: anywhere;text-align: right;">`+ele.title+`</span></div>
				<div style="color:#E6455C;display:flex;">Price (in ₹):<span id="nft2price`+itr+`" style="max-width:50%;margin-left:auto;color:#fed33f;overflow-wrap: anywhere;text-align: right;">`+ele.price+`</span></div>
				<input type="hidden" id="nft2ID`+itr+`" value="`+ele.nftID+`">
				<button onclick="buyNFT(`+ele.nftID+`,`+ele.price+`);" class="AddDeleteButton" style="margin-left:10px;margin-top:15px;height:80%;align-self: center;" type="button">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" fill="white" viewBox="0 0 96 96" version="1.1" xml:space="preserve">
						<g>
						<path d="M77,73.1c-3.8,0-7-2.9-7-6.6s3.1-6.6,7-6.6c3.8,0,7,2.9,7,6.6S80.9,73.1,77,73.1z M77,62c-2.7,0-5,2-5,4.6s2.2,4.6,5,4.6    s5-2,5-4.6S79.8,62,77,62z"/>
						<path d="M77,70.4c-2.2,0-4-1.7-4-3.8c0-2.1,1.8-3.8,4-3.8s4,1.7,4,3.8C81.1,68.7,79.3,70.4,77,70.4z M77,63.8c-1.7,0-3,1.3-3,2.8    c0,1.5,1.4,2.8,3,2.8s3-1.3,3-2.8C80.1,65.1,78.7,63.8,77,63.8z"/>
						<path d="M77,70.4c-0.3,0-0.5-0.2-0.5-0.5v-6.6c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v6.6C77.5,70.2,77.3,70.4,77,70.4z"/>
						<path d="M80.6,67h-7.1c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h7.1c0.3,0,0.5,0.2,0.5,0.5S80.8,67,80.6,67z"/>
						<path d="M79.5,69.4c-0.1,0-0.2,0-0.3-0.1l-5-4.7c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0l5,4.7c0.2,0.2,0.2,0.5,0,0.7    C79.8,69.4,79.7,69.4,79.5,69.4z"/>
						<path d="M74.5,69.4c-0.1,0-0.3-0.1-0.4-0.2c-0.2-0.2-0.2-0.5,0-0.7l5-4.7c0.2-0.2,0.5-0.2,0.7,0c0.2,0.2,0.2,0.5,0,0.7l-5,4.7    C74.8,69.4,74.6,69.4,74.5,69.4z"/>
						<path d="M71,58c-0.5,0-0.9-0.3-1-0.8L67.8,47c-0.1-0.5,0.2-1.1,0.8-1.2c0.5-0.1,1.1,0.2,1.2,0.8L72,56.8c0.1,0.5-0.2,1.1-0.8,1.2    C71.2,58,71.1,58,71,58z"/>
						<path d="M68.8,47.9c-0.5,0-0.9-0.3-1-0.8l-2.3-10.2c-0.1-0.5,0.2-1.1,0.8-1.2c0.5-0.1,1.1,0.2,1.2,0.8l2.3,10.2    c0.1,0.5-0.2,1.1-0.8,1.2C68.9,47.9,68.8,47.9,68.8,47.9z"/>
						<path d="M66.4,37c-0.5,0-0.9-0.3-1-0.8L64,29.9c-0.1-0.5,0.2-1.1,0.8-1.2c0.5-0.1,1.1,0.2,1.2,0.8l1.4,6.3    c0.1,0.5-0.2,1.1-0.8,1.2C66.5,37,66.5,37,66.4,37z"/>
						<path d="M79.9,36.1L79.9,36.1c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S80.5,36.1,79.9,36.1z"/>
						<path d="M71.1,67.9H35c-1.1,0-1.5-0.4-1.5-1s1-1,1.5-1h35.6c0.5,0,1,0.4,1,1S71.1,67.9,71.1,67.9z"/>
						<path d="M27.4,62c-0.5,0-0.9-0.3-1-0.8l-2.4-12.6c-0.1-0.5,0.3-1.1,0.8-1.2c0.5-0.1,1.1,0.3,1.2,0.8l2.4,12.5    c0.1,0.5-0.3,1.1-0.8,1.2C27.5,62,27.5,62,27.4,62z"/>
						<path d="M23,39.3c-0.5,0-0.9-0.3-1-0.8l-2.3-12c-0.2-1.1-0.5-2-0.9-2.8c-0.3-0.5-0.1-1.1,0.4-1.4c0.5-0.3,1.1-0.1,1.4,0.4    c0.5,1,0.9,2.1,1.1,3.4l2.3,12c0.1,0.5-0.3,1.1-0.8,1.2C23.2,39.2,23.1,39.3,23,39.3z"/>
						<path d="M28.5,72.9c-3.9,0-7-2.9-7-6.5s3.1-6.5,7-6.5s7,2.9,7,6.5S32.4,72.9,28.5,72.9z M28.5,61.9c-2.8,0-5,2-5,4.5    s2.2,4.5,5,4.5s5-2,5-4.5S31.3,61.9,28.5,61.9z"/>
						<path d="M28.5,70.4c-1,0-1.9-0.4-2.6-1c-0.7-0.6-1.2-1.5-1.3-2.4c0-0.2,0-0.4,0-0.6c0-0.9,0.3-1.8,0.9-2.5    c0.8-0.9,1.9-1.5,3.1-1.5c0.2,0,0.4,0,0.6,0c1,0.1,1.9,0.7,2.6,1.5c0.5,0.7,0.8,1.5,0.8,2.4c0,0.2,0,0.4,0,0.6    c-0.1,0.8-0.5,1.5-1,2.1c-0.6,0.7-1.5,1.2-2.4,1.3C28.9,70.4,28.7,70.4,28.5,70.4z M28.5,63.4c-0.9,0-1.7,0.4-2.3,1.1    c-0.4,0.5-0.7,1.2-0.7,1.9c0,0.1,0,0.3,0,0.4c0.1,0.7,0.5,1.4,1,1.8c0.6,0.6,1.6,0.9,2.4,0.7c0.7-0.1,1.4-0.4,1.8-1    c0.4-0.4,0.7-1,0.7-1.6l0,0c0-0.1,0-0.3,0-0.4c0-0.7-0.2-1.3-0.6-1.8c-0.5-0.6-1.2-1-1.9-1.1C28.8,63.4,28.7,63.4,28.5,63.4z"/>
						<path d="M28.8,70.4c-0.3,0-0.5-0.2-0.5-0.5v-7c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v7C29.3,70.2,29.1,70.4,28.8,70.4z"/>
						<path d="M31.9,66.9h-6.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h6.8c0.3,0,0.5,0.2,0.5,0.5S32.2,66.9,31.9,66.9z"/>
						<path d="M31.2,69.3c-0.1,0-0.2,0-0.3-0.1l-2.6-2.4l-2.4-2.2c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0l5,4.7    c0.2,0.2,0.2,0.5,0,0.7C31.4,69.2,31.3,69.3,31.2,69.3z"/>
						<path d="M26.1,69.3c-0.1,0-0.3-0.1-0.4-0.2c-0.2-0.2-0.2-0.5,0-0.7l5-4.6c0.2-0.2,0.5-0.2,0.7,0c0.2,0.2,0.2,0.5,0,0.7l0,0l-5,4.6    C26.4,69.2,26.3,69.3,26.1,69.3z"/>
						<path d="M72.3,57.9H26.5c-0.6,0-1-0.4-1-1s0.4-1,1-1h45.8c0.4,0,0.7,0,1.1-0.1c1.4-0.2,1.5-0.8,1.8-2.3c0-0.2,0.1-0.5,0.1-0.7    l1.5-7.1c0.1-0.5,0.6-0.9,1.2-0.8c0.5,0.1,0.9,0.7,0.8,1.2l-1.5,7.1c0,0.2-0.1,0.4-0.1,0.7c-0.3,1.6-0.6,3.5-3.4,3.9    C73.2,57.9,72.8,57.9,72.3,57.9z"/>
						<path d="M79.9,36.1c-0.1,0-0.1,0-0.2,0c-0.5-0.1-0.9-0.6-0.8-1.2l1.2-5.8l-5.5,0.4l-52.3,3c-0.5,0-1-0.4-1.1-0.9    c0-0.6,0.4-1,0.9-1.1l52.3-3l5.7-0.4c0.7,0,1.3,0.2,1.7,0.7c0.3,0.4,0.5,0.9,0.4,1.4l-1.3,6.2C80.8,35.8,80.4,36.1,79.9,36.1z     M80.2,28.7C80.2,28.7,80.2,28.7,80.2,28.7L80.2,28.7z"/>
						<path d="M18.8,24.1L18.8,24.1l-5.3-0.4c0,0,0,0,0,0c-0.5,0-1-0.5-1-1.1c0-0.6,0.4-1.1,1-1.1l5.3,0.4c0,0,0,0,0,0    c0.5,0,1,0.5,1,1.1C19.7,23.6,19.3,24.1,18.8,24.1z M13.5,22.6l0.1,0.2l5.2,0.4l0-0.2L13.5,22.6z"/>
						<path d="M41.1,58c-0.4,0-0.8-0.3-0.9-0.7l0-0.1l-1.9-8.9c-0.1-0.5,0.2-1.1,0.8-1.2c0.5-0.1,1.1,0.2,1.2,0.8l1.9,8.9    c0.1,0.5-0.2,1.1-0.8,1.2C41.2,58,41.2,58,41.1,58z"/>
						<path d="M38.9,48.3c-0.5,0-0.9-0.3-1-0.8l-1.9-9c-0.1-0.5,0.2-1.1,0.8-1.2c0.5-0.1,1.1,0.2,1.2,0.8l1.9,9c0.1,0.5-0.2,1.1-0.8,1.2    C39.1,48.3,39,48.3,38.9,48.3z"/>
						<path d="M37,38.7c-0.5,0-0.9-0.3-1-0.8l-1.4-6.7c-0.1-0.5,0.2-1.1,0.8-1.2c0.5-0.1,1.1,0.2,1.2,0.8l1.4,6.7    c0.1,0.5-0.2,1.1-0.8,1.2C37.1,38.7,37.1,38.7,37,38.7z"/>
						<path d="M40,31.5c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1s1,0.4,1,1S40.6,31.5,40,31.5z"/>
						<path d="M55.9,58c-0.4,0-0.8-0.3-0.9-0.7l-2.2-9.8c-0.1-0.5,0.2-1.1,0.8-1.2c0.5-0.1,1.1,0.2,1.2,0.8l2.2,9.7    c0.1,0.5-0.2,1.1-0.7,1.2C56.1,58,56,58,55.9,58z"/>
						<path d="M53.8,47.8c-0.5,0-0.9-0.3-1-0.8l-2.3-10c-0.1-0.5,0.2-1.1,0.8-1.2c0.5-0.1,1.1,0.2,1.2,0.8l0,0.2l2.2,9.8    c0.1,0.5-0.2,1.1-0.8,1.2C53.9,47.8,53.8,47.8,53.8,47.8z"/>
						<path d="M51.5,37.9c-0.5,0-0.9-0.3-1-0.8L49,30.4c-0.1-0.5,0.2-1.1,0.8-1.2c0.5-0.1,1.1,0.2,1.2,0.8l1.5,6.7    c0.1,0.5-0.2,1.1-0.8,1.2C51.6,37.8,51.6,37.9,51.5,37.9z"/>
						<path d="M24.2,49.5l-2.2-11.6L76,34.5l5.2-0.5l-2.7,13h-0.8l-1.3,0.1L71,47.4L24.2,49.5z M24.4,39.7l1.4,7.7l45-2l6-0.4l1.8-8.8    l-2.6,0.2L24.4,39.7z"/>
						</g>
						</g>
					</svg>
            	</button>
			</div>`);
    }
	$items2 = document.querySelectorAll('#newNFTcontent .carousel-item');
	animate2();
	$items2.forEach((item2, i2) =>
	{
		item2.addEventListener('click', (e) =>
		{
			$("#newNFTcontent .nft2content").css("display", "none");
			$("#newNFTcontent #nft2content"+e.target.id.slice(6)).css("display", "flex");
			progress2 = ((i2+1)/$items2.length) * 100;
			animate2();
		});
	});
	if(retrievedinterestedNFTs.length>0)
	{
		$("#nfttwo1").parent().trigger("click");
		$("#newNFTcontent .nft2content").css("display", "none");
		$("#newNFTcontent #nft2content1").css("display", "flex");
	}
}
retrieveinterestedNFT();
async function buyNFT(nftID, nftPrice)
{
	if(window.sessionStorage.getItem("loginMode")!="1")
	{
		alert("Login through your metamask wallet to perform this operation!");
		return;
	}
	try
	{
		window.contract = await new web3.eth.Contract(abi6, contractAddress6);
	}
	catch(err)
	{
		alert(err.message);
		return;
	}
	var toPayx = nftPrice.toString();
	var toPay = web3.utils.toWei(toPayx, "ether");
	web3.eth.getAccounts().then(function(acc){
		accounts = acc;
		window.contract.methods.buy(nftID, userid, metamask).send({from: accounts[0], gas: 4000000, value: toPay}, function(err, result) {
			if(err)
			{
				alert(err);
			}
		}).on("receipt",function(res)
		{
			if(res.events.nftTransferred.returnValues.success=="YES")
			{
				alert("Buying the NFT was successful!");
				window.location.reload();
			}
			else if(res.events.nftTransferred.returnValues.success=="NO")
			{
				alert("Operation Unsuccessful!");
			}
			else
			{
				alert("Invalid Operation");
			}
		});
	});
}
async function setImage(cid, id)
{
	$.get("https://ipfs.io/ipfs/"+cid, function(data)
	{
		$("#nftimage"+id).attr("src", data);
	})
	.fail(function()
	{
		$("#nftimage"+id).attr("src", "");
		$("#nftimage"+id).attr("alt", "IPFS Node Inactive");
	});
}
const displayItems = (item, index, active) =>
{
	const zIndex = getZindex([...$items], active)[index];
	item.style.setProperty('--zIndex', zIndex);
	item.style.setProperty('--active', (index-active)/$items.length);
}
const animate = () =>
{
	progress = Math.max(0, Math.min(progress, 100));
	active = Math.floor(progress/100*($items.length-1));
	$items.forEach((item, index) => displayItems(item, index, active));
}
async function retrieveNFT()
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
    retrievedNFTs = await window.contract.methods.retrieve(userid).call();
    for(itr=1;itr<=retrievedNFTs.length;itr++)
    {
        ele = retrievedNFTs[itr-1];
		$("#viewNFTcontent .carousel").append(
			`<div class="carousel-item">
				<div class="carousel-box" id="nft`+itr+`">
					<img src="" id="nftimage`+itr+`"/>
				</div>
			</div>`
		);
		setImage(ele.cid, itr);
		styleAdd = "";
		checkAdd = "";
		style2Add = "display:none;";
		price = ele.price;
		if(itr>1)
		{
			styleAdd = "display:none;";
		}
		if(ele.sell=="YES")
		{
			checkAdd = "checked";
			style2Add = "display:flex;";
		}
		$("#viewNFTcontent .carousel").after(
			`<div style="width:40%;display:flex;flex-direction: column;`+styleAdd+`" id="nftcontent`+itr+`" class="nftcontent">
				<div style="display:flex;color:#E6455C;">Title:<span id="nfttitle`+itr+`" style="max-width:50%;margin-left:auto;color:#fed33f;overflow-wrap: anywhere;text-align: right;">`+ele.title+`</span></div>
				<div style="display:flex;color:#E6455C;">Interested in Selling:<input onchange="sellChange(`+itr+`);" id="nftsell`+itr+`" type="checkbox" style="max-width:50%;margin-left:auto;" `+checkAdd+`></div>
				<div style="color:#E6455C;`+style2Add+`">Price (in ₹):<span contenteditable="true" id="nftprice`+itr+`" style="max-width:50%;margin-left:auto;color:#fed33f;overflow-wrap: anywhere;text-align: right;">`+price+`</span></div>
				<input type="hidden" id="nftID`+itr+`" value="`+ele.nftID+`">
				<button onclick="mark(`+itr+`);" class="AddDeleteButton" style="margin-left:10px;margin-top:15px;height:80%;align-self: center;" type="button">
					<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="white" >
						<g>
							<path d="M17 21.0002L7 21M17 21.0002L17.8031 21C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2843 20.7822 19.908C21 19.4806 21 18.921 21 17.8031V9.21955C21 8.77072 21 8.54521 20.9521 8.33105C20.9095 8.14 20.8393 7.95652 20.7432 7.78595C20.6366 7.59674 20.487 7.43055 20.1929 7.10378L17.4377 4.04241C17.0969 3.66374 16.9242 3.47181 16.7168 3.33398C16.5303 3.21 16.3242 3.11858 16.1073 3.06287C15.8625 3 15.5998 3 15.075 3H6.2002C5.08009 3 4.51962 3 4.0918 3.21799C3.71547 3.40973 3.40973 3.71547 3.21799 4.0918C3 4.51962 3 5.08009 3 6.2002V17.8002C3 18.9203 3 19.4796 3.21799 19.9074C3.40973 20.2837 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H7M17 21.0002V17.1969C17 16.079 17 15.5192 16.7822 15.0918C16.5905 14.7155 16.2837 14.4097 15.9074 14.218C15.4796 14 14.9203 14 13.8002 14H10.2002C9.08009 14 8.51962 14 8.0918 14.218C7.71547 14.4097 7.40973 14.7155 7.21799 15.0918C7 15.5196 7 16.0801 7 17.2002V21M15 7H9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</g>
					</svg>
                </button>
			</div>`
		);
    }
	$items = document.querySelectorAll('#viewNFTcontent .carousel-item');
	animate();
	$items.forEach((item, i) =>
	{
		item.addEventListener('click', (e) =>
		{
			$("#viewNFTcontent .nftcontent").css("display", "none");
			$("#viewNFTcontent #nftcontent"+e.target.id.slice(3)).css("display", "flex");
			progress = ((i+1)/$items.length) * 100;
			animate();
		});
	});
	if(retrievedNFTs.length>0)
	{
		$("#nft1").parent().trigger("click");
		$("#viewNFTcontent .nftcontent").css("display", "none");
		$("#viewNFTcontent #nftcontent1").css("display", "flex");
	}
}
function sellChange(itr)
{
	var checkBox = document.getElementById("nftsell"+itr);
	if(checkBox.checked)
	{
		$("#viewNFTcontent #nftprice"+itr).parent().css("display", "flex");
	}
	else
	{
		$("#viewNFTcontent #nftprice"+itr).parent().css("display", "none");
	}
}
function mark(itr)
{
	var checkBox = document.getElementById("nftsell"+itr);
	if(checkBox.checked)
	{
		interestM(itr);
	}
	else
	{
		disinterestM(itr);
	}
}
async function interestM(itr)
{
	if(!(/^-?\d+$/.test($("#viewNFTcontent #nftprice"+itr).html())))
	{
		alert("Invalid Price");
		return;
	}
	try
    {
        window.contract = await new web3.eth.Contract(abi6, contractAddress6);
    }
    catch(err)
    {
        alert(err.message);
        return;
    }
	web3.eth.getAccounts().then(function(acc){
		accounts = acc;
		window.contract.methods.interest(parseInt($("#viewNFTcontent #nftID"+itr).val()), parseInt($("#viewNFTcontent #nftprice"+itr).html())).send({from: accounts[0], gas: 4000000}, function(err, result) {
			if(err)
			{
				alert(err);
			}
		}).on("receipt",function(res)
		{
			if(res.events.interestMarked.returnValues.success=="YES")
			{
				alert("Marking interest in selling was successful!");
			}
			else
			{
				alert("Marking interest in selling was unsuccessful!");
			}
		});
	});
}
async function disinterestM(itr)
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
	web3.eth.getAccounts().then(function(acc){
		accounts = acc;
		window.contract.methods.disinterest($("#viewNFTcontent #nftID"+itr).val()).send({from: accounts[0], gas: 4000000}, function(err, result) {
			if(err)
			{
				alert(err);
			}
		}).on("receipt",function(res)
		{
			if(res.events.disinterestMarked.returnValues.success=="YES")
			{
				alert("Marking disinterest in selling was successful!");
			}
			else
			{
				alert("Marking disinterest in selling was unsuccessful!");
			}
		});
	});
}

/*Messages*/

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
try
{
    async function username()
    {
        if(window.sessionStorage.getItem("loginMode")==1)
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
            userid = await window.contract.methods.userid(window.sessionStorage.getItem("walletAddress")).call();
            window.sessionStorage.setItem("username", userid);
        }
        else
        {
            userid = window.sessionStorage.getItem("username");
        }
		getIdeatorsInfo();
		getInvestorInfo();
		retrieveNFT();
		getRegistrarsInfo();
		retrieveLands();
        $(".username").html(userid);
        if(window.sessionStorage.getItem("loginMode")!=1)
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
            metamask = await window.contract.methods.metamask(window.sessionStorage.getItem("username")).call();
        }
        else
        {
            metamask = window.sessionStorage.getItem("walletAddress");
        }
		$("#registerMetamask1").html(metamask);
		$("#registerUserID1").html(userid);
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
                    retrievedMessages = await window.contract.methods.retrieve(userid,"investor").call();
                    for(i=1;i<=messagesCount;i++)
                    {
                        $("#message"+i+"content").html("");
                    }
                    for(itr=0;itr<retrievedMessages.length;itr++)
                    {
                        ele = retrievedMessages[itr];
                        if(ele.viewedby!="" && othermessageids.includes("ADMIN"))
                        {
                            var sno = othermessageids.findIndex((element) => element == "ADMIN");
                            sno++;
                            $("#message"+sno+"content").append(
                                `<div class="message" style="width: 45%;">
                                    <div class="message__body" style="color:#FF6670;border:1px solid #C73848;">
                                        <div>`+ele.message+`</div>
                                    </div>
                                    <div class="message__footer" style="color:#FF6670;">
                                        <span class="message__authoring">ADMIN</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
                                    </div>
                                </div>`);
                        }
                        else if(ele.viewedby!="" && !othermessageids.includes("ADMIN"))
                        {
                            $("#directMessages").append(
                                `<li class="nav__item" id="message`+(messagesCount+1)+`">
                                    <a class="nav__link " href="#">
                                        <span class="conversation-link conversation-link--online">
                                            <span class="conversation-link__icon"></span>
                                            <span class="conversation-link__element">ADMIN</span>
                                        </span>
                                    </a>
                                </li>`
                            );
                            $("#messageMarker").after(
                                `
                                <div class="channel-feed__body" id="message`+(messagesCount+1)+`content" style="display:none;">
                                    <div class="message" style="width: 45%;">
                                        <div class="message__body" style="color:#FF6670;border:1px solid #C73848;">
                                            <div>`+ele.message+`</div>
                                        </div>
                                        <div class="message__footer" style="color:#FF6670;">
                                            <span class="message__authoring">ADMIN</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
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
								var elem=document.getElementById(id+"content");
								elem.scrollTop = elem.scrollHeight;
								$("#messagesPage .nav-mobile").html($("#"+id+" a .conversation-link__element").html());
                            });
                            if(messagesCount==0)
                            {
                                var id = "message1";
                                $("#messagesPage .nav-section a").removeClass("nav__link--active");
                                $("#"+id+" a").addClass("nav__link--active");
                                $("#messagesPage .channel-feed__body").css("display","none");
                                $("#"+id+"content").css("display","block");
                                appendTo = "#"+id+"content";
                                towhomid = $("#"+id+" .conversation-link__element").html();
								var elem=document.getElementById(id+"content");
								elem.scrollTop = elem.scrollHeight;
								$("#messagesPage .nav-mobile").html($("#"+id+" a .conversation-link__element").html());
                            }
                            othermessageids.push("ADMIN");
                            messagesCount++;
                        }
                        else if(ele.senderID==userid && othermessageids.includes(ele.receiverID))
                        {
                            var sno = othermessageids.findIndex((element) => element == ele.receiverID);
                            sno++;
                            $("#message"+sno+"content").append(
                                `<div class="message" style="width: 45%;text-align: right;margin-left: auto;">
                                    <div class="message__body">
                                        <div>`+ele.message+`</div>
                                    </div>
                                    <div class="message__footer">
                                        <span class="message__authoring">You</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
                                    </div>
                                </div>`);
                        }
                        else if(ele.receiverID==userid && othermessageids.includes(ele.senderID))
                        {
                            var sno = othermessageids.findIndex((element) => element == ele.senderID);
                            sno++;
                            $("#message"+sno+"content").append(
                                `<div class="message" style="width: 45%;">
                                    <div class="message__body" style="color:#FF6670;border:1px solid #C73848;">
                                        <div>`+ele.message+`</div>
                                    </div>
                                    <div class="message__footer" style="color:#FF6670;">
                                        <span class="message__authoring">`+ele.senderID+`</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
                                    </div>
                                </div>`);
                        }
                        else if(ele.senderID==userid && !othermessageids.includes(ele.receiverID))
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
                            $("#messageMarker").after(
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
								var elem=document.getElementById(id+"content");
								elem.scrollTop = elem.scrollHeight;
								$("#messagesPage .nav-mobile").html($("#"+id+" a .conversation-link__element").html());
                            });
                            if(messagesCount==0)
                            {
                                var id = "message1";
                                $("#messagesPage .nav-section a").removeClass("nav__link--active");
                                $("#"+id+" a").addClass("nav__link--active");
                                $("#messagesPage .channel-feed__body").css("display","none");
                                $("#"+id+"content").css("display","block");
                                appendTo = "#"+id+"content";
                                towhomid = $("#"+id+" .conversation-link__element").html();
								var elem=document.getElementById(id+"content");
								elem.scrollTop = elem.scrollHeight;
								$("#messagesPage .nav-mobile").html($("#"+id+" a .conversation-link__element").html());
                            }
                            othermessageids.push(ele.receiverID);
                            messagesCount++;
                        }
                        else if(ele.receiverID==userid && !othermessageids.includes(ele.senderID))
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
                            $("#messageMarker").after(
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
								var elem=document.getElementById(id+"content");
								elem.scrollTop = elem.scrollHeight;
								$("#messagesPage .nav-mobile").html($("#"+id+" a .conversation-link__element").html());
                            });
                            if(messagesCount==0)
                            {
                                var id = "message1";
                                $("#messagesPage .nav-section a").removeClass("nav__link--active");
                                $("#"+id+" a").addClass("nav__link--active");
                                $("#messagesPage .channel-feed__body").css("display","none");
                                $("#"+id+"content").css("display","block");
                                appendTo = "#"+id+"content";
                                towhomid = $("#"+id+" .conversation-link__element").html();
								var elem=document.getElementById(id+"content");
								elem.scrollTop = elem.scrollHeight;
								$("#messagesPage .nav-mobile").html($("#"+id+" a .conversation-link__element").html());
                            }
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
    }
    username();
}
catch(err)
{
    alert(err.message);
}
var suggestionhovered = false;
$("#messagesPage .form-search input").on("input",function(e)
{
	$("#messagesPage .form-search input").val($(e.target).val());
    if(($("#messagesPage .form-search input").val().length)>0)
    {
        $("#messagesPage .useridslist").css("display","block");
        var filtereduserids = userids.filter(name => name.includes($("#messagesPage .form-search input").val().toUpperCase()));
        if(filtereduserids.length>=5)
        {
            filtereduserids = filtereduserids.slice(0,5);
        }
		if("ADMIN".includes($("#messagesPage .form-search input").val().toUpperCase()))
		{
			filtereduserids.push("ADMIN");
		}
        $("#messagesPage .useridslist").html("");
        filtereduserids.forEach(ele => {
            $("#messagesPage .useridslist").append("<li class='searchSuggestions' onclick='searchSuggestionClicked(this);'>"+ele+"</li>");
        });
    }
    else
    {
        $("#messagesPage .useridslist").css("display","none");
    }
});
$("#messagesPage .form-search input").blur(function()
{
	if(!suggestionhovered)
	{
		$("#messageMarker .useridslist").css("display","none");
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
	$("#messagesPage .useridslist").css("display","none");
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
		$("#messageMarker").after(
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
			var elem=document.getElementById(id+"content");
			elem.scrollTop = elem.scrollHeight;
			$("#messagesPage .nav-mobile").html($("#"+id+" a .conversation-link__element").html());
		});
		$("#messagesPage .nav-section a").removeClass("nav__link--active");
		$("#message"+(messagesCount+1)+" a").addClass("nav__link--active");
		$("#messagesPage .channel-feed__body").css("display","none");
		$("#message"+(messagesCount+1)+"content").css("display","block");
		appendTo = "#message"+(messagesCount+1)+"content";
		towhomid = ele.innerHTML;
		var elem=document.getElementById("message"+(messagesCount+1)+"content");
		elem.scrollTop = elem.scrollHeight;
		$("#messagesPage .nav-mobile").html($("#message"+(messagesCount+1)+" a .conversation-link__element").html());
		messagesCount++;
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
		var elem=document.getElementById("message"+id+"content");
		elem.scrollTop = elem.scrollHeight;
		$("#messagesPage .nav-mobile").html($("#message"+id+" a .conversation-link__element").html());
	}
}
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
                window.contract.methods.send(towhomid,"",userid,msg).send({from: accounts[0], gas: 4000000}, function(err, result) {
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

/*Tokens*/

async function getInvestorInfo()
{
    try
    {
        window.contract = await new web3.eth.Contract(abi4, contractAddress4);
    }
    catch(err)
    {
        alert(err.message);
        return;
    }
    investorInfo = await window.contract.methods.getInvestor(window.sessionStorage.getItem("username")).call();
	if(investorInfo.token1==1)
	{
		$("#uruToken").addClass("button__active");
	}
	else if(investorInfo.token1==2)
	{
		$("#vibranToken").addClass("button__active");
	}
	else if(investorInfo.token1==3)
	{
		$("#kryptonToken").addClass("button__active");
	}
	else if(investorInfo.token1==4)
	{
		$("#adamantToken").addClass("button__active");
	}
	if(investorInfo.token2==5)
	{
		$("#titanToken").addClass("button__active");
	}
	else if(investorInfo.token2==6)
	{
		$("#sakaarToken").addClass("button__active");
	}
	else if(investorInfo.token2==7)
	{
		$("#moragToken").addClass("button__active");
	}
	else if(investorInfo.token2==8)
	{
		$("#xandarToken").addClass("button__active");
	}
	$("#tokenCount").append(`
	<span class="conversation-link__element" style="margin-left:auto;">
		<span class="badge">`+investorInfo.investments+`</span>
	</span>`);
}
function tokenClicked(grade)
{
	if(investorInfo.token1==0 && grade==1 && investorInfo.investments<100)
	{
		alert("You are not eligible for this token");
		return;
	}
	else if(investorInfo.token1==0 && grade==2 && investorInfo.investments<50)
	{
		alert("You are not eligible for this token");
		return;
	}
	else if(investorInfo.token1==0 && grade==3 && investorInfo.investments<20)
	{
		alert("You are not eligible for this token");
		return;
	}
	else if(investorInfo.token1==0 && grade==4 && investorInfo.investments<10)
	{
		alert("You are not eligible for this token");
		return;
	}
	else if(investorInfo.token2==0 && grade==5 && investorInfo.investments<16)
	{
		alert("You are not eligible for this token");
		return;
	}
	else if(investorInfo.token2==0 && grade==6 && investorInfo.investments<8)
	{
		alert("You are not eligible for this token");
		return;
	}
	else if(investorInfo.token2==0 && grade==7 && investorInfo.investments<4)
	{
		alert("You are not eligible for this token");
		return;
	}
	else if(investorInfo.token2==0 && grade==8 && investorInfo.investments<2)
	{
		alert("You are not eligible for this token");
		return;
	}
	else if((investorInfo.token1!=0 && grade>=1 && grade<=4)||(investorInfo.token2!=0 && grade>=5 && grade<=8))
	{
		alert("A token has already been activated");
		return;
	}
	async function activate()
    {
        try
        {
            window.contract = await new web3.eth.Contract(abi4, contractAddress4);
        }
        catch(err)
        {
            alert(err.message);
            return;
        }
        web3.eth.getAccounts().then(function(acc)
		{
            accounts = acc;
            window.contract.methods.activateToken(window.sessionStorage.getItem("username"),grade).send({from: accounts[0], gas: 4000000}, function(err, result) {
                if(err)
                {
                    alert(err);
                }
            }).on("receipt",function(res){
                if(res.events.tokenActivated.returnValues.success=="YES")
                {
                    alert("Token Activated Successfully!");
					window.location.reload();
                }
                else
                {
                    alert("Failed to activate the token!");
                }
            });
        });
    }
    activate();
}
$("#token1").click(function()
{
    $("#tokensPage .nav-section a").removeClass("nav__link--active");
    $("#token1 a").addClass("nav__link--active");
    $("#tokensPage .channel-feed__body").css("display","none");
    $("#token1content").css("display","block");
});
$("#token2").click(function()
{
    $("#tokensPage .nav-section a").removeClass("nav__link--active");
    $("#token2 a").addClass("nav__link--active");
    $("#tokensPage .channel-feed__body").css("display","none");
    $("#token2content").css("display","block");
});
$("#token3").click(function()
{
    $("#tokensPage .nav-section a").removeClass("nav__link--active");
    $("#token3 a").addClass("nav__link--active");
    $("#tokensPage .channel-feed__body").css("display","none");
    $("#token3content").css("display","block");
});
$("#token4").click(function()
{
    $("#tokensPage .nav-section a").removeClass("nav__link--active");
    $("#token4 a").addClass("nav__link--active");
    $("#tokensPage .channel-feed__body").css("display","none");
    $("#token4content").css("display","block");
});
$("#token5").click(function()
{
    $("#tokensPage .nav-section a").removeClass("nav__link--active");
    $("#token5 a").addClass("nav__link--active");
    $("#tokensPage .channel-feed__body").css("display","none");
    $("#token5content").css("display","block");
});
$("#token6").click(function()
{
    $("#tokensPage .nav-section a").removeClass("nav__link--active");
    $("#token6 a").addClass("nav__link--active");
    $("#tokensPage .channel-feed__body").css("display","none");
    $("#token6content").css("display","block");
});
$("#token7").click(function()
{
    $("#tokensPage .nav-section a").removeClass("nav__link--active");
    $("#token7 a").addClass("nav__link--active");
    $("#tokensPage .channel-feed__body").css("display","none");
    $("#token7content").css("display","block");
});
$("#token8").click(function()
{
    $("#tokensPage .nav-section a").removeClass("nav__link--active");
    $("#token8 a").addClass("nav__link--active");
    $("#tokensPage .channel-feed__body").css("display","none");
    $("#token8content").css("display","block");
});
function transferToken()
{
	var investorID=prompt("Enter the User ID of the investor to whom you are intending to share:");
	var noToShare=parseInt(prompt("Enter the number of tokens you intend to share:"));
	if(!userids.includes(investorID) || ideatorsList.includes(investorID) || investorID=="ADMIN")
	{
		alert("Invalid User ID!");
		return;
	}
	if(investorInfo.investments<noToShare)
	{
		alert("Insufficient Tokens");
		return;
	}
	try
	{
		async function sendTokens()
		{
			try
			{
				window.contract = await new web3.eth.Contract(abi4, contractAddress4);
			}
			catch(err)
			{
				alert(err.message);
				return;
			}
			web3.eth.getAccounts().then(function(acc){
				accounts = acc;
				window.contract.methods.transferTokens(window.sessionStorage.getItem("username"),investorID,noToShare).send({from: accounts[0], gas: 4000000}, function(err, result) {
					if(err)
					{
						alert(err);
					}
				}).on("receipt",function(res){
					if(res.events.tokensShared.returnValues.success=="YES")
					{
						alert("Transfer Successful");
						window.location.reload();
					}
					else
					{
						alert("Failed to transfer!");
					}
				});
			});
		}
		sendTokens();
	}
	catch(err)
	{
		alert(err.message);
		return;
	}
}