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
var one_text = new Array (); 
one_text[0] = "mutant"; 
one_text[1] = "pirate"; 
one_text[2] = "ninja"; 
one_text[3] = "ballerina"; 
one_text[4] = "robot"; 
one_text[5] = "fairy"; 
one_text[6] = "professional"; 
one_text[7] = "acrobat"; 
one_text[8] = "surfer"; 
one_text[9] = "assassin"; 
one_text[10] = "alien"; 
one_text[11] = "cowboy"; 
one_text[12] = "sailor"; 
one_text[13] = "pilot"; 
one_text[14] = "werewolf"; 
one_text[15] = "superhero"; 
one_text[16] = "skateboarder"; 
one_text[17] = "wrestler"; 
one_text[18] = "gamer"; 
one_text[19] = "unicorn"; 
one_text[20] = "centaur"; 
one_text[21] = "mech suit"; 
one_text[22] = "painter"; 
one_text[23] = "elf"; 
one_text[24] = "dwarf"; 
one_text[25] = "giant"; 
one_text[26] = "orc"; 
one_text[27] = "ghost"; 
one_text[28] = "vampire"; 
one_text[29] = "samurai"; 
one_text[30] = "abraham lincoln"; 
one_text[31] = "zombie"; 
one_text[32] = "tornado"; 
one_text[33] = "tsunami"; 
one_text[34] = "angel"; 
one_text[35] = "demon"; 
one_text[36] = "manticore"; 
one_text[37] = "gelatinous blob"; 
one_text[38] = "martial artist"; 
one_text[39] = "Roman guard"; 
one_text[40] = "cannibal"; 
one_text[41] = "police"; 
one_text[42] = "firefighter"; 
one_text[43] = "doctor"; 
one_text[44] = "mad scientist"; 
one_text[45] = "secret agent"; 
one_text[46] = "phoenix"; 
one_text[47] = "dragon"; 
one_text[48] = "griffin"; 
one_text[49] = "mermaid"; 
one_text[50] = "harpy"; 
one_text[51] = "Cerberus"; 
one_text[52] = "chupacabra"; 
one_text[53] = "Fenrir"; 
one_text[54] = "chimera"; 
one_text[55] = "golem"; 
one_text[56] = "sphinx"; 
one_text[57] = "kraken"; 
one_text[58] = "bigfoot"; 
one_text[59] = "wyvern"; 
one_text[60] = "hydra"; 
one_text[61] = "minotaur"; 
one_text[62] = "satyr"; 
one_text[63] = "pegasus"; 
one_text[64] = "automaton"; 
one_text[65] = "valkyrie"; 
one_text[66] = "Grim Reaper"; 
one_text[67] = "genie"; 
one_text[68] = "leprechuan"; 
one_text[69] = "banshee"; 
one_text[70] = "gremlin"; 
one_text[71] = "mummy"; 
one_text[72] = "skeleton"; 
one_text[73] = "waiter"; 
one_text[74] = "chef"; 
one_text[75] = "politician"; 
one_text[76] = "truck driver"; 
one_text[77] = "delivery driver"; 
one_text[78] = "soldier"; 
one_text[79] = "butcher"; 
one_text[80] = "astronaut"; 
one_text[81] = "diver"; 
one_text[82] = "plumber"; 
one_text[83] = "clown"; 
one_text[84] = "monster"; 
one_text[85] = "cult leader"; 
one_text[86] = "serial killer"; 
one_text[87] = "psycohpath"; 
one_text[88] = "sociopath"; 
var two_text = new Array (); 
two_text[0] = "as a rabbit"; 
two_text[1] = "as a owl"; 
two_text[2] = "as a banker"; 
two_text[3] = "as a raccoon"; 
two_text[4] = "as a woman"; 
two_text[5] = "as a man"; 
two_text[6] = "as an old man"; 
two_text[7] = "as an old woman"; 
two_text[8] = "as a young man"; 
two_text[9] = "as a young woman"; 
two_text[10] = "as a dog"; 
two_text[11] = "as a cat"; 
two_text[12] = "in the army"; 
two_text[13] = "as a shark"; 
two_text[14] = "in a spaceship"; 
two_text[15] = "on a boat"; 
two_text[16] = "in a submarine"; 
two_text[17] = "driving a car"; 
two_text[18] = "riding a tractor"; 
two_text[19] = "driving a forklift"; 
two_text[20] = "on the beach"; 
two_text[21] = "at the movies"; 
two_text[22] = "in a field"; 
two_text[23] = "swimming in the ocean"; 
two_text[24] = "in a rocking chair"; 
two_text[25] = "on a comfortable sofa"; 
two_text[26] = "on the street"; 
two_text[27] = "on the dance floor"; 
two_text[28] = "painting on a canvas"; 
two_text[29] = "flexing for fans"; 
two_text[30] = "singing for an audience"; 
two_text[31] = "looking at the moon"; 
two_text[32] = "finding buried treasure"; 
two_text[33] = "inventing a robot"; 
two_text[34] = "digging a hole"; 
two_text[35] = "hiding corpses"; 
two_text[36] = "battling enemies"; 
two_text[37] = "winning the Internet"; 
two_text[38] = "eating gourmet food"; 
two_text[39] = "delivering pizza"; 
two_text[40] = "falling down the stairs"; 
two_text[41] = "riding an escalator"; 
two_text[42] = "inside an elevator"; 
two_text[43] = "in an important meeting"; 
two_text[44] = "doing mathematics"; 
two_text[45] = "performing surgery"; 
two_text[46] = "mowing the lawn"; 
two_text[47] = "burning the world down"; 
two_text[48] = "just standing there solemnly"; 
two_text[49] = "making tacos"; 
two_text[50] = "flirting with your mom"; 
two_text[51] = "using a 3d printer"; 
two_text[52] = "building a house"; 
two_text[53] = "destroying the room"; 
two_text[54] = "flying a kite"; 
two_text[55] = "playing baseball"; 
two_text[56] = "doing taxes"; 
two_text[57] = "playing with toys"; 
two_text[58] = "flying in space"; 
two_text[59] = "dreaming while asleep"; 
two_text[60] = "being a stunt driver"; 
two_text[61] = "making an angry face"; 
two_text[62] = "looking around thoughtfully"; 
two_text[63] = "robbing a bank"; 
two_text[64] = "playing poker"; 
two_text[65] = "longingly staring at the horizon on a cliff"; 
two_text[66] = "contorting into a weird shape"; 
two_text[67] = "made up of nothing but ants"; 
two_text[68] = "made out of raspberry jelly"; 
two_text[69] = "as a wooden statue"; 
two_text[70] = "as an embroidered patch"; 
two_text[71] = "as an enamel hat pin"; 
two_text[72] = "as an anime character"; 
two_text[73] = "as a cartoon character"; 
two_text[74] = "as a comic book character"; 
two_text[75] = "as a carved jade statue"; 
two_text[76] = "coloring book style"; 
two_text[77] = "on an alien world"; 
two_text[78] = "as an ink blot"; 
two_text[79] = "as a cave painting"; 
two_text[80] = "in school"; 
two_text[81] = "climbing a mountain"; 
two_text[82] = "asleep on a park bench"; 
two_text[83] = "riding a unicycle"; 
two_text[84] = "on a motorcycle with flames"; 
two_text[85] = "wearing a face mask"; 
two_text[86] = "doing the dishes"; 
two_text[87] = "arguing in court"; 
two_text[88] = "playing chess"; 
var three_text = new Array (); 
three_text[0] = "as a rabbit"; 
three_text[1] = "as a owl"; 
three_text[2] = "as a banker"; 
three_text[3] = "as a raccoon"; 
three_text[4] = "as a woman"; 
three_text[5] = "as a man"; 
three_text[6] = "as an old man"; 
three_text[7] = "as an old woman"; 
three_text[8] = "as a young man"; 
three_text[9] = "as a young woman"; 
three_text[10] = "as a dog"; 
three_text[11] = "as a cat"; 
three_text[12] = "in the army"; 
three_text[13] = "as a shark"; 
three_text[14] = "in a spaceship"; 
three_text[15] = "on a boat"; 
three_text[16] = "in a submarine"; 
three_text[17] = "driving a car"; 
three_text[18] = "riding a tractor"; 
three_text[19] = "driving a forklift"; 
three_text[20] = "on the beach"; 
three_text[21] = "at the movies"; 
three_text[22] = "in a field"; 
three_text[23] = "swimming in the ocean"; 
three_text[24] = "in a rocking chair"; 
three_text[25] = "one a comfortable sofa"; 
three_text[26] = "on the street"; 
three_text[27] = "on the dance floor"; 
three_text[28] = "painting on a canvas"; 
three_text[29] = "flexing for fans"; 
three_text[30] = "singing for an audience"; 
three_text[31] = "looking at the moon"; 
three_text[32] = "finding buried treasure"; 
three_text[33] = "inventing a robot"; 
three_text[34] = "digging a hole"; 
three_text[35] = "hiding corpses"; 
three_text[36] = "battling enemies"; 
three_text[37] = "winning the Internet"; 
three_text[38] = "eating gourmet food"; 
three_text[39] = "delivering pizza"; 
three_text[40] = "falling down the stairs"; 
three_text[41] = "riding an escalator"; 
three_text[42] = "inside an elevator"; 
three_text[43] = "in an improtant meeting"; 
three_text[44] = "doing mathematics"; 
three_text[45] = "performing surgery"; 
three_text[46] = "mowing the lawn"; 
three_text[47] = "burning the world down"; 
three_text[48] = "just standing there solemnly"; 
three_text[49] = "making tacos"; 
three_text[50] = "flirting with your mom"; 
three_text[51] = "using a 3d printer"; 
three_text[52] = "building a house"; 
three_text[53] = "destroying the room"; 
three_text[54] = "flying a kite"; 
three_text[55] = "playing baseball"; 
three_text[56] = "doing taxes"; 
three_text[57] = "playing with toys"; 
three_text[58] = "flying in space"; 
three_text[59] = "dreaming while asleep"; 
three_text[60] = "being a stunt driver"; 
three_text[61] = "making an angry face"; 
three_text[62] = "looking around thoughtfully"; 
three_text[63] = "robbing a bank"; 
three_text[64] = "playing poker"; 
three_text[65] = "longingly staring at the horizon on a cliff"; 
three_text[66] = "contorting into a weird shape"; 
three_text[67] = "made up of nothing but ants"; 
three_text[68] = "made out of raspberry jelly"; 
three_text[69] = "as a wooden statue"; 
three_text[70] = "as an embroidered patch"; 
three_text[71] = "as an enamel hat pin"; 
three_text[72] = "as an anime character"; 
three_text[73] = "as a cartoon character"; 
three_text[74] = "as a comic book character"; 
three_text[75] = "as a carved jade statue"; 
three_text[76] = "coloring book style"; 
three_text[77] = "on an alien world"; 
three_text[78] = "as an ink blot"; 
three_text[79] = "as a cave painting"; 
three_text[80] = "in school"; 
three_text[81] = "climbing a mountain"; 
three_text[82] = "asleep on a park bench"; 
three_text[83] = "riding a unicycle"; 
three_text[84] = "on a motorcycle with flames"; 
three_text[85] = "wearing a face mask"; 
three_text[86] = "doing the dishes"; 
three_text[87] = "arguing in court"; 
three_text[88] = "playing chess"; 
var four_text = new Array (); 
four_text[0] = "as a rabbit"; 
four_text[1] = "as a owl"; 
four_text[2] = "as a banker"; 
four_text[3] = "as a raccoon"; 
four_text[4] = "as a woman"; 
four_text[5] = "as a man"; 
four_text[6] = "as an old man"; 
four_text[7] = "as an old woman"; 
four_text[8] = "as a young man"; 
four_text[9] = "as a young woman"; 
four_text[10] = "as a dog"; 
four_text[11] = "as a cat"; 
four_text[12] = "in the army"; 
four_text[13] = "as a shark"; 
four_text[14] = "in a spaceship"; 
four_text[15] = "on a boat"; 
four_text[16] = "in a submarine"; 
four_text[17] = "driving a car"; 
four_text[18] = "riding a tractor"; 
four_text[19] = "driving a forklift"; 
four_text[20] = "on the beach"; 
four_text[21] = "at the movies"; 
four_text[22] = "in a field"; 
four_text[23] = "swimming in the ocean"; 
four_text[24] = "in a rocking chair"; 
four_text[25] = "one a comfortable sofa"; 
four_text[26] = "on the street"; 
four_text[27] = "on the dance floor"; 
four_text[28] = "painting on a canvas"; 
four_text[29] = "flexing for fans"; 
four_text[30] = "singing for an audience"; 
four_text[31] = "looking at the moon"; 
four_text[32] = "finding buried treasure"; 
four_text[33] = "inventing a robot"; 
four_text[34] = "digging a hole"; 
four_text[35] = "hiding corpses"; 
four_text[36] = "battling enemies"; 
four_text[37] = "winning the Internet"; 
four_text[38] = "eating gourmet food"; 
four_text[39] = "delivering pizza"; 
four_text[40] = "falling down the stairs"; 
four_text[41] = "riding an escalator"; 
four_text[42] = "inside an elevator"; 
four_text[43] = "in an improtant meeting"; 
four_text[44] = "doing mathematics"; 
four_text[45] = "performing surgery"; 
four_text[46] = "mowing the lawn"; 
four_text[47] = "burning the world down"; 
four_text[48] = "just standing there solemnly"; 
four_text[49] = "making tacos"; 
four_text[50] = "flirting with your mom"; 
four_text[51] = "using a 3d printer"; 
four_text[52] = "building a house"; 
four_text[53] = "destroying the room"; 
four_text[54] = "flying a kite"; 
four_text[55] = "playing baseball"; 
four_text[56] = "doing taxes"; 
four_text[57] = "playing with toys"; 
four_text[58] = "flying in space"; 
four_text[59] = "dreaming while asleep"; 
four_text[60] = "being a stunt driver"; 
four_text[61] = "making an angry face"; 
four_text[62] = "looking around thoughtfully"; 
four_text[63] = "robbing a bank"; 
four_text[64] = "playing poker"; 
four_text[65] = "longingly staring at the horizon on a cliff"; 
four_text[66] = "contorting into a weird shape"; 
four_text[67] = "made up of nothing but ants"; 
four_text[68] = "made out of raspberry jelly"; 
four_text[69] = "as a wooden statue"; 
four_text[70] = "as an embroidered patch"; 
four_text[71] = "as an enamel hat pin"; 
four_text[72] = "as an anime character"; 
four_text[73] = "as a cartoon character"; 
four_text[74] = "as a comic book character"; 
four_text[75] = "as a carved jade statue"; 
four_text[76] = "coloring book style"; 
four_text[77] = "on an alien world"; 
four_text[78] = "as an ink blot"; 
four_text[79] = "as a cave painting"; 
four_text[80] = "in school"; 
four_text[81] = "climbing a mountain"; 
four_text[82] = "asleep on a park bench"; 
four_text[83] = "riding a unicycle"; 
four_text[84] = "on a motorcycle with flames"; 
four_text[85] = "wearing a face mask"; 
four_text[86] = "doing the dishes"; 
four_text[87] = "arguing in court";
four_text[88] = "playing chess";
var five_text = new Array (); 
five_text[0] = "anime style"; 
five_text[1] = "oil painting"; 
five_text[2] = "watercolor painting"; 
five_text[3] = "graffiti"; 
five_text[4] = "butter scultpure"; 
five_text[5] = "ancient Roman frieze"; 
five_text[6] = "hyperrealistic"; 
five_text[7] = "fractal diffusion"; 
five_text[8] = "crochet pattern"; 
five_text[9] = "tarot card"; 
five_text[10] = "light show"; 
five_text[11] = "Dali painting"; 
five_text[12] = "abstract art"; 
five_text[13] = "child's drawing"; 
five_text[14] = "ink doodle"; 
five_text[15] = "3d art"; 
five_text[16] = "Victorian era portrait"; 
five_text[17] = "origami"; 
five_text[18] = "futurism"; 
five_text[19] = "realism"; 
five_text[20] = "in the style of Bosch"; 
five_text[21] = "in the style of Van Gogh"; 
five_text[22] = "made of out pizza"; 
five_text[23] = "cave painting style"; 
five_text[24] = "byzantine art"; 
five_text[25] = "comic book style"; 
five_text[26] = "coloring book style"; 
five_text[27] = "as cloud shapes"; 
five_text[28] = "made out of gelatin"; 
five_text[29] = "charcoal style"; 
five_text[30] = "sketchbook style"; 
five_text[31] = "as a movie poster"; 
five_text[32] = "as a magazine cover"; 
five_text[33] = "made out of ketchup"; 
five_text[34] = "made out of lightning"; 
five_text[35] = "as an ugly Christmas sweater"; 
five_text[36] = "made out of fingerpaints"; 
five_text[37] = "sidewalk chalk style"; 
five_text[38] = "as living room wallpaper"; 
five_text[39] = "as an infomercial"; 
five_text[40] = "3d-printed style"; 
five_text[41] = "lasercut out of 3mm stained birchwood"; 
five_text[42] = "marble statue"; 
five_text[43] = "as a crop circle"; 
five_text[44] = "colored sand style"; 
five_text[45] = "low resolution polygon style"; 
five_text[46] = "on an old tv screen"; 
five_text[47] = "on a painting in a museum"; 
five_text[48] = "on a billboard sign"; 
five_text[49] = "in a newspaper"; 
five_text[50] = "made out of yarn"; 
five_text[51] = "ascii art"; 
five_text[52] = "pixelated style"; 
five_text[53] = "playing card design"; 
five_text[54] = "Halloween costume"; 
five_text[55] = "quilt pattern style"; 
five_text[56] = "splattered paint style"; 
five_text[57] = "made out of colored water"; 
var messagesCount=0;
var othermessageids=[];
var userid;
var retrievedMessages;
var rootEle = document.querySelector(':root');
let progress = 50;
let active = 0;
var $items;
const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)));

