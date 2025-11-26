EncryptedPension - Pension Platform Guide
==========================================

OVERVIEW:
Pension platform with confidential contributions and payouts. Participants can accumulate funds without revealing accumulation sizes.

FEATURES:
- Encrypted pension contribution accumulation
- Private pension payout calculations
- Confidential fund investment
- Encrypted contribution history
- Private pension forecasts
- Public decryption for payouts

CONTRACTS:
- PensionFund.sol - Main fund contract
- ContributionTracker.sol - Encrypted contribution tracking
- PayoutCalculator.sol - Private payout calculations

SETUP INSTRUCTIONS:

1. Install dependencies:
   npm install

2. Configure environment:
   Copy .env.example to .env and fill in values

3. Compile contracts:
   npm run compile

4. Deploy:
   npm run deploy:sepolia

5. Run tests:
   npm test

PROJECT STRUCTURE:

EncryptedPension/
├── fund/
│   ├── PensionFund.sol
│   ├── ContributionTracker.sol
│   └── PayoutCalculator.sol
├── deploy/
├── test/
└── frontend/

TECHNOLOGY:
- Zama FHEVM v0.9
- Hardhat
- React + TypeScript

LICENSE: MIT


