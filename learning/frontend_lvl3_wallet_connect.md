# 🦊 Frontend Level 3 — Connect Wallet with MetaMask (GuardianX)

Now that you know components and JSX, it’s time to connect your dApp to a real Web3 wallet (like MetaMask). This lets you:
- Identify the user
- Send blockchain transactions
- Log the sender’s wallet in SOS alerts

---

## 🔌 What is MetaMask?

MetaMask is a browser extension that acts like a crypto wallet. Users use it to:
- Log in to dApps
- Approve transactions
- Sign messages

---

## 🔧 What is ethers.js?

**ethers.js** is a JavaScript library that lets your frontend talk to the blockchain.

You’ll use it to:
- Connect to MetaMask
- Get the wallet address
- Send data to the smart contract

---

## 👨‍💻 How to Connect Wallet (Sample Code)

Here’s how you’ll create a connect button:

```jsx
// ConnectWallet.jsx
import { useState } from 'react';
import { ethers } from 'ethers';

function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState('');

  async function connect() {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error("Connection error:", err);
      }
    } else {
      alert("Please install MetaMask");
    }
  }

  return (
    <div>
      <button onClick={connect}>🔐 Connect Wallet</button>
      {walletAddress && <p>Connected: {walletAddress}</p>}
    </div>
  );
}

export default ConnectWallet;
