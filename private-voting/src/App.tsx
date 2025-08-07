import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { FhevmInstance, createInstance } from "@zama-fhe/sdk";
import VotingAbi from "./abi/PrivateVote.json";

const CONTRACT_ADDRESS = "0xYourDeployedContract";

function App() {
  const [provider, setProvider] = useState<ethers.BrowserProvider>();
  const [signer, setSigner] = useState<ethers.Signer>();
  const [fhe, setFhe] = useState<FhevmInstance>();
  const [yesVotes, setYesVotes] = useState<string>("");
  const [noVotes, setNoVotes] = useState<string>("");

  useEffect(() => {
    const init = async () => {
      const prov = new ethers.BrowserProvider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const sign = await prov.getSigner();
      const fheInstance = await createInstance({ chainId: 1337 });
      setProvider(prov);
      setSigner(sign);
      setFhe(fheInstance);
    };
    init();
  }, []);

  const vote = async (value: number) => {
    if (!signer || !fhe) return;

    const contract = new ethers.Contract(CONTRACT_ADDRESS, VotingAbi, signer);
    const enc = await fhe.encrypt32(value);
    const tx = await contract.submitVote(enc.serialize());
    await tx.wait();
    alert("Voted!");
  };

  const getResults = async () => {
    if (!signer || !fhe) return;

    const contract = new ethers.Contract(CONTRACT_ADDRESS, VotingAbi, signer);
    const [encYes, encNo] = await contract.getEncryptedResults();
    const decryptedYes = await fhe.decrypt(encYes);
    const decryptedNo = await fhe.decrypt(encNo);
    setYesVotes(decryptedYes.toString());
    setNoVotes(decryptedNo.toString());
  };

  return (
    <div>
      <h2>Private Voting dApp (FHEVM)</h2>
      <button onClick={() => vote(1)}>Vote YES</button>
      <button onClick={() => vote(0)}>Vote NO</button>
      <button onClick={getResults}>Get Results</button>
      <div>
        <p>✅ YES votes: {yesVotes}</p>
        <p>❌ NO votes: {noVotes}</p>
      </div>
    </div>
  );
}

export default App;