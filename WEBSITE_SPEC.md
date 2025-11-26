# WEBSITE_SPEC.md - Nest (Encrypted Pension Platform)

> **NOTE:** This file is for the frontend developer. After the website is created, this file can be deleted from the repository.

## General Description

Nest is a pension fund management platform with encrypted contributions and payouts. Contribution amounts and pension calculations remain private.

## Website Structure

### Home Page (/)

**Header:**
- Logo "Nest" (click → home)
- Navigation:
  - "Fund" (click → /fund)
  - "Contribute" (click → /contribute)
  - "My Contributions" (click → /my-contributions)
  - "Payouts" (click → /payouts)
- "Connect Wallet" button

**Hero:**
- Title: "Private Pension Fund"
- Subtitle: "Save for retirement with encrypted contributions"
- Button "View Fund" (click → /fund)

**Features:**
- "Encrypted Contributions" - contribution amounts stay private
- "Private Payouts" - payout amounts encrypted
- "Confidential Calculations" - pension calculations private
- "Secure Retirement" - plan retirement privately

### Page "Fund" (/fund)

**Fund Overview:**
- Total Fund Value (encrypted, shown as "***")
- Total Contributors (encrypted count)
- Average Contribution (encrypted, shown as "***")
- Fund Performance (encrypted percentage)
- Button "Decrypt Fund" - decrypt fund statistics (requires authorization)

**Fund Statistics:**
- Contribution trends (chart, encrypted)
- Payout trends (chart, encrypted)
- Fund growth (encrypted percentage)
- Button "View Details"

### Page "Contribute" (/contribute)

**Contribution Form:**
- Field "Amount" (number, in ETH/USDC)
  - Button "Max" - contribute maximum available
  - Balance display
- Field "Contribution Type" (dropdown: One-time, Monthly, Annual)
- Field "Retirement Age" (number, optional, will be encrypted)
- Estimated Payout (encrypted, shown as "***")
- Button "Encrypt & Contribute"
  - On click: encrypts amount and contributes
  - Shows "Contributing..."
  - After success: "Contributed successfully"
  - Redirects to /my-contributions

### Page "My Contributions" (/my-contributions)

**Tabs:**
- "Contributions" (your contributions)
- "Projected Payout" (estimated retirement payout)
- "Payout History" (if retired)

**Tab "Contributions":**
- Table of contributions:
  - Columns: Date, Amount (encrypted, button "Decrypt"), Type, Total (encrypted), Actions
  - Button "View Contribution"
  - Button "Decrypt Contribution"
- Total Contributed (encrypted, button "Decrypt")

**Tab "Projected Payout":**
- Estimated monthly payout (encrypted, button "Decrypt")
- Estimated total payout (encrypted)
- Retirement age
- Calculation details (encrypted)
- Button "Calculate Payout" - recalculate payout estimate

**Tab "Payout History":**
- List of payouts received
- Payout amounts (encrypted, can be decrypted)
- Payout dates
- Button "Decrypt Payout"

### Page "Payouts" (/payouts)

**Request Payout:**
- Eligibility check
- Current balance (encrypted)
- Available payout (encrypted, button "Decrypt")
- Field "Payout Amount" (number, will be encrypted)
- Field "Payout Frequency" (dropdown: One-time, Monthly, Quarterly)
- Button "Encrypt & Request Payout"
  - On click: encrypts request and submits
  - Shows "Payout requested successfully"

**Payout History:**
- List of payouts
- Amounts (encrypted, button "Decrypt")
- Dates
- Status
- Button "View Transaction"

## Common UI Elements

### Modals

**Modal "Fund Details":**
- Fund statistics
- Encrypted values shown as "***"
- Button "Decrypt Fund"
- Button "Close"

**Modal "Contribution Details":**
- Contribution information
- Amount (encrypted, button "Decrypt")
- Date
- Type
- Button "Close"

**Modal "Decrypt Contribution":**
- Warning: "Decrypting will reveal contribution amount. Continue?"
- Buttons: "Cancel", "Confirm Decrypt"

**Modal "Calculate Payout":**
- Retirement age input
- Contribution history (encrypted)
- Estimated payout (encrypted)
- Button "Calculate"
- Button "Close"

### Notifications

- "Contributed successfully" (green)
- "Payout requested successfully" (green)
- "Payout processed" (green)
- "Contribution decrypted" (info)

### Loading

- "Encrypting contribution..."
- "Contributing..."
- "Calculating payout..."
- "Decrypting contribution..."

## Navigation

- `/` - Home
- `/fund` - Fund overview
- `/contribute` - Contribute
- `/my-contributions` - My contributions
- `/payouts` - Payouts

## Design

- Retirement/pension theme
- Professional, secure design
- Charts for fund performance
- Encrypted data as "***"
- Responsive design

## Technical Requirements

- Web3 wallet integration
- Zama FHEVM for contribution encryption
- Display encrypted data as "***"
- Pension calculation system
- Payout processing
- Decryption on user request
- Fund management

