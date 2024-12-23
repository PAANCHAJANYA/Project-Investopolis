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
var userids;
var messagesCount=0;
var othermessageids=[];
var userid;
var metamask;
var retrievedMessages;
var ideatorInfo;

/*Header*/

$(".app-header__anchor").click(function()
{
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#homePage").css("display", "block");
    $("#homePage .nav-section a").removeClass("nav__link--active");
    $("#homePage .channel-feed__body").css("display","none");
    $("#blockchainNetwork").css("display","block");
});
$(".homeButton").click(function()
{
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#homePage").css("display", "block");
    $("#homePage .nav-section a").removeClass("nav__link--active");
    $("#homePage .channel-feed__body").css("display","none");
    $("#blockchainNetwork").css("display","block");
});
$(".messagesButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#messagesPage").css("display", "block");
	$("#messagesPage .nav-section a").removeClass("nav__link--active");
    if(messagesCount>0)
    {
        $("#message1 a").addClass("nav__link--active");
        $("#messagesPage .channel-feed__body").css("display","none");
        $("#message1content").css("display","block");
        appendTo = "#message1content";
        towhomid = $("#message1 .conversation-link__element").html();
		var elem=document.getElementById("message1content");
		elem.scrollTop = elem.scrollHeight;
		$(".nav-mobile").html($("#message1 a .conversation-link__element").html());
    }
});
$(".myProfileButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "block");
    $("#myProfilePage .nav-section a").removeClass("nav__link--active");
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
		if (!error)
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
		getIdeatorInfo();
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
                    retrievedMessages = await window.contract.methods.retrieve(userid,"ideator").call();
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
								$(".nav-mobile").html($("#"+id+" a .conversation-link__element").html());
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
								$(".nav-mobile").html($("#"+id+" a .conversation-link__element").html());
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
								$(".nav-mobile").html($("#"+id+" a .conversation-link__element").html());
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
								$(".nav-mobile").html($("#"+id+" a .conversation-link__element").html());
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
								$(".nav-mobile").html($("#"+id+" a .conversation-link__element").html());
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
								$(".nav-mobile").html($("#"+id+" a .conversation-link__element").html());
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
			$(".nav-mobile").html($("#"+id+" a .conversation-link__element").html());
		});
		$("#messagesPage .nav-section a").removeClass("nav__link--active");
		$("#message"+(messagesCount+1)+" a").addClass("nav__link--active");
		$("#messagesPage .channel-feed__body").css("display","none");
		$("#message"+(messagesCount+1)+"content").css("display","block");
		appendTo = "#message"+(messagesCount+1)+"content";
		towhomid = ele.innerHTML;
		var elem=document.getElementById("message"+(messagesCount+1)+"content");
		elem.scrollTop = elem.scrollHeight;
		$(".nav-mobile").html($("#message"+(messagesCount+1)+" a .conversation-link__element").html());
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
		$(".nav-mobile").html($("#message"+id+" a .conversation-link__element").html());
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

/*Profile*/

