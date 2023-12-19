import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import customConfig from "config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
      evmVersion: "london",
    },
  },
  networks: {
    polygon_mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${customConfig.get(
        "INFURA_API_KEY"
      )}`,
      accounts: [`${customConfig.get("PRIVATE_KEY")}`],
    },
  },
  // paths: {
  //   sources: "./contracts",
  //   tests: "./test",
  //   cache: "./cache",
  //   artifacts: "./artifacts",
  // },
  mocha: {
    timeout: 20000,
  },
  gasReporter: {
    currency: "USD",
    enabled: true,
  },
};

export default config;
