# 🚀 Smart Contract – Step 5: Deploy to Monad Testnet

---

## ✅ What We Did

We deployed our first smart contract (`GuardianX.sol`) to the **Monad Testnet** using [Remix IDE](https://remix.ethereum.org).

---

## 🌐 Tools Used

| Tool        | Why We Use It                          |
|-------------|----------------------------------------|
| Remix IDE   | Easiest way to test Solidity online    |
| MetaMask    | Web3 wallet used to sign transactions  |
| Monad RPC   | Connects Remix to Monad Testnet        |

---

## 🧪 Deployment Steps

### 🥽 1. Go to [Remix IDE](https://remix.ethereum.org)

- This is an online Solidity IDE — no installation needed.

---

### 📄 2. Create New File

- Click on the **File Explorer** on the left
- Create a file called `GuardianX.sol`
- Paste your smart contract code:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GuardianX {
    event SOSAlert(address indexed sender, string message);

    function sendSOS(string memory message) public {
        emit SOSAlert(msg.sender, message);
    }
}