async function getIdeatorInfo()
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
    ideatorInfo = await window.contract.methods.getIdeator(window.sessionStorage.getItem("username")).call();
    if(ideatorInfo.name=="")
    {
        $("#profileInfo").html(`
        <div class="message">
            <div class="message__body">
                <div>
                    <div style="display:flex;color:#E6455C;">Name:<span id="ideatorName" contenteditable="false" maxlength="70" style="max-width:50%;margin-left:auto;color:#fed33f;">Not Named Yet</span></div>
                    <div style="display:flex;color:#E6455C;margin-bottom:32px;">About:<span id="ideatorAbout" contenteditable="false" maxlength="250" style="max-width:50%;margin-left:auto;color:#fed33f;">Add a small description about your start-up</span></div>
                    <div style="display:flex;color:#E6455C;">Assets Value:<span id="ideatorAssets" contenteditable="false" maxlength="50" style="max-width:50%;margin-left:auto;color:#fed33f;">Mention the asset value based on the valuation</span></div>
                    <div style="display:flex;color:#E6455C;">Liabilities Value:<span id="ideatorLiabilities" contenteditable="false" maxlength="50" style="max-width:50%;margin-left:auto;color:#fed33f;">Mention the liability value based on the valuation</span></div>
                    <div style="display:flex;color:#E6455C;">Face value of the Equity Shares:<span id="ideatorPV" contenteditable="false" maxlength="50" style="max-width:50%;margin-left:auto;color:#fed33f;">Mention the face value of each share</span></div>
                    <div style="display:flex;color:#E6455C;">Current Market Value:<span class="ideatorMV" style="max-width:50%;margin-left:auto;color:#fed33f;">Current Market Value will be displayed here</span></div>
                    <div style="display:flex;color:#E6455C;">No of Shares:<span id="ideatorShares" contenteditable="false" maxlength="50" style="max-width:50%;margin-left:auto;color:#fed33f;">How many shares?</span></div>
                </div>
            </div>
            <div class="message__footer">
                <span class="message__authoring">Edit the Details using the Pencil Icon</span>
            </div>
        </div>`);
    }
    else
    {
        var pointsString = "";
        $("#profileInfo").html(`
        <div class="message">
            <div class="message__body">
                <div>
                    <div style="display:flex;color:#E6455C;">Name:<span id="ideatorName" maxlength="70" contenteditable="false" style="max-width:50%;margin-left:auto;color:#fed33f;">`+ideatorInfo.name+`</span></div>
                    <div style="display:flex;color:#E6455C;margin-bottom:32px;">About:<span maxlength="250" id="ideatorAbout" contenteditable="false" style="max-width:50%;margin-left:auto;color:#fed33f;">`+ideatorInfo.about+`</span></div>
                    <div style="display:flex;color:#E6455C;">Assets Value:<span id="ideatorAssets" maxlength="50" contenteditable="false" style="max-width:50%;margin-left:auto;color:#fed33f;">₹`+ideatorInfo.assets[ideatorInfo.assets.length-1]+`</span></div>
                    <div style="display:flex;color:#E6455C;">Liabilities Value:<span id="ideatorLiabilities" maxlength="50" contenteditable="false" style="max-width:50%;margin-left:auto;color:#fed33f;">₹`+ideatorInfo.liabilities[ideatorInfo.liabilities.length-1]+`</span></div>
                    <div style="display:flex;color:#E6455C;">Face value of the Equity Shares:<span id="ideatorPV" maxlength="50" contenteditable="false" style="max-width:50%;margin-left:auto;color:#fed33f;">₹`+ideatorInfo.pv+`</span></div>
                    <div style="display:flex;color:#E6455C;">Current Market Value:<span class="ideatorMV" style="max-width:50%;margin-left:auto;color:#fed33f;">₹`+((ideatorInfo.assets[ideatorInfo.assets.length-1]-ideatorInfo.liabilities[ideatorInfo.liabilities.length-1])/ideatorInfo.shares)+`</span></div>
                    <div style="display:flex;color:#E6455C;">No of Shares:<span id="ideatorShares" maxlength="50" style="max-width:50%;margin-left:auto;color:#fed33f;">`+ideatorInfo.shares+`</span></div>
                </div>
            </div>
            <div class="message__footer">
                <span class="message__authoring">Last updated on - </span>`+(new Date(ideatorInfo.timestamp[ideatorInfo.timestamp.length-1]*1000)).toDateString()+`
            </div>
        </div>`);
        for(i=1;i<=ideatorInfo.investors.length;i++)
        {
            var sharesBought = 0;
            for(itr=0;itr<ideatorInfo.sharesbought[i-1].length;itr++)
            {
                sharesBought+=parseInt(ideatorInfo.sharesbought[i-1][itr]);
            }
            $("#investorsList").append(`
            <li class="nav__item" id="investor`+i+`">
                <a class="nav__link" href="#">
                    <span class="channel-link conversation-link--unread">
                        <span class="channel-link__icon">#</span>
                        <span class="channel-link__element">`+ideatorInfo.investors[i-1]+`</span>
                        <span class="channel-link__element">
                            <span class="badge">`+sharesBought+`</span>
                        </span>
                    </span>
                </a>
            </li>`);
        }
    }
    $("span[maxlength]").on('keyup paste', function (event)
    {
        var cntMaxLength = parseInt($(this).attr('maxlength'));
        if ($(this).text().length >= cntMaxLength && event.keyCode != 8 && event.keyCode != 37 && event.keyCode != 38 && event.keyCode != 39 && event.keyCode != 40)
        {
            event.preventDefault();
            $(this).html(function(i, currentHtml) {return currentHtml.substring(0, cntMaxLength-1);});
        }
    });
    var maxValue=10;
    for(i=0;i<ideatorInfo.timestamp.length;i++)
    {
        if(i>0)
        {
            pointsString+=",";
        }
        k = ((ideatorInfo.assets[i]-ideatorInfo.liabilities[i])*(1/ideatorInfo.shares));
        if(maxValue<k)
        {
            maxValue = k;
        }
        pointsString+=`(`+(i+1)+`,`+k+`)`;
    }
    var elt = document.getElementById('calculator');
    var calculator = Desmos.GraphingCalculator(elt,{expressionsTopbar:false, expressions: false, keypad:false, settingsMenu: false, invertedColors:true});
    calculator.setMathBounds({left: 0,right: 5,bottom: 0,top: maxValue});
    calculator.setExpression({id: 'graph1',latex: pointsString, lineWidth:1, points: true, lines: true, pointStyle: Desmos.Styles.POINT, lineStyle: Desmos.Styles.SOLID,color: "#012cc0"});
}
var editClickedCount=0;
function editClicked()
{
    editClickedCount++;
    if(editClickedCount%2!=0 && ideatorInfo.timestamp.length==0)
    {
        $("#ideatorName").attr("contenteditable", "true");
        $("#ideatorAbout").attr("contenteditable", "true");
        $("#ideatorAssets").attr("contenteditable", "true");
        $("#ideatorLiabilities").attr("contenteditable", "true");
        $("#ideatorPV").attr("contenteditable", "true");
    }
    else if(editClickedCount%2!=0 && ideatorInfo.timestamp.length!=0)
    {
        $("#ideatorAbout").attr("contenteditable", "true");
        $("#ideatorAssets").attr("contenteditable", "true");
        $("#ideatorLiabilities").attr("contenteditable", "true");
    }
    else if(editClickedCount%2==0 && ideatorInfo.timestamp.length==0)
    {
		if(window.sessionStorage.getItem("loginMode")!=1)
        {
			alert("Login through your metamask wallet to perform this operation!");
			return;
		}
        $("#ideatorName").attr("contenteditable", "false");
        $("#ideatorAbout").attr("contenteditable", "false");
        $("#ideatorAssets").attr("contenteditable", "false");
        $("#ideatorLiabilities").attr("contenteditable", "false");
        $("#ideatorPV").attr("contenteditable", "false");
        if(/^-?\d+$/.test($("#ideatorAssets").html()) && /^-?\d+$/.test($("#ideatorLiabilities").html()) && /^-?\d+$/.test($("#ideatorPV").html()) && (parseInt($("#ideatorAssets").html().trim())-parseInt($("#ideatorLiabilities").html().trim()))>0)
        {
            $("#ideatorShares").html(((parseInt($("#ideatorAssets").html().trim())-parseInt($("#ideatorLiabilities").html().trim()))/parseInt($("#ideatorPV").html().trim())).toString());
            try
            {
                async function addIdeatorInfo()
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
                        window.contract.methods.addIdeator($("#ideatorName").html().trim(),window.sessionStorage.getItem("username"), $("#ideatorAbout").html().trim(),parseInt($("#ideatorAssets").html().trim()), parseInt($("#ideatorLiabilities").html().trim()), parseInt($("#ideatorPV").html().trim()),parseInt($("#ideatorShares").html().trim()),metamask).send({from: accounts[0], gas: 4000000}, function(err, result) {
                            if(err)
                            {
                                alert(err);
                            }
                        }).on("receipt",function(res){
                            if(res.events.infoupdated.returnValues.success=="YES")
                            {
                                alert("Successfully Updated Details");
                                window.location.reload();
                            }
                            else
                            {
                                alert("Failed to update the details!");
                            }
                        });
                    });
                }
                addIdeatorInfo();
            }
            catch(err)
            {
                alert(err.message);
                return;
            }
        }
        else
        {
            alert("Enter the details appropriately!");
        }
    }
    else if(editClickedCount%2==0 && ideatorInfo.timestamp.length!=0)
    {
		if(!$("#ideatorAssets").html().startsWith("₹"))
		{
			$("#ideatorAssets").html("₹"+$("#ideatorAssets").html());
		}
		if(!$("#ideatorLiabilities").html().startsWith("₹"))
		{
			$("#ideatorLiabilities").html("₹"+$("#ideatorLiabilities").html());
		}
        $("#ideatorAbout").attr("contenteditable", "false");
        $("#ideatorAssets").attr("contenteditable", "false");
        $("#ideatorLiabilities").attr("contenteditable", "false");
        if(/^-?\d+$/.test($("#ideatorAssets").html().substring(1)) && /^-?\d+$/.test($("#ideatorLiabilities").html().substring(1)))
        {
            try
            {
                async function updateIdeatorInfo()
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
                        window.contract.methods.updateIdeator(window.sessionStorage.getItem("username"), $("#ideatorAbout").html().trim(),parseInt($("#ideatorAssets").html().trim().substring(1)), parseInt($("#ideatorLiabilities").html().trim().substring(1))).send({from: accounts[0], gas: 4000000}, function(err, result) {
                            if(err)
                            {
                                alert(err);
                            }
                        }).on("receipt",function(res){
                            if(res.events.infoupdated.returnValues.success=="YES")
                            {
                                alert("Successfully Updated Details");
                                window.location.reload();
                            }
                            else if(res.events.infoupdated.returnValues.success=="NO")
                            {
                                alert("Failed to update the details!");
                            }
                        });
                    });
                }
                updateIdeatorInfo();
            }
            catch(err)
            {
                alert(err.message);
                return;
            }
        }
        else
        {
            alert("Enter the details appropriately!");
        }
    }
}