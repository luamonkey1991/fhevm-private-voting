
# 🗳️ FHEVM Private Voting dApp

This is a fully functional decentralized application (dApp) demo using Zama's FHEVM, enabling **confidential voting** where votes remain private while results are verifiable.

## 🔐 Technology Stack

- **Smart Contract**: Solidity + FHEVM (Zama Devnet)
- **Frontend**: React + Vite
- **Backend**: Hardhat + Ethers.js + Zama’s FHE tools
- **Deployment**: Vercel / Fleek (for frontend)

---

## 📁 Folder Structure

```
fhevm-voting-demo/
├── contracts/             # Smart contract using FHEVM
├── frontend/              # React-based frontend
├── scripts/               # Deployment and interaction scripts
├── test/                  # Unit tests using Mocha/Chai
├── hardhat.config.js      # Hardhat configuration
└── README.md              # Project documentation
```

---

## 🧪 Sample Test Case

```js
// test/Voting.test.js
const { expect } = require("chai");

describe("Voting", function () {
  it("Should allow encrypted vote and tally correctly", async function () {
    const Voting = await ethers.getContractFactory("PrivateVoting");
    const voting = await Voting.deploy();
    await voting.waitForDeployment();

    await voting.voteEncrypted("0xfhe_encrypted_vote");
    const result = await voting.getEncryptedTally();
    expect(result).to.not.be.null;
  });
});
```

---

## 🔐 Mock User Authentication (Frontend)

```js
// frontend/src/utils/auth.js
export function authenticateUser(username, password) {
  return username === "admin" && password === "123456";
}
```

You can extend this with wallet-based login using MetaMask.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
cd frontend && npm install
```

### 2. Compile & Deploy Smart Contract

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network zama
```

### 3. Run Frontend Locally

```bash
cd frontend
npm run dev
```

Then open `http://localhost:5173`

---

## ☁️ Deploy Frontend

### ▶️ Deploy with Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Set build command: `npm run build`
5. Set output dir: `dist`

### 🧬 Deploy with Fleek (Web3 IPFS)

1. Go to [fleek.xyz](https://fleek.xyz)
2. Connect your GitHub repo
3. Use default build settings for Vite
4. Fleek will deploy to IPFS

---

## 📄 License

MIT © 2025
