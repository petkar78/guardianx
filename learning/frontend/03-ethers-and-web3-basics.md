# 🔗 LVL 3: Web3 & ethers.js — How Your Website Talks to the Blockchain

---

## 🧠 The Problem (Web2 vs Web3)

In Web2:
- Websites use a server (like Google, Amazon) to send/receive data.

In Web3:
- We use **wallets** + **smart contracts** + **blockchains**

But normal JavaScript cannot talk directly to the blockchain.  
That’s where **ethers.js** comes in.

---

## 🔌 What is ethers.js?

`ethers.js` is a JavaScript **library** that lets your website:

✅ Connect to MetaMask  
✅ Read from smart contracts  
✅ Send transactions (like SOS alert)  
✅ Check wallet balance, chain ID, etc.

---

## 🧪 Example

```js
import { ethers } from "ethers";

const provider = new ethers.BrowserProvider(window.ethereum);
