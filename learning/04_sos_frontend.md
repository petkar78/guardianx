# 🌐 04 — Building the SOS Frontend (React + Wallet)

Now we create a simple web UI for GuardianX where users:
- Connect their wallet (MetaMask)
- Press a button to send an SOS alert to the smart contract

---

## ⚙️ Tools Used:
- React (via Vite for speed)
- ethers.js (to interact with smart contract)
- MetaMask (wallet for Web3 interaction)

---

## 📦 1. Create the React App

```bash
npm create vite@latest guardianx-frontend -- --template react
cd guardianx-frontend
npm install
