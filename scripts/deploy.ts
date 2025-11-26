import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts...");
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Account balance:", ethers.formatEther(balance), "ETH");

  // Deploy PensionFund
  console.log("\nDeploying PensionFund...");
  const PensionFund = await ethers.getContractFactory("PensionFund");
  const pensionFund = await PensionFund.deploy();
  await pensionFund.waitForDeployment();
  const pensionFundAddress = await pensionFund.getAddress();
  console.log("PensionFund deployed to:", pensionFundAddress);

  // Deploy ContributionTracker
  console.log("\nDeploying ContributionTracker...");
  const ContributionTracker = await ethers.getContractFactory("ContributionTracker");
  const contributionTracker = await ContributionTracker.deploy();
  await contributionTracker.waitForDeployment();
  const contributionTrackerAddress = await contributionTracker.getAddress();
  console.log("ContributionTracker deployed to:", contributionTrackerAddress);

  // Deploy PayoutCalculator
  console.log("\nDeploying PayoutCalculator...");
  const PayoutCalculator = await ethers.getContractFactory("PayoutCalculator");
  const payoutCalculator = await PayoutCalculator.deploy();
  await payoutCalculator.waitForDeployment();
  const payoutCalculatorAddress = await payoutCalculator.getAddress();
  console.log("PayoutCalculator deployed to:", payoutCalculatorAddress);

  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("Deployment Summary");
  console.log("=".repeat(60));
  console.log("PENSION_FUND:", pensionFundAddress);
  console.log("CONTRIBUTION_TRACKER:", contributionTrackerAddress);
  console.log("PAYOUT_CALCULATOR:", payoutCalculatorAddress);
  console.log("=".repeat(60));

  // Save addresses to .env format
  console.log("\nAdd these to your .env file:");
  console.log(`PENSION_FUND_ADDRESS=${pensionFundAddress}`);
  console.log(`CONTRIBUTION_TRACKER_ADDRESS=${contributionTrackerAddress}`);
  console.log(`PAYOUT_CALCULATOR_ADDRESS=${payoutCalculatorAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });