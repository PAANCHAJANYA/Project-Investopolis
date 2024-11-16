const contextC = artifacts.require("context");
const usersC = artifacts.require("users");
const MessagesC = artifacts.require("Messages");
const sharesC = artifacts.require("shares");
const tokensC = artifacts.require("tokens");
const landsC = artifacts.require("lands");
const NFTsC = artifacts.require("NFTs");

module.exports = function(deployer) {
  //deployer.deploy(contextC);
  deployer.deploy(usersC);
  deployer.deploy(MessagesC);
  deployer.deploy(sharesC);
  deployer.deploy(tokensC);
  deployer.deploy(landsC);
  deployer.deploy(NFTsC);
};
