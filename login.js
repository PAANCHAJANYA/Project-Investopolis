var currentAccount;
var chosen=false;
var idproof="";
async function loadWeb3()
{
    if(window.ethereum)
    {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
        var checkCurrentAccount = setInterval(function(){
            web3.eth.getAccounts().then(function(acc){
                $("#currentMetamask input").val(acc[0]);
                currentAccount = acc[0];
            });
        }, 1000);
    }
}
async function load()
{
    await loadWeb3();
}
load();
$("#chooseMetamask").click(function()
{
    $("#chooseMetamask").html(`<span></span>
    <span></span>
    <span></span>
    <span></span>`+
    currentAccount);
    chosen=true;
    $("#chooseMetamask").css("letter-spacing", "1px");
});
var abi = [
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
$("#loginButton").click(function()
{
    if(chosen)
    {
        try
        {
            async function login()
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
                var loginBool = await window.contract.methods.login("","",currentAccount).call();
                if(loginBool=="investor")
                {
					window.sessionStorage.setItem("walletAddress", currentAccount);
					window.sessionStorage.setItem("userRole", "investor");
					window.sessionStorage.setItem("loginMode","1");
                    window.location="investor.html";
                }
                else if(loginBool=="ideator")
                {
					window.sessionStorage.setItem("walletAddress", currentAccount);
					window.sessionStorage.setItem("userRole", "ideator");
					window.sessionStorage.setItem("loginMode","1");
                    window.location = "ideator.html";
                }
				else if(loginBool=="admin")
				{
					window.sessionStorage.setItem("walletAddress", currentAccount);
					window.sessionStorage.setItem("userRole", "admin");
					window.sessionStorage.setItem("loginMode","1");
					window.location = "admin.html";
				}
				else if(loginBool=="YET")
				{
					alert("This account is yet to be verified!");
				}
				else if(loginBool=="NOPE")
				{
					alert("This account is rejected!");
				}
                else
                {
                    alert("Improper Credentials!");
                }
            }
            login();
        }
        catch(err)
        {
            alert(err.message);
            return;
        }
    }
    else
    {
        if($("#loginuserid").val().length>=8 && $("#loginpwd").val().length>=8)
        {
            try
            {
                async function login2()
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
                    var loginBool = await window.contract.methods.login($("#loginuserid").val().toUpperCase(),$("#loginpwd").val(),currentAccount).call();
                    if(loginBool=="investor")
                    {
						window.sessionStorage.setItem("walletAddress", currentAccount);
						window.sessionStorage.setItem("username", $("#loginuserid").val().toUpperCase());
						window.sessionStorage.setItem("userRole", "investor");
						window.sessionStorage.setItem("loginMode","2");
                        window.location="investor.html";
                    }
                    else if(loginBool=="ideator")
                    {
						window.sessionStorage.setItem("walletAddress", currentAccount);
						window.sessionStorage.setItem("username", $("#loginuserid").val().toUpperCase());
						window.sessionStorage.setItem("userRole", "ideator");
						window.sessionStorage.setItem("loginMode","2");
                        window.location = "ideator.html";
                    }
					else if(loginBool=="admin")
					{
						window.sessionStorage.setItem("walletAddress", currentAccount);
						window.sessionStorage.setItem("username", $("#loginuserid").val().toUpperCase());
						window.sessionStorage.setItem("userRole", "admin");
						window.sessionStorage.setItem("loginMode","2");
						window.location = "admin.html";
					}
					else if(loginBool=="YET")
					{
						alert("This account is yet to be verified!");
					}
					else if(loginBool=="NOPE")
					{
						alert("This account is rejected!");
					}
                    else
                    {
                        alert("Improper Credentials!");
                    }
                }
                login2();
            }
            catch(err)
            {
                alert(err.message);
                return;
            }
        }
        else
        {
            alert("Fill in the User ID and Password properly!");
        }
    }
});
$("#registerButton").click(function()
{
    if($("#registeruserid").val().length>=8 && $("#registerpwd1").val().length>=8 && $("#registerpwd2").val().length>=8 && $("#registerpwd1").val()==$("#registerpwd2").val() && $("#registerrole").val()!==null && uploaded_image.length>0)
    {
        try
        {
            async function register()
            {
				let node = await Ipfs.create();
				let {path} = await node.add(uploaded_image);
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
                    window.contract.methods.register($("#registeruserid").val().toUpperCase(),$("#registerpwd1").val(),currentAccount,$("#registerrole").val(), path).send({from: accounts[0], gas: 4000000}, function(err, result) {
                        if(err)
                        {
                            alert(err);
                        }
                    }).on("receipt",function(res)
					{
                        if(res.events.registerevent.returnValues.success=="YES")
						{
							alert("Registration request submitted! You will be notified by SMS once the verification is done");
						}
						else if(res.events.registerevent.returnValues.success=="NO")
						{
							alert("Metamask Account/Username already exists!");
						}
						else
						{
							alert("Registration Unsuccessful");
						}
					});
                });
            }
            register();
        }
        catch(err)
        {
            alert(err.message);
            return;
        }
    }
    else
    {
        alert("Fill in the details properly! The credentials should be a minimum of 8 characters in length");
    }
});
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