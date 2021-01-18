const { expect, assert } = require("chai");
const BN = ethers.BigNumber
const OptionType = {Invalid: 0, Put: 1, Call: 2};

module.exports.test = () => describe("Contract", function() {
    let fakeWETH;

    let owner;
    let users;
    let user1;
    let user2; 
    let user3; 
    let user4;
    
    before(async () => {
        // set up contracts
        const allContracts = await contracts();
        fakeWETH = allContracts.fakeWETH;

        // set users
        const accountsList = await accounts()
        owner = accountsList[0];
        users = accountsList.slice(1, accountsList.length);
        user1 = users[0];
        user2 = users[1];
        user3 = users[2];
        user4 = users[3];
    });

    it("should do X", async () => {
        
    });

    

});