/*Header*/

$(".app-header__anchor").click(function()
{
	$("#NFTsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#homePage").css("display", "block");
    $("#homePage .nav-section a").removeClass("nav__link--active");
    $("#homePage .channel-feed__body").css("display","none");
    $("#blockchainNetwork").css("display","block");
});
$(".homeButton").click(function()
{
	$("#NFTsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#homePage").css("display", "block");
    $("#homePage .nav-section a").removeClass("nav__link--active");
    $("#homePage .channel-feed__body").css("display","none");
    $("#blockchainNetwork").css("display","block");
});
$(".NFTsButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#messagesPage").css("display", "none");
	$("#NFTsPage").css("display", "block");
    $("#NFTsPage .nav-section a").removeClass("nav__link--active");
	$("#mintNFT a").addClass("nav__link--active");
	$("#NFTsPage .channel-feed__body").css("display","none");
	$("#mintNFTcontent").css("display","block");
	$("#viewButton").removeClass("button__active");
	$("#mintButton").addClass("button__active");
});
$(".messagesButton").click(function()
{
    $("#homePage").css("display", "none");
	$("#NFTsPage").css("display", "none");
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

/*NFTs*/

$("#mintNFT").click(function()
{
	$("#viewNFT a").removeClass("nav__link--active");
	$("#mintNFT a").addClass("nav__link--active");
	$("#viewNFTcontent").css("display", "none");
	$("#mintNFTcontent").css("display", "block");
	$("#viewButton").removeClass("button__active");
	$("#mintButton").addClass("button__active");
});
$("#viewNFT").click(function()
{
	$("#mintNFT a").removeClass("nav__link--active");
	$("#viewNFT a").addClass("nav__link--active");
	$("#mintNFTcontent").css("display", "none");
	$("#viewNFTcontent").css("display", "block");
	$("#mintButton").removeClass("button__active");
	$("#viewButton").addClass("button__active");
});
function mintNFTClicked()
{
	$("#viewNFT a").removeClass("nav__link--active");
	$("#mintNFT a").addClass("nav__link--active");
	$("#viewNFTcontent").css("display", "none");
	$("#mintNFTcontent").css("display", "block");
	$("#viewButton").removeClass("button__active");
	$("#mintButton").addClass("button__active");
}
function viewNFTClicked()
{
	$("#mintNFT a").removeClass("nav__link--active");
	$("#viewNFT a").addClass("nav__link--active");
	$("#mintNFTcontent").css("display", "none");
	$("#viewNFTcontent").css("display", "block");
	$("#mintButton").removeClass("button__active");
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
function generateAIPrompt()
{
	var first = one_text[Math.floor(Math.random() * five_text.length)];
	$("#aiPrompt").html(first.charAt(0).toUpperCase() + first.slice(1) + " - " + two_text[Math.floor(Math.random() * five_text.length)] + ", " + three_text[Math.floor(Math.random() * five_text.length)] + "; " + four_text[Math.floor(Math.random() * five_text.length)] + " | " + five_text[Math.floor(Math.random() * five_text.length)]);
}
function mintNFTFun()
{
	if(uploaded_image.length>0 && window.sessionStorage.getItem("loginMode")==1 && $("#nftTitle").val().length>1)
	{
		$("#mintFunButton").prop('disabled', true);
		$.ajax({
			"async": true,
			"crossDomain": true,
			"url": "https://api.web3.storage/upload",
			"method": "POST",
			"headers": {
			"accept": "application/json",
			"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEZmMjMzNkE4NjdFMzQxYmUyYTI4QUI4YTU5ZDQ3MmNFRjQzNDk1MTIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzk3NjEyNjM3NDEsIm5hbWUiOiJJbnZlc3RvcG9saXMifQ.yXRVRbyOmctb8oc-_MiZXWIH2uzG4ePN17DTF-H2hwM",
			},
			"data": uploaded_image,
			success: async function (data) {
				var path = data["cid"];
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
					window.contract.methods.mint($("#nftTitle").val(), window.sessionStorage.getItem("username"), window.sessionStorage.getItem("walletAddress"), path).send({from: accounts[0], gas: 4000000}, function(err, result) {
						if(err)
						{
							alert(err);
							$("#mintFunButton").prop('disabled', false);
						}
					}).on("receipt",function(res)
					{
						if(res.events.nftMinted.returnValues.success=="YES")
						{
							alert("Minting the NFT was successful!");
							$("#mintFunButton").prop('disabled', false);
							window.location.reload();
						}
						else
						{
							alert("Minting the NFT was unsuccessful!");
							$("#mintFunButton").prop('disabled', false);
						}
					});
				});
			},
			error: function (e)
			{
				console.log("ERROR: ", e);
				$("#mintFunButton").prop('disabled', false);
			}
		});
	}
	else
	{
		alert("Operation Invalid!");
		return;
	}
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
		$(".carousel").append(
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
		$(".carousel").after(
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
	$items = document.querySelectorAll('.carousel-item');
	rootEle.style.setProperty('--items', $items.length);
	animate();
	$items.forEach((item, i) =>
	{
		item.addEventListener('click', (e) =>
		{
			$(".nftcontent").css("display", "none");
			$("#nftcontent"+e.target.id.slice(3)).css("display", "flex");
			progress = ((i+1)/$items.length) * 100;
			animate();
		});
	});
	if(retrievedNFTs.length>0)
	{
		$("#nft1").parent().trigger("click");
		$(".nftcontent").css("display", "none");
		$("#nftcontent1").css("display", "flex");
	}
}
function sellChange(itr)
{
	var checkBox = document.getElementById("nftsell"+itr);
	if(checkBox.checked)
	{
		$("#nftprice"+itr).parent().css("display", "flex");
	}
	else
	{
		$("#nftprice"+itr).parent().css("display", "none");
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
	if(!(/^-?\d+$/.test($("#nftprice"+itr).html())))
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
		window.contract.methods.interest(parseInt($("#nftID"+itr).val()), parseInt($("#nftprice"+itr).html())).send({from: accounts[0], gas: 4000000}, function(err, result) {
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
		window.contract.methods.disinterest($("#nftID"+itr).val()).send({from: accounts[0], gas: 4000000}, function(err, result) {
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
var uploaded_image="";
$('[data-image-uploader-button]').click(function() {
	$('[data-image-uploader]').trigger('click')
});
$('[data-image-uploader]').change(function()
{
	const reader = new FileReader();
	reader.addEventListener("load", async () => {
		uploaded_image = reader.result;
		$("#uploadIDButton").html(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 487.451 487.451" style="enable-background:new 0 0 487.451 487.451;fill:white;" xml:space="preserve">
			<g>
				<path d="M371.694,63.921h-87.83V88.06c0,4.046-3.281,7.326-7.326,7.326h-59.521c-3.164,0-5.851-2.01-6.876-4.819   c0.353,0.054,0.71,0.089,1.077,0.089h59.521c4.045,0,7.325-3.28,7.325-7.326V7.326c0-4.045-3.28-7.326-7.325-7.326h-59.521   c-4.047,0-7.326,3.281-7.326,7.326v56.596h-88.136c-4.046,0-7.326,3.281-7.326,7.326v408.879c0,4.045,3.28,7.324,7.326,7.324   h255.938c4.046,0,7.326-3.279,7.326-7.324V71.247C379.021,67.203,375.74,63.921,371.694,63.921z M226.48,26.247h28.994   c5.271,0,9.541,4.271,9.541,9.54s-4.271,9.54-9.541,9.54H226.48c-5.268,0-9.54-4.271-9.54-9.54S221.212,26.247,226.48,26.247z    M205.566,169.084l0.293-0.337c1.13-0.82,1.68-2.11,1.464-3.43c-2.823-17.042-0.974-24.141-0.336-25.921   c4.931-15.135,20.479-22.223,23.53-23.474c0.638-0.248,1.827-0.615,3.082-0.811l0.32-0.075l2.575-0.143l0.014,0.158l0.55-0.045   l2.183-0.386c0.479,0.003,6.479,0.752,15.52,3.53l6.237,2.14c11.382,3.365,16.676,9.663,17.656,10.922   c9.139,10.367,6.701,26.012,4.424,34.415c-0.248,0.966-0.098,1.975,0.449,2.796l0.516,0.659c0.834,1.11,1.146,4.843-0.719,11.769   c-0.383,2.26-1.213,4.094-2.457,5.315c-0.429,0.473-0.75,1.117-0.871,1.807c-3.096,18.125-19.323,38.402-36.438,38.402   c-14.546,0-31.129-18.662-34.11-38.384c-0.11-0.72-0.417-1.361-0.918-1.912c-1.238-1.285-2.035-3.145-2.518-5.899   C204.573,174.992,204.429,170.824,205.566,169.084z M172.086,248.342c0.121-0.156,3.497-4.445,11.511-7.504   c0,0,17.322-6.747,17.646-6.855c9.015-3.272,18.066-10.093,18.066-10.093l0.621,0.539c7.484,6.446,15.589,9.857,23.432,9.857   c0.045,0,0.091-0.004,0.136-0.006c0,0,0.546,0.006,0.591,0.006c7.843,0,15.947-3.411,23.432-9.857l0.622-0.539   c0,0,9.051,6.82,18.064,10.093c0.324,0.108,17.646,6.855,17.646,6.855c8.014,3.059,11.391,7.348,11.511,7.504   c12.41,18.43,14.507,58.693,14.718,63.191c-0.097,6.309-1.885,7.915-2.361,8.238c-26.687,11.939-62.956,16.791-84.223,16.791   s-57.082-4.852-83.768-16.791c-0.477-0.323-2.265-1.932-2.36-8.238C157.58,307.036,159.677,266.771,172.086,248.342z    M285.438,433.861H150.569v-21.553h134.868V433.861L285.438,433.861z M336.882,391.455H150.569v-21.553h186.312V391.455z"/>
			</g>
		</svg>`+this.files[0].name);
	});
	reader.readAsDataURL(this.files[0]);
});

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
			retrieveNFT();
        }
        else
        {
            userid = window.sessionStorage.getItem("username");
        }
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
                    retrievedMessages = await window.contract.methods.retrieve(userid,"vendor").call();
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