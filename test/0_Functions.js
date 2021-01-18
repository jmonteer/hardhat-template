contracts = async () => {
    let WETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"; // mainnet address
    const FakeWETHContract = await ethers.getContractFactory("FakeWETH");
    const fakeWETH = await FakeWETHContract.deploy();
    await fakeWETH.deployed();
    WETH = fakeWETH.address;

    
    return { WETH }
}

accounts = async () => {
    const users = await ethers.getSigners();
    return users;
}

changePrice = async (op, newPrice) => {
    await op.setLatestPrice(ethers.utils.parseUnits(newPrice, 8));
}
  

send = (method, params = []) =>
    new Promise((done) =>
    hre.network.provider.send(method, params, done)
)

timeTravel = async (seconds) => {
    await send("evm_increaseTime", [seconds])
    await send("evm_mine")
}

setBlockTimestamp = async (timestamp) => {
    await send("evm_setNextBlockTimestamp", [timestamp]);
}

getETHBalance = async (address) => {
    return ethers.provider.getBalance(address);
}

getGasETH = async (tx) => {
    return await tx.wait().then(tx=>tx.gasUsed).then(gas => gas.mul(tx.gasPrice));
}

getExpectedProfit = async (option, currentPrice) => {
    const OptionType = {Invalid: 0, Put: 1, Call: 2};
    let profit = 0;
    
    if(option.optionType == OptionType.Call) {
        profit = currentPrice.sub(option.strike).mul(option.amount).div(currentPrice);
    } else if (option.optionType == OptionType.Put) {
        profit = option.strike.sub(currentPrice).mul(option.amount).div(currentPrice);
    }

    return profit;
}