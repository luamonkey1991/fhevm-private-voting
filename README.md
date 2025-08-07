# 🗳️ Private Voting dApp with FHEVM

This is a full-stack decentralized application that allows users to vote privately using Fully Homomorphic Encryption on Zama's FHEVM.

---

## 📦 Tech Stack

- **Smart Contract**: Solidity + Zama FHEVM
- **Frontend**: React + TypeScript
- **Encryption SDK**: @zama-fhe/sdk

---

## 🛠 Setup Instructions

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd fhevm-voting
npm install
```

### 2. Configure Hardhat

Edit `hardhat.config.ts` with your private key:

```ts
accounts: ["<YOUR_PRIVATE_KEY>"]
```

### 3. Deploy Contract

```bash
npx hardhat compile
npx hardhat run scripts/deploy.ts --network zama
```

Copy the deployed address into `App.tsx` as `CONTRACT_ADDRESS`.

---

### 4. Frontend Setup

```bash
cd ../private-voting
npm install
npm start
```

Make sure MetaMask is connected to Zama Devnet.

---

## ✅ Functions

- `submitVote(0|1)`: Submit YES (1) or NO (0) encrypted.
- `getEncryptedResults()`: Returns sealed encrypted vote count.

---

## 🔒 Powered by FHEVM

Votes remain encrypted throughout and only viewable after decryption on the client-side.

---