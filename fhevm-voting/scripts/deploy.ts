import { ethers } from "hardhat";

async function main() {
  const PrivateVote = await ethers.getContractFactory("PrivateVote");
  const vote = await PrivateVote.deploy();
  await vote.waitForDeployment();
  console.log("Contract deployed to:", await vote.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});