import "@fhenixprotocol/hardhat-fhevm";
import "@nomicfoundation/hardhat-toolbox";

export default {
  defaultNetwork: "zama",
  networks: {
    zama: {
      url: "https://api.zama.ai/fhevm",
      chainId: 1337,
      accounts: ["<YOUR_PRIVATE_KEY>"]
    }
  },
  fhevm: {
    publicKey: "https://api.zama.ai/fhevm/public-key",
  },
  solidity: "0.8.20"
};