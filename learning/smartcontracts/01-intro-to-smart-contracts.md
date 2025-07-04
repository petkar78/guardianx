# 🔐 LVL 4.0 – Intro to Smart Contracts

---

## 🧠 What is a Smart Contract?

A **smart contract** is:
> Code that runs on a blockchain, automatically and permanently.

It allows logic like:
- Sending/receiving crypto
- Recording data (like SOS alerts)
- Acting based on user input

---

## 💼 Real-World Analogy

| Real World Item      | Smart Contract Equivalent    |
|----------------------|------------------------------|
| ATM Machine          | Sends money after PIN        |
| Vending Machine      | Gives snack when paid        |
| GuardianX SOS Button | Sends SOS alert to chain     |

---

## 🔗 Where Do Smart Contracts Live?

Smart contracts are deployed to a **blockchain**.

In our case:
- We'll use the **Monad Testnet**
- Later we can deploy on **Monad Mainnet**

---

## 🛠 What Language Are They Written In?

Most smart contracts (including ours) use:
Solidity 
Here’s a simple example:

```solidity
pragma solidity ^0.8.0;

contract GuardianX {
    function sendSOS() public {
        // logic here
    }
}
