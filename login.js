async function loadWeb3()
{
    if(window.ethereum)
    {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
        var checkCurrentAccount = setInterval(function(){
            web3.eth.getAccounts().then(function(acc){
                $("#currentMetamask input").val(acc[0]);
            });
        }, 1000);
    }
}
async function load()
{
    await loadWeb3();
}
load();