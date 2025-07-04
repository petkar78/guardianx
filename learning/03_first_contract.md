# 🛠️ 03 — First Smart Contract (GuardianX SOS Logger)

## 🔐 Contract Name: `GuardianX`

This is your first working smart contract in Solidity that listens for SOS alerts and logs them **on-chain**.

---

## 📄 Code: `GuardianX.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GuardianX {
    event SOSAlert(address indexed sender, string locationHash, uint256 timestamp);

    function sendSOS(string memory locationHash) public {
        emit SOSAlert(msg.sender, locationHash, block.timestamp);
    }
}
