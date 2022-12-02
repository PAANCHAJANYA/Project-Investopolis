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
var userids;
var unverifiedUsers;
var usersCount=0;
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
async function setImage(cid, id)
{
	$.get("https://ipfs.io/ipfs/"+cid, function(data)
	{
		$("#user"+id+"Image").attr("src", data);
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
			setImage(ele.idimage, usersCount+1);
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
var retrievedMessages;
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
			$("#investorsmessagecontent").html("");
			for(i=1;i<=messagesCount;i++)
			{
				$("#message"+i+"content").html("");
			}
			for(itr=retrievedMessages.length-1;itr>=0;itr--)
			{
				ele = retrievedMessages[itr];
				if(ele.viewedby=="everyone")
				{
					$("#everyonemessagecontent").prepend(
						`
						<div class="message">
                            <div class="message__body" style="color:#FF6670;border:1px solid #C73848;">
                                <div>`+ele.message+`</div>
                            </div>
                            <div class="message__footer" style="color:#FF6670;">
                                <span class="message__authoring">You</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
                            </div>
                        </div>`);
				}
				else if(ele.viewedby=="ideator")
				{
					$("#ideatorsmessagecontent").prepend(
						`
						<div class="message">
                            <div class="message__body" style="color:#FF6670;border:1px solid #C73848;">
                                <div>`+ele.message+`</div>
                            </div>
                            <div class="message__footer" style="color:#FF6670;">
                                <span class="message__authoring">You</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
                            </div>
                        </div>`);
				}
				else if(ele.viewedby=="investor")
				{
					$("#investorsmessagecontent").prepend(
						`
						<div class="message">
                            <div class="message__body" style="color:#FF6670;border:1px solid #C73848;">
                                <div>`+ele.message+`</div>
                            </div>
                            <div class="message__footer" style="color:#FF6670;">
                                <span class="message__authoring">You</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
                            </div>
                        </div>`);
				}
				else if(ele.senderID=="ADMIN" && othermessageids.includes(ele.receiverID))
				{
					var sno = othermessageids.findIndex((element) => element == ele.receiverID);
					sno++;
					$("#message"+sno+"content").prepend(
						`
						<div class="message">
                            <div class="message__body" style="color:#FF6670;border:1px solid #C73848;">
                                <div>`+ele.message+`</div>
                            </div>
                            <div class="message__footer" style="color:#FF6670;">
                                <span class="message__authoring">You</span> - `+formatAMPM(new Date(ele.timestamp*1000))+`
                            </div>
                        </div>`);
				}
				else if(ele.receiverID=="ADMIN" && othermessageids.includes(ele.senderID))
				{
					var sno = othermessageids.findIndex((element) => element == ele.senderID);
					sno++;
					$("#message"+sno+"content").prepend(
						`
						<div class="message">
                            <div class="message__body">
                                <div>`+ele.message+`</div>
                            </div>
                            <div class="message__footer">
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
						towhomname = "";
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
						towhomname = "";
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
$(".app-header__anchor").click(function()
{
    $("#messagesPage").css("display", "none");
    $("#developersPage").css("display", "none");
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
    $("#messagesPage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#homePage").css("display", "block");
    $("#homePage .nav-section a").removeClass("nav__link--active");
	$("#homePage .channel-feed__body").css("display","none");
	if(usersCount>0)
	{
		$("#user1 a").addClass("nav__link--active");
		$("#user1verification").css("display","block");
	}
});
$(".messagesButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#developersPage").css("display", "none");
    $("#messagesPage").css("display", "block");
	$("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#everyonemessage a").addClass("nav__link--active");
    $("#messagesPage .channel-feed__body").css("display","none");
    $("#everyonemessagecontent").css("display","block");
	appendTo = "#everyonemessagecontent";
    towhomid = "";
    towhomname = "everyone";
});
var suggestionhovered = false;
$(".form-search input").on("input",function()
{
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
		});
		$("#messagesPage .nav-section a").removeClass("nav__link--active");
		$("#message"+(messagesCount+1)+" a").addClass("nav__link--active");
		$("#messagesPage .channel-feed__body").css("display","none");
		$("#message"+(messagesCount+1)+"content").css("display","block");
		appendTo = "#message"+(messagesCount+1)+"content";
		towhomid = ele.innerHTML;
		towhomname = "";
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
		towhomname = "";
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
    $("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#everyonemessage a").addClass("nav__link--active");
    $("#messagesPage .channel-feed__body").css("display","none");
    $("#everyonemessagecontent").css("display","block");
    appendTo = "#everyonemessagecontent";
    towhomid = "";
    towhomname = "everyone";
});
$("#ideatorsmessage").click(function()
{
    $("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#ideatorsmessage a").addClass("nav__link--active");
    $("#messagesPage .channel-feed__body").css("display","none");
    $("#ideatorsmessagecontent").css("display","block");
    appendTo = "#ideatorsmessagecontent";
    towhomid = "";
    towhomname = "ideators";
});
$("#investorsmessage").click(function()
{
    $("#messagesPage .nav-section a").removeClass("nav__link--active");
	$("#investorsmessage a").addClass("nav__link--active");
    $("#messagesPage .channel-feed__body").css("display","none");
    $("#investorsmessagecontent").css("display","block");
    appendTo = "#investorsmessagecontent";
    towhomid = "";
    towhomname = "investors";
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
						$(appendTo).prepend(`
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
$(".developersButton").click(function()
{
    $("#homePage").css("display", "none");
    $("#messagesPage").css("display", "none");
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