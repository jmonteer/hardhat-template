module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId,
    getUnamedAccounts
  }) => {
    const { deploy, execute } = deployments;
    const { deployer } = await getNamedAccounts();
    console.log("Deployer: ", deployer);
    if(await getChainId() == 1) {
      // let HEGIC_ETH_OPTIONS = "";
      // const hegicOptions = await deploy("FakeHegicETHOptions", {
      //   from: deployer,
      //   gas: 4000000, 
      //   args: []
      // });
      // HEGIC_ETH_OPTIONS = hegicOptions.address;

      // await execute("OptionsPool", {
      //   from: deployer,
      //   gas: 4000000
      // }, 
      // "setOptionsManager", optionsManager.address, true)

      // console.log("\nHegicOptions", HEGIC_ETH_OPTIONS);

    }
  };