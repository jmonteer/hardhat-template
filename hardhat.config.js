/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
const mnemonic_mainnet = process.env.mnemonic_mainnet;
const mnemonic_testnet = process.env.mnemonic_test;
const alchemyAPIuri_testnet = process.env.ALCHEMYAPIURI;
const alchemyAPIuri_mainnet = process.env.ALCHEMYAPIURI_MAINNET;
const alchemyAPIuri_forking = process.env.ALCHEMYAPIURI_FORKING;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

require("hardhat-deploy");
// require("hardhat-gas-reporter")

module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: alchemyAPIuri_forking,
        // blockNumber: 11464785 // 16 dec 2020 around 15h00 UTC
      },
      timeout: 2000000
    },
    rinkeby: {
      url: alchemyAPIuri_testnet,
      chainId: 4,
      accounts: {
        mnemonic: mnemonic_testnet,
      },
      timeout: 2000000
    }, 
    // mainnet: {
    //   url: alchemyAPIuri_mainnet,
    //   chainId: 1,
    //   accounts: {
    //     mnemonic: mnemonic_mainnet,
    //   },
    //   timeout: 2000000
    // }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
        1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how buidler network are configured, the account 0 on one network can be different than on another
        4: 0,
    }
  },
  mocha: {
    timeout: 200000
  },
  solidity: {
    version: "0.8.0",
    settings:{
      optimizer: {
        enabled: false,
        runs: 200
      }, 
      evmVersion: 'istanbul'
    } 
  },
};