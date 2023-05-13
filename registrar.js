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
var userids;
var unverifiedRegistrations;
var landCount=0;
var rdnCenter = {};
var messagesCount=0;
var othermessageids=[];
var retrievedMessages;
var initialized = false;
var map;
var poly;
var path;
var markers = [];
var polyPath = [];

/*Header*/

$(".app-header__anchor").click(function()
{
    $("#messagesPage").css("display", "none");
    $("#profilePage").css("display", "none");
    $("#verificationPage").css("display", "block");
    $("#verificationPage .nav-section a").removeClass("nav__link--active");
	$("#verificationPage .channel-feed__body").css("display","none");
	if(landCount>0)
	{
		$("#property1 a").addClass("nav__link--active");
		$("#property1verification").css("display","block");
	}
});
$(".verificationButton").click(function()
{
    $("#messagesPage").css("display", "none");
    $("#profilePage").css("display", "none");
    $("#verificationPage").css("display", "block");
    $("#verificationPage .nav-section a").removeClass("nav__link--active");
	$("#verificationPage .channel-feed__body").css("display","none");
	if(landCount>0)
	{
		$("#property1 a").addClass("nav__link--active");
		$("#property1verification").css("display","block");
	}
});
$(".messagesButton").click(function()
{
    $("#verificationPage").css("display", "none");
	$("#profilePage").css("display", "none");
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
$(".profileButton").click(function()
{
    $("#verificationPage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#profilePage").css("display", "block");
});
$(".logout").click(function()
{
    window.sessionStorage.clear();
    window.location="index.html";
});
$(".segment-topbar__overline").html("Wallet Address: "+window.sessionStorage.getItem("walletAddress"));

/*Verification*/

function previousVerification()
{
	var previousid = "property"+(parseInt($('#verificationPage .app-a .nav__link--active').parent()[0].id.substring(8))-1);
	if($("#"+previousid).length==0)
	{
		return;
	}
	$("#verificationPage .nav-section a").removeClass("nav__link--active");
	$("#"+previousid+" a").addClass("nav__link--active");
	$("#verificationPage .channel-feed__body").css("display","none");
	$("#"+previousid+"verification").css("display","block");
}
function nextVerification()
{
	var nextID = "property"+(parseInt($('#verificationPage .app-a .nav__link--active').parent()[0].id.substring(8))+1);
	if($("#"+nextID).length==0)
	{
		return;
	}
	$("#verificationPage .nav-section a").removeClass("nav__link--active");
	$("#"+nextID+" a").addClass("nav__link--active");
	$("#verificationPage .channel-feed__body").css("display","none");
	$("#"+nextID+"verification").css("display","block");
}
function renderMap(id)
{
	var c = rdnCenter[$("#"+id).attr("data-rdn")];
	var myLatLng = {lat: c[0], lng: c[1]};
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
	$.get("https://ipfs.io/ipfs/"+ele.getAttribute("data-path"), function(data)
	{
		download(data, "SaleDeed.pdf", "application/pdf");
	});
}
async function getunverifiedregistrations()
{
	if(!initialized)
	{
		return;
	}
    try
    {
        window.contract = await new web3.eth.Contract(abi5, contractAddress5);
    }
    catch(err)
    {
        alert(err.message);
        return;
    }
    unverifiedRegistrations = await window.contract.methods.unverifiedLands().call();
	for(itr=0;itr<unverifiedRegistrations.length;itr++)
	{
		ele = unverifiedRegistrations[itr];
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
		var point = turf.point(rdnCenter[ele.RDN]);
		var coord = JSON.parse($("#registrarLatLng").val());
		var polygonArr = [];
		for(var j=0;j<coord.length;j++)
		{
			polygonArr.push([coord[j].lat, coord[j].lng]);
		}
		var polygon = turf.lineToPolygon(turf.lineString(polygonArr));
		if(!turf.booleanPointInPolygon(point, polygon))
		{
			continue;
		}
		if(!ele.pendingTransfer)
		{
			$("#pendingRegistrationsList").append(
				`<li class="nav__item" id="property`+(landCount+1)+`">
					<a class="nav__link" href="#">
						<span class="channel-link">
							<span class="channel-link__icon">#</span>
							<span class="channel-link__element">`+ele.RDN+`</span>
						</span>
					</a>
				</li>`);
		}
		else
		{
			$("#pendingTransfersList").append(
				`<li class="nav__item" id="property`+(landCount+1)+`">
					<a class="nav__link" href="#">
						<span class="channel-link">
							<span class="channel-link__icon">#</span>
							<span class="channel-link__element">`+ele.RDN+`</span>
						</span>
					</a>
				</li>`);
		}
		$("#property"+(landCount+1)).click(function()
		{
			var id = this.id;
			$("#verificationPage .nav-section a").removeClass("nav__link--active");
			$("#"+id+" a").addClass("nav__link--active");
			$("#verificationPage .channel-feed__body").css("display","none");
			$("#"+id+"verification").css("display","block");
			renderMap("ownedMap"+id.slice(8));
		});
		var toAdd="";
		var ownerContent = "<div>";
		if(landCount>=1)
		{
			toAdd=`style="display:none;"`;
		}
		for(var itr2=0;itr2<ele.userids.length;itr2++)
		{
			ownerContent += `
			<div style="display:flex;color:#E6455C;">User ID:<span style="margin-left:auto;color:#fed33f;text-transform:uppercase;">`+ele.userids[itr2]+`</span></div>
			<div style="display:flex;color:#E6455C;">Full Name:<span style="margin-left:auto;color:#fed33f;">`+ele.names[itr2]+`</span></div>
			<div style="display:flex;color:#E6455C;">Wallet Address:<span style="margin-left:auto;color:#fed33f;">`+ele.home[itr2]+`</span></div>
			<div style="display:flex;color:#E6455C;margin-bottom:15px;">Current Residence:<span style="margin-left:auto;color:#fed33f;">`+ele.metamaskaddress[itr2]+`</span></div>`;
		}
		if(ele.pendingTransfer)
		{
			for(var itr3=0;itr3<ele.new_userids.length;itr3++)
			{
				ownerContent += `
				<div style="display:flex;color:#E6455C;">Claimant User ID:<span style="margin-left:auto;color:#fed33f;text-transform:uppercase;">`+ele.new_userids[itr3]+`</span></div>
				<div style="display:flex;color:#E6455C;">Claimant Full Name:<span style="margin-left:auto;color:#fed33f;">`+ele.new_names[itr3]+`</span></div>
				<div style="display:flex;color:#E6455C;">Claimant Wallet Address:<span style="margin-left:auto;color:#fed33f;">`+ele.new_home[itr3]+`</span></div>
				<div style="display:flex;color:#E6455C;margin-bottom:15px;">Claimant Current Residence:<span style="margin-left:auto;color:#fed33f;">`+ele.new_metamaskaddress[itr3]+`</span></div>`;
			}
		}
		ownerContent+=
		`<div style="display:flex;color:#E6455C;">Regular Document Number (RDN):<span style="margin-left:auto;color:#fed33f;overflow-wrap: anywhere;">`+ele.RDN+`</span></div>
		<div style="display:flex;color:#E6455C;">Property Details:<span style="margin-left:auto;color:#fed33f;overflow-wrap: anywhere;">`+ele.details+`</span></div>
		<div style="display:flex;color:#E6455C;">Location:<div class="owned-map-canvas" id="ownedMap`+(landCount+1)+`" style="width:60%;min-width:200px;margin-left: auto;position: relative;overflow: hidden;height: 200px;" data-coordinates='`+ele.coordinates+`' data-rdn="`+ele.RDN+`"></div></div>
		<div style="display:flex;color:#E6455C;margin-bottom:20px;">Sale Deed Document Link:<span style="margin-left:auto;color:#fed33f;overflow-wrap: anywhere;"><a onclick="downloadPdf(this);" data-path="`+ele.saledeed+`" href="#" style="text-decoration:underline;cursor:pointer;">Download the Sale Deed</a></span></div>`;
		if(ele.pendingTransfer)
		{
			ownerContent+=
				`<div style="display:flex;color:#E6455C;margin-bottom:20px;">New Sale Deed Document Link:<span style="margin-left:auto;color:#fed33f;overflow-wrap: anywhere;"><a onclick="downloadPdf(this);" data-path="`+ele.new_saledeed+`" href="#" style="text-decoration:underline;cursor:pointer;">Download the New Sale Deed</a></span></div>
			</div>
			<div style="display:flex;justify-content:center;margin-right:32px;">
				<button onclick="acceptTransfer('`+ele.RDN+`');" class="AcceptRejectButton" style="margin-right:30px;" type="button">Accept</button>
				<button onclick="rejectTransfer('`+ele.RDN+`');" class="AcceptRejectButton" type="button">Reject</button>
			</div>`;
		}
		else
		{
			ownerContent+=
			`</div>
			<div style="display:flex;justify-content:center;margin-right:32px;">
				<button onclick="acceptRegistration('`+ele.RDN+`');" class="AcceptRejectButton" style="margin-right:30px;" type="button">Accept</button>
				<button onclick="rejectRegistration('`+ele.RDN+`');" class="AcceptRejectButton" type="button">Reject</button>
			</div>`;
		}
		$("#registrationMarker").before(
			`
			<div class="channel-feed__body" id="property`+(landCount+1)+`verification" `+toAdd+`>
				<div class="message">
					<div class="message__body">
						`+ownerContent+`
					</div>
					<div class="message__footer">
						<span class="message__authoring">Registration Verification</span>
					</div>
				</div>
			</div>`
		);
		landCount++;
	}
	$("#verificationPage .nav-section a").removeClass("nav__link--active");
	$("#verificationPage .channel-feed__body").css("display","none");
	if(landCount>0)
	{
		$("#property1 a").addClass("nav__link--active");
		$("#property1verification").css("display","block");
		renderMap("ownedMap1");
	}
}
async function acceptRegistration(rd)
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
	web3.eth.getAccounts().then(function(acc){
		accounts = acc;
		window.contract.methods.verifyRegistration(rd,"YES").send({from: accounts[0], gas: 4000000}, function(err, result) {
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
async function rejectRegistration(rd)
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
	web3.eth.getAccounts().then(function(acc){
		accounts = acc;
		window.contract.methods.verifyRegistration(rd,"NOPE").send({from: accounts[0], gas: 4000000}, function(err, result) {
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
async function acceptTransfer(rd)
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
	web3.eth.getAccounts().then(function(acc){
		accounts = acc;
		window.contract.methods.verifyTransfer(rd,"YES").send({from: accounts[0], gas: 4000000}, function(err, result) {
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
async function rejectTransfer(rd)
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
	web3.eth.getAccounts().then(function(acc){
		accounts = acc;
		window.contract.methods.verifyTransfer(rd,"NOPE").send({from: accounts[0], gas: 4000000}, function(err, result) {
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
		getRegistrarInfo();
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
                    retrievedMessages = await window.contract.methods.retrieve(userid,"registrar").call();
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

/*Profile*/

async function getRegistrarInfo()
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
    registrarInfo = await window.contract.methods.getRegistrar(window.sessionStorage.getItem("username")).call();
    if(registrarInfo.name=="")
    {
        initialized = false;
    }
    else
    {
        initialized = true;
        $("#registrarFullName").val(registrarInfo.name);
        $("#registrarSD").val(registrarInfo.sd);
        $("#registrarTD").val(registrarInfo.td);
        $("#registrarRF").val(registrarInfo.rf);
		$("#registrarLatLng").val(registrarInfo.coordinates);
		var coords = JSON.parse($("#registrarLatLng").val());
		for(var i=0;i<coords.length;i++)
		{
			var e =
			{
				latLng: new google.maps.LatLng(coords[i].lat, coords[i].lng)
			};
			google.maps.event.trigger(map, 'click', e);
		}
    }
	getunverifiedregistrations();
}
function updateRegistrar()
{
    if($("#registrarFullName").val().length>0 && $("#registrarSD").val().length>0 && $("#registrarTD").val().length>0 && $("#registrarRF").val().length>0 && ($("#registrarLatLng").val().match(/lat/g) || []).length>2)
    {
        try
        {
            async function updateRegistrarInfo()
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
                if(initialized)
                {
                    web3.eth.getAccounts().then(function(acc){
                        accounts = acc;
                        window.contract.methods.updateRegistrar(window.sessionStorage.getItem("username"), $("#registrarSD").val(), $("#registrarTD").val(), $("#registrarRF").val()).send({from: accounts[0], gas: 4000000}, function(err, result) {
                            if(err)
                            {
                                alert(err);
                            }
                        }).on("receipt",function(res){
                            if(res.events.registrarUpdated.returnValues.success=="YES")
                            {
                                alert("Successfully Updated Details");
                                window.location.reload();
                            }
                            else if(res.events.registrarUpdated.returnValues.success=="NO")
                            {
                                alert("Failed to update the details!");
                            }
                        });
                    });
                }
                else
                {
                    if(window.sessionStorage.getItem("loginMode")!=1)
                    {
                        alert("Login through your metamask wallet to perform this operation!");
                        return;
                    }
                    web3.eth.getAccounts().then(function(acc){
                        accounts = acc;
                        window.contract.methods.addRegistrar($("#registrarFullName").val(), window.sessionStorage.getItem("username"), $("#registrarSD").val(), $("#registrarTD").val(), $("#registrarRF").val(), $("#registrarLatLng").val(), metamask).send({from: accounts[0], gas: 4000000}, function(err, result) {
                            if(err)
                            {
                                alert(err);
                            }
                        }).on("receipt",function(res){
                            if(res.events.registrarUpdated.returnValues.success=="YES")
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
            }
            updateRegistrarInfo();
        }
        catch(err)
        {
            alert(err.message);
            return;
        }
    }
    else
    {
        alert("Enter the details properly!");
    }
}
function searchCity()
{
	var city_name = $("#registrarCity").val().trim();
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
	$("#registrarLatLng").val(JSON.stringify(polyPath));
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
	$("#registrarLatLng").val("");
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
	$("#registrarLatLng").val(JSON.stringify(polyPath));
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