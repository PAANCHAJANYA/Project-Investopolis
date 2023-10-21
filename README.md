# Project-Investopolis
Customer Loyalty Tokenization on Blockchain

1. Download the source code from this GitHub repository
2. Download and install Ganache on your local machine to simulate a local blockchain network.
3. Create a new workspace in Ganache. This will start a local blockchain network on your localhost. Your machine acts as a node in this case.
4. Download and install metamask wallet in the browser to enable transactions.
5. Add the Ganache network that you initialized in Metamask Settings to perform transactions on that network through your wallet.
6. Create a few accounts on your Metamask wallet to try out various user roles such as "Administrator", "Ideator", "Investor", and "Vendor".
7. Place the solidity files whose access is provided in Appendix 2 on an IDE such as Remix Ethereum (web-based) that can compile solidity.
8. Make sure to include the wallet account address of the metamask account to which you want to assign "Administrator Access" in the users.sol solidity file. This is essential as there must be an administrator initially to perform verification of newly registered users.
9. Deploy the smart contracts onto the local blockchain network through your wallet. Make sure to keep the Ganache workspace running during this time.
10. Place the source code of the dApp in a server (XAMPP - Apache, Nginx, etc.) because the wallet will consider the requests from your dApp as valid only then.
11. Open localhost on your browser and you will be able to access Investopolis dApp

Happy Investing!!
