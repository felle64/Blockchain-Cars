import { network } from "hardhat";

const { ethers } = await network.getOrCreate();

const transactions = await ethers.deployContract("CarOwnership");
await transactions.waitForDeployment();

console.log("Transactions deployed to:", await transactions.getAddress());
