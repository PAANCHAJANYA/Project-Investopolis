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
var contractAddress = "0x4bfC4518368dCd140F265f9523bA04c871694Bf4";
$(".segment-topbar__overline").html("Wallet Address: "+window.sessionStorage.getItem("walletAddress"));
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
var contractAddress2 = "0x52efD1f4Bc085bC3caf3f7b3980da76346747fc4";
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
$(".app-header__anchor").click(function()
{
    $("#ideatorsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#homePage").css("display", "block");
    $("#homePage .nav-section a").removeClass("nav__link--active");
    $("#block5content").css("display","none");
    $("#block4content").css("display","none");
    $("#block3content").css("display","none");
    $("#block2content").css("display","none");
    $("#block1content").css("display","none");
    $("#blockchainNetwork").css("display","flex");
});
$(".homeButton").click(function()
{
    $("#ideatorsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#homePage").css("display", "block");
    $("#homePage .nav-section a").removeClass("nav__link--active");
    $("#block5content").css("display","none");
    $("#block4content").css("display","none");
    $("#block3content").css("display","none");
    $("#block2content").css("display","none");
    $("#block1content").css("display","none");
    $("#blockchainNetwork").css("display","flex");
});
$("#block5").click(function()
{
    $("#homePage .nav-section a").removeClass("nav__link--active");
    $("#block5 a").addClass("nav__link--active");
    $("#blockchainNetwork").css("display","none");
    $("#block4content").css("display","none");
    $("#block3content").css("display","none");
    $("#block2content").css("display","none");
    $("#block1content").css("display","none");
    $("#block5content").css("display","block");
});
$("#block4").click(function()
{
    $("#homePage .nav-section a").removeClass("nav__link--active");
    $("#block4 a").addClass("nav__link--active");
    $("#blockchainNetwork").css("display","none");
    $("#block5content").css("display","none");
    $("#block3content").css("display","none");
    $("#block2content").css("display","none");
    $("#block1content").css("display","none");
    $("#block4content").css("display","block");
});
$("#block3").click(function()
{
    $("#homePage .nav-section a").removeClass("nav__link--active");
    $("#block3 a").addClass("nav__link--active");
    $("#blockchainNetwork").css("display","none");
    $("#block5content").css("display","none");
    $("#block4content").css("display","none");
    $("#block2content").css("display","none");
    $("#block1content").css("display","none");
    $("#block3content").css("display","block");
});
$("#block2").click(function()
{
    $("#homePage .nav-section a").removeClass("nav__link--active");
    $("#block2 a").addClass("nav__link--active");
    $("#blockchainNetwork").css("display","none");
    $("#block5content").css("display","none");
    $("#block4content").css("display","none");
    $("#block3content").css("display","none");
    $("#block1content").css("display","none");
    $("#block2content").css("display","block");
});
$("#block1").click(function()
{
    $("#homePage .nav-section a").removeClass("nav__link--active");
    $("#block1 a").addClass("nav__link--active");
    $("#blockchainNetwork").css("display","none");
    $("#block5content").css("display","none");
    $("#block4content").css("display","none");
    $("#block3content").css("display","none");
    $("#block2content").css("display","none");
    $("#block1content").css("display","block");
});
$(".ideatorsButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#ideatorsPage").css("display", "block");
    $("#ideatorsPage .nav-section a").removeClass("nav__link--active");
    $("#followingideator1 a").addClass("nav__link--active");
    $("#followingideator2content").css("display","none");
    $("#followingideator3content").css("display","none");
    $("#followingideator4content").css("display","none");
    $("#followingideator5content").css("display","none");
    $("#followingideator1content").css("display","block");
});
$("#followingideator1").click(function()
{
    $("#homePage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#ideatorsPage").css("display", "block");
    $("#ideatorsPage .nav-section a").removeClass("nav__link--active");
    $("#followingideator1 a").addClass("nav__link--active");
    $("#followingideator2content").css("display","none");
    $("#followingideator3content").css("display","none");
    $("#followingideator4content").css("display","none");
    $("#followingideator5content").css("display","none");
    $("#followingideator1content").css("display","block");
});
$("#followingideator2").click(function()
{
    $("#homePage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#ideatorsPage").css("display", "block");
    $("#ideatorsPage .nav-section a").removeClass("nav__link--active");
    $("#followingideator2 a").addClass("nav__link--active");
    $("#followingideator1content").css("display","none");
    $("#followingideator3content").css("display","none");
    $("#followingideator4content").css("display","none");
    $("#followingideator5content").css("display","none");
    $("#followingideator2content").css("display","block");
});
$("#followingideator3").click(function()
{
    $("#homePage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#ideatorsPage").css("display", "block");
    $("#ideatorsPage .nav-section a").removeClass("nav__link--active");
    $("#followingideator3 a").addClass("nav__link--active");
    $("#followingideator1content").css("display","none");
    $("#followingideator2content").css("display","none");
    $("#followingideator4content").css("display","none");
    $("#followingideator5content").css("display","none");
    $("#followingideator3content").css("display","block");
});
$("#followingideator4").click(function()
{
    $("#homePage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#ideatorsPage").css("display", "block");
    $("#ideatorsPage .nav-section a").removeClass("nav__link--active");
    $("#followingideator4 a").addClass("nav__link--active");
    $("#followingideator1content").css("display","none");
    $("#followingideator2content").css("display","none");
    $("#followingideator3content").css("display","none");
    $("#followingideator5content").css("display","none");
    $("#followingideator4content").css("display","block");
});
$("#followingideator5").click(function()
{
    $("#homePage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#myProfilePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#ideatorsPage").css("display", "block");
    $("#ideatorsPage .nav-section a").removeClass("nav__link--active");
    $("#followingideator5 a").addClass("nav__link--active");
    $("#followingideator1content").css("display","none");
    $("#followingideator2content").css("display","none");
    $("#followingideator3content").css("display","none");
    $("#followingideator4content").css("display","none");
    $("#followingideator5content").css("display","block");
});
$(".messagesButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#ideatorsPage").css("display", "none");
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
                        var date = new Date();
						$(appendTo).append(`
                        <div class="message">
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
$(".myProfileButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#ideatorsPage").css("display", "none");
    $("#messagesPage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#myProfilePage").css("display", "block");
    $("#myProfilePage .nav-section a").removeClass("nav__link--active");
    $("#ideator1 a").addClass("nav__link--active");
    $("#ideator2content").css("display","none");
    $("#token1content").css("display","none");
    $("#token2content").css("display","none");
    $("#token3content").css("display","none");
    $("#token4content").css("display","none");
    $("#token5content").css("display","none");
    $("#ideator1content").css("display","block");
});
$("#ideator1").click(function()
{
    $("#myProfilePage .nav-section a").removeClass("nav__link--active");
    $("#ideator1 a").addClass("nav__link--active");
    $("#ideator2content").css("display","none");
    $("#token1content").css("display","none");
    $("#token2content").css("display","none");
    $("#token3content").css("display","none");
    $("#token4content").css("display","none");
    $("#token5content").css("display","none");
    $("#ideator1content").css("display","block");
});
$("#ideator2").click(function()
{
    $("#myProfilePage .nav-section a").removeClass("nav__link--active");
    $("#ideator2 a").addClass("nav__link--active");
    $("#ideator1content").css("display","none");
    $("#token1content").css("display","none");
    $("#token2content").css("display","none");
    $("#token3content").css("display","none");
    $("#token4content").css("display","none");
    $("#token5content").css("display","none");
    $("#ideator2content").css("display","block");
});
$("#token1").click(function()
{
    $("#myProfilePage .nav-section a").removeClass("nav__link--active");
    $("#token1 a").addClass("nav__link--active");
    $("#ideator1content").css("display","none");
    $("#ideator2content").css("display","none");
    $("#token2content").css("display","none");
    $("#token3content").css("display","none");
    $("#token4content").css("display","none");
    $("#token5content").css("display","none");
    $("#token1content").css("display","block");
});
$("#token2").click(function()
{
    $("#myProfilePage .nav-section a").removeClass("nav__link--active");
    $("#token2 a").addClass("nav__link--active");
    $("#ideator1content").css("display","none");
    $("#ideator2content").css("display","none");
    $("#token1content").css("display","none");
    $("#token3content").css("display","none");
    $("#token4content").css("display","none");
    $("#token5content").css("display","none");
    $("#token2content").css("display","block");
});
$("#token3").click(function()
{
    $("#myProfilePage .nav-section a").removeClass("nav__link--active");
    $("#token3 a").addClass("nav__link--active");
    $("#ideator1content").css("display","none");
    $("#ideator2content").css("display","none");
    $("#token1content").css("display","none");
    $("#token2content").css("display","none");
    $("#token4content").css("display","none");
    $("#token5content").css("display","none");
    $("#token3content").css("display","block");
});
$("#token4").click(function()
{
    $("#myProfilePage .nav-section a").removeClass("nav__link--active");
    $("#token4 a").addClass("nav__link--active");
    $("#ideator1content").css("display","none");
    $("#ideator2content").css("display","none");
    $("#token1content").css("display","none");
    $("#token2content").css("display","none");
    $("#token3content").css("display","none");
    $("#token5content").css("display","none");
    $("#token4content").css("display","block");
});
$("#token5").click(function()
{
    $("#myProfilePage .nav-section a").removeClass("nav__link--active");
    $("#token5 a").addClass("nav__link--active");
    $("#ideator1content").css("display","none");
    $("#ideator2content").css("display","none");
    $("#token1content").css("display","none");
    $("#token2content").css("display","none");
    $("#token3content").css("display","none");
    $("#token4content").css("display","none");
    $("#token5content").css("display","block");
});
$(".developersButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#ideatorsPage").css("display", "none");
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