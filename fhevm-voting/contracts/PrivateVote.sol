// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@fhenixprotocol/contracts/FHE.sol";
import "@fhenixprotocol/contracts/base/Permittable.sol";

contract PrivateVote is Permittable {
    euint32 private voteYes;
    euint32 private voteNo;

    constructor() {}

    function submitVote(euint32 encryptedVote) public {
        ebool isYes = FHE.eq(encryptedVote, FHE.asEuint32(1));
        voteYes = FHE.cmux(isYes, FHE.add(voteYes, FHE.asEuint32(1)), voteYes);
        voteNo = FHE.cmux(isYes, voteNo, FHE.add(voteNo, FHE.asEuint32(1)));
    }

    function getEncryptedResults() public view returns (bytes memory, bytes memory) {
        return (FHE.sealoutput(voteYes), FHE.sealoutput(voteNo));
    }
}