import "dotenv/config";
import hardhatEthers from "@nomicfoundation/hardhat-ethers";
import { configVariable, defineConfig } from "hardhat/config";

// API_URL and PRIVATE_KEY (without the 0x prefix) are read from .env
export default defineConfig({
  plugins: [hardhatEthers],
  solidity: "0.8.19",
  networks: {
    sepolia: {
      type: "http",
      chainType: "l1",
      url: configVariable("API_URL"),
      accounts: [configVariable("PRIVATE_KEY", "0x{variable}")],
    },
  },
});
