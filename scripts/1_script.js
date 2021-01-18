const hre = require("hardhat");
const ethers = hre.ethers;
const BN = ethers.BigNumber;
accounts = async () => {
    const users = await ethers.getSigners();
    return users;
}

async function main(){

    const users = await accounts();
    const deployer = users[0];
    const user1 = users[1];
    const user2 = users[2];
    const user3 = users[3];

    const WETH = await ethers.getContractAt("WETH", "0xb7278A61aa25c888815aFC32Ad3cC52fF24fE575")

    console.log("Contracts:");
    console.log("\tCapitalPool:", capitalPool.address);
    console.log("\n");

    console.log("Users:");
    console.log("\tDeployer", deployer.address);
    console.log("\tUser1 (LP)", user1.address);
    console.log("\tUser2 (Option Seller)", user2.address);
    console.log("\tUser3 (Option Buyer)", user3.address);


    console.log("\n");
    console.log("\n");
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })