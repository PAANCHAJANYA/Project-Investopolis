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
		"name": "registerevent",
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
				"name": "pwd",
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
						"internalType": "string",
						"name": "password",
						"type": "string"
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
var contractAddress = "0x1d86871418907b1D16591785a29fEF00A5350d66";
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
var contractAddress2 = "0x8560e505582B0EAB45e4767CC49088D4884A03f8";
var abi3 = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
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
			}
		],
		"name": "sharesShared",
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
		"name": "tokensShared",
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
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
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
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
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
				"internalType": "struct platform.Profile",
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
			}
		],
		"name": "getInvestor",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "userid",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "investments",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "activation",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "remaining",
						"type": "uint256"
					}
				],
				"internalType": "struct platform.InvestorProfile",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
			}
		],
		"name": "invest",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
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
				"internalType": "struct platform.Profile[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
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
		"name": "totalSupply",
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
			}
		],
		"name": "transfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
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
		"stateMutability": "payable",
		"type": "receive"
	}
];
var contractAddress3 = "0x699716ce8324cd228b204427d9A48227f9C6eDa2";
$(".segment-topbar__overline").html("Wallet Address: "+window.sessionStorage.getItem("walletAddress"));
$(".app-header__anchor").click(function()
{
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#homePage").css("display", "block");
    $("#homePage .nav-section a").removeClass("nav__link--active");
    $("#homePage .channel-feed__body").css("display","none");
    $("#blockchainNetwork").css("display","block");
});
$(".homeButton").click(function()
{
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#homePage").css("display", "block");
    $("#homePage .nav-section a").removeClass("nav__link--active");
    $("#homePage .channel-feed__body").css("display","none");
    $("#blockchainNetwork").css("display","block");
});
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
                transactionHTML+=  `<div style="display:flex;color:#E6455C;">Transaction `+indx+`:<span style="margin-left:auto;color:#fed33f;">`+itr+`</span></div>`
            });
            $("#block"+blockNumber+"content").html(`
                <div class="message">
                    <div class="message__body">
                        <div>
							<div style="display:flex;color:#E6455C;">Block Number:<span style="margin-left:auto;color:#fed33f;">`+data.number+`</span></div>
                            <div style="display:flex;color:#E6455C;">Block Hash:<span style="margin-left:auto;color:#fed33f;">`+data.hash+`</span></div>
                            <div style="display:flex;color:#E6455C;">Parent Hash:<span style="margin-left:auto;color:#fed33f;">`+data.parentHash+`</span></div>
                            <div style="display:flex;color:#E6455C;">Block Size:<span style="margin-left:auto;color:#fed33f;">`+data.size+`</span></div>
                            <div style="display:flex;color:#E6455C;">Gas Limit:<span style="margin-left:auto;color:#fed33f;">`+data.gasLimit+`</span></div>
							<div style="display:flex;color:#E6455C;margin-bottom:32px;">Gas Used:<span style="margin-left:auto;color:#fed33f;">`+data.gasUsed+`</span></div>
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
}
renderBlockInfo();
var messagesCount=0;
var othermessageids=[];
var userid;
var retrievedMessages;
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
        $(".username").html(userid);
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
                    for(itr=retrievedMessages.length-1;itr>=0;itr--)
                    {
                        ele = retrievedMessages[itr];
                        if(ele.viewedby!="" && othermessageids.includes("ADMIN"))
                        {
                            var sno = othermessageids.findIndex((element) => element == "ADMIN");
                            sno++;
                            $("#message"+sno+"content").append(
                                `<div class="message">
                                    <div class="message__body">
                                        <div>`+ele.message+`</div>
                                    </div>
                                    <div class="message__footer">
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
                                    <div class="message">
                                        <div class="message__body">
                                            <div>`+ele.message+`</div>
                                        </div>
                                        <div class="message__footer">
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
                            }
                            othermessageids.push("ADMIN");
                            messagesCount++;
                        }
                        else if(ele.senderID==userid && othermessageids.includes(ele.receiverID))
                        {
                            var sno = othermessageids.findIndex((element) => element == ele.receiverID);
                            sno++;
                            $("#message"+sno+"content").append(
                                `<div class="message">
                                    <div class="message__body" style="color:#FF6670;border:1px solid #C73848;">
                                        <div>`+ele.message+`</div>
                                    </div>
                                    <div class="message__footer" style="color:#FF6670;">
                                        <span class="message__authoring">You</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
                                    </div>
                                </div>`);
                        }
                        else if(ele.receiverID==userid && othermessageids.includes(ele.senderID))
                        {
                            var sno = othermessageids.findIndex((element) => element == ele.senderID);
                            sno++;
                            $("#message"+sno+"content").append(
                                `<div class="message">
                                    <div class="message__body">
                                        <div>`+ele.message+`</div>
                                    </div>
                                    <div class="message__footer">
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
                                    <div class="message">
                                        <div class="message__body" style="color:#FF6670;border:1px solid #C73848;">
                                            <div>`+ele.message+`</div>
                                        </div>
                                        <div class="message__footer" style="color:#FF6670;">
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
                                    <div class="message">
                                        <div class="message__body">
                                            <div>`+ele.message+`</div>
                                        </div>
                                        <div class="message__footer">
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
var userids;
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
$(".messagesButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#messagesPage").css("display", "block");
	$("#messagesPage .nav-section a").removeClass("nav__link--active");
    if(messagesCount>0)
    {
        $("#message1 a").addClass("nav__link--active");
        $("#messagesPage .channel-feed__body").css("display","none");
        $("#message1content").css("display","block");
        appendTo = "#message1content";
        towhomid = $("#message1 .conversation-link__element").html();
    }
});
var suggestionhovered = false;
$("#messagesPage .form-search input").on("input",function()
{
    if(($("#messagesPage .form-search input").val().length)>0)
    {
        $("#messagesPage .useridslist").css("display","block");
        var filtereduserids = userids.filter(name => name.includes($("#messagesPage .form-search input").val().toUpperCase()));
        if(filtereduserids.length>=5)
        {
            filtereduserids = filtereduserids.slice(0,5);
        }
        filtereduserids.push("ADMIN");
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
		});
		$("#messagesPage .nav-section a").removeClass("nav__link--active");
		$("#message"+(messagesCount+1)+" a").addClass("nav__link--active");
		$("#messagesPage .channel-feed__body").css("display","none");
		$("#message"+(messagesCount+1)+"content").css("display","block");
		appendTo = "#message"+(messagesCount+1)+"content";
		towhomid = ele.innerHTML;
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
	}
}
$(".form-search input").blur(function()
{
	if(!suggestionhovered)
	{
		$("#messageMarker .useridslist").css("display","none");
	}
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
                window.contract.methods.send(towhomid,"",userid,msg).send({from: accounts[0], gas: 4000000}, function(err, result) {
                    if(err)
                    {
                        alert(err);
                    }
                }).on("receipt",function(res){
                    if(res.events.messagesent.returnValues.success=="YES")
					{
						$(appendTo).append(`
                        <div class="message">
                            <div class="message__body" style="color:#FF6670;border:1px solid #C73848;">
                                <div>`+msg+`</div>
                            </div>
                            <div class="message__footer" style="color:#FF6670;">
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
function shareStock()
{
	var fromID = window.sessionStorage.getItem("username");
	var toID;
	if(towhomid!==null && towhomid!="ADMIN" && !ideatorsList.includes(towhomid))
	{
		toID = towhomid;
	}
	else
	{
		alert("Cannot Share Stocks");
		return;
	}
	var ideatorID=prompt("Enter the user ID of the ideator whose shares you have bought and are intending to share:");
	var noToShare=parseInt(prompt("Enter the number of shares you intend to share:"));
	if(!ideatorsList.includes(ideatorID))
	{
		alert("Invalid Ideator ID");
		return;
	}
	for(i=0;i<ideatorInfo.length;i++)
    {
        if(ideatorInfo[i].userid==ideatorID)
        {
			if(ideatorInfo[i].investors.includes(window.sessionStorage.getItem("username")))
            {
                var sharesBought = 0;
                var indx = ideatorInfo[i].investors.findIndex((element) => element == window.sessionStorage.getItem("username"));
                var mv = ((parseInt(ideatorInfo[i].assets[ideatorInfo[i].assets.length-1])-parseInt(ideatorInfo[i].liabilities[ideatorInfo[i].liabilities.length-1]))/parseInt(ideatorInfo[i].shares));
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
					async function sendStock()
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
						web3.eth.getAccounts().then(function(acc){
							accounts = acc;
							window.contract.methods.transfer(ideatorID,toID,fromID,noToShare, mv).send({from: accounts[0], gas: 4000000}, function(err, result) {
								if(err)
								{
									alert(err);
								}
							}).on("receipt",function(res){
								if(res.events.sharesShared.returnValues.success=="YES")
								{
									alert("Transfer Successful");
									window.location.reload();
								}
								else
								{
									alert("Failed to share the stocks!");
								}
							});
						});
					}
					sendStock();
				}
				catch(err)
				{
					alert(err.message);
					return;
				}
				break;
			}
			else
			{
				alert("You are not an investor to that ideator");
				return;
			}
		}
	}
}
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
				window.contract = await new web3.eth.Contract(abi3, contractAddress3);
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
var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt,{expressionsTopbar:false, expressions: false, keypad:false, settingsMenu: false, invertedColors:true});
var investOn = "";
var ideatorsCount=0;
var otherideatorids = [];
var ideatorInfo;
var investorInfo;
var ideatorsList = [];
try
{
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
                    expenditure+=(parseInt(ideatorInfo[i].sharesbought[indx][itr])*parseInt(ideatorInfo[i].boughtFor[indx][itr]));
                }
                var profit = (mv*sharesBought)-(expenditure);
                var profitPercent = (profit/expenditure)*100;
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
                    </div>`
                );
                $("#ideator"+(ideatorsCount+1)).click(function()
                {
                    var id = this.id;
                    $("#myProfilePage .nav-section a").removeClass("nav__link--active");
                    $("#"+id+" a").addClass("nav__link--active");
                    $("#myProfilePage .channel-feed__body").css("display","none");
                    $("#"+id+"content").css("display","block");
                    investOn = $("#"+id+" .channel-link__element").html();
					$("#pad-attention").css("display","none");
					$("#pad-graph").css("display","block");
					calculator.setMathBounds({left: 0,right: 5,bottom: 0,top: parseInt($("#"+id+"max").html().trim())});
					calculator.setExpression({id: 'graph1',latex: $("#"+id+"graph").html().trim(), lineWidth:1, points: true, lines: true, pointStyle: Desmos.Styles.POINT, lineStyle: Desmos.Styles.SOLID,color: "#012cc0"});
                });
                ideatorsCount++;
            }
        }
    }    
    getIdeatorsInfo();
}
catch(err)
{
    alert(err.message);
}
try
{
    async function getInvestorInfo()
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
        investorInfo = await window.contract.methods.getInvestor(window.sessionStorage.getItem("username")).call();
		if(investorInfo.activation=="1")
		{
			$("#uruToken").addClass("button__active");
		}
		else if(investorInfo.activation=="2")
		{
			$("#vibranToken").addClass("button__active");
		}
		else if(investorInfo.activation=="3")
		{
			$("#kryptonToken").addClass("button__active");
		}
		else if(investorInfo.activation=="4")
		{
			$("#adamantToken").addClass("button__active");
		}
		$("#tokenCount").append(`
		<span class="conversation-link__element" style="margin-left:auto;">
			<span class="badge">`+investorInfo.investments+`</span>
		</span>`);
    }
    getInvestorInfo();
}
catch(err)
{
    alert(err.message);
}
var ideatorsuggestionhovered = false;
$("#myProfilePage .form-search input").on("input",function()
{
    if(($("#myProfilePage .form-search input").val().length)>0)
    {
        $("#myProfilePage .ideatoridslist").css("display","block");
        var filtereduserids = ideatorsList.filter(name => name.includes($("#myProfilePage .form-search input").val().toUpperCase()));
        if(filtereduserids.length>=5)
        {
            filtereduserids = filtereduserids.slice(0,5);
        }
        $("#myProfilePage .ideatoridslist").html("");
        filtereduserids.forEach(ele => {
            $("#myProfilePage .ideatoridslist").append("<li class='ideatorSearchSuggestions' onclick='ideatorSearchSuggestionClicked(this);'>"+ele+"</li>");
        });
    }
    else
    {
        $("#myProfilePage .ideatoridslist").css("display","none");
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
function ideatorSearchSuggestionClicked(ele)
{
	$("#myProfilePage .ideatoridslist").css("display","none");
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
                    </div>`
                );
                break;
            }
        }
		$("#ideator"+(ideatorsCount+1)).click(function()
		{
			var id = this.id;
			$("#myProfilePage .nav-section a").removeClass("nav__link--active");
			$("#"+id+" a").addClass("nav__link--active");
			$("#myProfilePage .channel-feed__body").css("display","none");
			$("#"+id+"content").css("display","block");
			investOn = $("#"+id+" .channel-link__element").html();
			$("#pad-attention").css("display","none");
			$("#pad-graph").css("display","block");
			calculator.setMathBounds({left: 0,right: 5,bottom: 0,top: parseInt($("#"+id+"max").html().trim())});
			calculator.setExpression({id: 'graph1',latex: $("#"+id+"graph").html().trim(), lineWidth:1, points: true, lines: true, pointStyle: Desmos.Styles.POINT, lineStyle: Desmos.Styles.SOLID,color: "#012cc0"});
		});
		$("#myProfilePage .nav-section a").removeClass("nav__link--active");
		$("#ideator"+(ideatorsCount+1)+" a").addClass("nav__link--active");
		$("#myProfilePage .channel-feed__body").css("display","none");
		$("#ideator"+(ideatorsCount+1)+"content").css("display","block");
		investOn = ele.innerHTML;
		$("#pad-attention").css("display","none");
		$("#pad-graph").css("display","block");
		calculator.setMathBounds({left: 0,right: 5,bottom: 0,top: parseInt($("#ideator"+(ideatorsCount+1)+"max").html().trim())});
		calculator.setExpression({id: 'graph1',latex: $("#ideator"+(ideatorsCount+1)+"graph").html().trim(), lineWidth:1, points: true, lines: true, pointStyle: Desmos.Styles.POINT, lineStyle: Desmos.Styles.SOLID,color: "#012cc0"});
		ideatorsCount++;
	}
	else
	{
		var id = otherideatorids.findIndex((element) => element == ele.innerHTML);
		id++;
		$("#myProfilePage .nav-section a").removeClass("nav__link--active");
		$("#ideator"+id+" a").addClass("nav__link--active");
		$("#myProfilePage .channel-feed__body").css("display","none");
		$("#ideator"+id+"content").css("display","block");
		$("#pad-attention").css("display","none");
		$("#pad-graph").css("display","block");
		calculator.setMathBounds({left: 0,right: 5,bottom: 0,top: parseInt($("#ideator"+id+"max").html().trim())});
		calculator.setExpression({id: 'graph1',latex: $("#ideator"+id+"graph").html().trim(), lineWidth:1, points: true, lines: true, pointStyle: Desmos.Styles.POINT, lineStyle: Desmos.Styles.SOLID,color: "#012cc0"});
		investOn = $("#ideator"+id+" .channel-link__element").html();
	}
}
function tokenClicked(grade)
{
	if(investorInfo.activation==0)
	{
		if(grade==1 && investorInfo.investments<100)
		{
			alert("You are not eligible for this token");
			return;
		}
		else if(grade==2 && investorInfo.investments<50)
		{
			alert("You are not eligible for this token");
			return;
		}
		else if(grade==3 && investorInfo.investments<20)
		{
			alert("You are not eligible for this token");
			return;
		}
		else if(grade==4 && investorInfo.investments<10)
		{
			alert("You are not eligible for this token");
			return;
		}
		async function activate()
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
	else
	{
		alert("A token has already been activated");
	}
}
function investClicked()
{
    if(investOn!="")
    {

        async function investNow()
        {
            var buying=parseInt(prompt("Enter the number of shares you intend to buy:", "1"));
            for(i=0;i<ideatorInfo.length;i++)
            {
                if(ideatorInfo[i].userid==investOn)
                {
                    var marketValue = ((ideatorInfo[i].assets[ideatorInfo[i].assets.length-1]-ideatorInfo[i].liabilities[ideatorInfo[i].liabilities.length-1])/ideatorInfo[i].shares);
					if(ideatorInfo[i].sharesLeft>=buying && buying>=1)
                    {
						var fees=0.01;
						var activatedName = "";
						if(investorInfo.activation==1)
						{
							fees=0;
							activatedName = "URU";
						}
						else if(investorInfo.activation==2)
						{
							fees=0.002;
							activatedName = "VIBRAN";
						}
						else if(investorInfo.activation==3)
						{
							fees=0.005;
							activatedName = "KRYPTON";
						}
						else if(investorInfo.activation==4)
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
							var toPay = web3.utils.toWei(((buying*marketValue)+((buying*marketValue)*fees)).toString(), "ether");
                            accounts = acc;
                            window.contract.methods.invest(investOn,window.sessionStorage.getItem("username"),buying,marketValue).send({from: accounts[0], gas: 4000000, value:toPay}, function(err, result) {
                                if(err)
                                {
                                    alert(err);
                                }
                            }).on("receipt",function(res){
                                if(res.events.sharesBoughtEvent.returnValues.success=="YES")
                                {
                                    alert("Shares Bought Successfully!");
									/*$.post("https://app.useanvil.com/api/v1/fill/0CempfpE5JrI08j480GD.pdf",
									{
										"title": "SHARE DOCUMENT",
										"fontSize": 10,
										"textColor": "#333333",
										"data": {
										  "cast821cdff0754f11eda601c50c123a9dfc": buying*marketValue,
										  "cast9b8675a0754f11eda601c50c123a9dfc": accounts[0],
										  "castaed58b50754f11eda601c50c123a9dfc": window.sessionStorage.getItem("username"),
										  "castb47472b0754f11eda601c50c123a9dfc": buying,
										  "castc1b2cc60754f11eda601c50c123a9dfc": ideatorInfo[i].pv,
										  "castcbf5c060754f11eda601c50c123a9dfc": marketValue,
										  "castd54c3180754f11eda601c50c123a9dfc": investOn,
										  "castd9b9ebe0754f11eda601c50c123a9dfc": (new Date).toDateString(),
										  "caste3187350754f11eda601c50c123a9dfc": "Address",
										  "castea002e60754f11eda601c50c123a9dfc": {
											"num": "1234567890",
											"region": "US",
											"baseRegion": "US"
										  },
										  "castee727ca0754f11eda601c50c123a9dfc":activatedName 
										}
									}, function(data){
										console.log(data);
									});*/
									window.location.reload();
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
$("myProfilePage .form-search input").blur(function()
{
	if(!ideatorsuggestionhovered)
	{
		$("#ideatorMarker .ideatoridslist").css("display","none");
	}
});
$(".myProfileButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#myProfilePage").css("display", "block");
    $("#myProfilePage .nav-section a").removeClass("nav__link--active");
    $("#myProfilePage .channel-feed__body").css("display","none");
	$("#myProfilePage .pad__body").css("display","none");
    if(ideatorsCount>0)
    {
        $("#ideator1 a").addClass("nav__link--active");
        $("#ideator1content").css("display","block");
        investOn = $("#ideator1 .channel-link__element").html();
		$("#pad-attention").css("display","none");
		$("#pad-graph").css("display","block");
		calculator.setMathBounds({left: 0,right: 5,bottom: 0,top: parseInt($("#ideator1max").html().trim())});
		calculator.setExpression({id: 'graph1',latex: $("#ideator1graph").html().trim(), lineWidth:1, points: true, lines: true, pointStyle: Desmos.Styles.POINT, lineStyle: Desmos.Styles.SOLID,color: "#012cc0"});
    }
});
$("#token1").click(function()
{
    $("#myProfilePage .nav-section a").removeClass("nav__link--active");
    $("#token1 a").addClass("nav__link--active");
    $("#myProfilePage .channel-feed__body").css("display","none");
	$("#myProfilePage .pad__body").css("display","none");
    $("#token1content").css("display","block");
	$("#pad-attention").css("display","block");
    investOn="";
});
$("#token2").click(function()
{
    $("#myProfilePage .nav-section a").removeClass("nav__link--active");
    $("#token2 a").addClass("nav__link--active");
    $("#myProfilePage .channel-feed__body").css("display","none");
	$("#myProfilePage .pad__body").css("display","none");
    $("#token2content").css("display","block");
	$("#pad-attention").css("display","block");
    investOn="";
});
$("#token3").click(function()
{
    $("#myProfilePage .nav-section a").removeClass("nav__link--active");
    $("#token3 a").addClass("nav__link--active");
    $("#myProfilePage .channel-feed__body").css("display","none");
	$("#myProfilePage .pad__body").css("display","none");
    $("#token3content").css("display","block");
	$("#pad-attention").css("display","block");
    investOn="";
});
$("#token4").click(function()
{
    $("#myProfilePage .nav-section a").removeClass("nav__link--active");
    $("#token4 a").addClass("nav__link--active");
    $("#myProfilePage .channel-feed__body").css("display","none");
	$("#myProfilePage .pad__body").css("display","none");
    $("#token4content").css("display","block");
	$("#pad-attention").css("display","block");
    investOn="";
});
$(".developersButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "block");
    $("#developersPage .nav-section a").removeClass("nav__link--active");
	$("#rajendraButton a").addClass("nav__link--active");
    $("#developersPage .card").css("display", "none");
    $("#rajendraProfile").css("display", "flex");
});
$("#rajendraButton").click(function()
{
    $("#developersPage .nav-section a").removeClass("nav__link--active");
    $("#rajendraButton a").addClass("nav__link--active");
    $("#developersPage .card").css("display", "none");
    $("#rajendraProfile").css("display", "flex");
});
$("#krishnaButton").click(function()
{
    $("#developersPage .nav-section a").removeClass("nav__link--active");
    $("#krishnaButton a").addClass("nav__link--active");
    $("#developersPage .card").css("display", "none");
    $("#krishnaProfile").css("display", "flex");
});
$("#karthikButton").click(function()
{
    $("#developersPage .nav-section a").removeClass("nav__link--active");
    $("#karthikButton a").addClass("nav__link--active");
    $("#developersPage .card").css("display", "none");
    $("#karthikProfile").css("display", "flex");
});
$("#deepakButton").click(function()
{
    $("#developersPage .nav-section a").removeClass("nav__link--active");
    $("#deepakButton a").addClass("nav__link--active");
    $("#developersPage .card").css("display", "none");
    $("#deepakProfile").css("display", "flex");
});
$("#manojButton").click(function()
{
    $("#developersPage .nav-section a").removeClass("nav__link--active");
    $("#manojButton a").addClass("nav__link--active");
    $("#developersPage .card").css("display", "none");
    $("#manojProfile").css("display", "flex");
});
$(".logout").click(function()
{
    window.sessionStorage.clear();
    window.location="index.html";
});