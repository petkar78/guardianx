# 🚨 06 — Final SOS Flow Logic (GuardianX MVP Complete)

This step combines everything we've learned to form the full SOS workflow.

---

## 🧭 1. Full Flow Breakdown

```jsx
1️⃣ User opens GuardianX frontend (React app)
2️⃣ Connects wallet via MetaMask
3️⃣ Browser asks for location access
4️⃣ Location is hashed (SHA256)
5️⃣ User clicks “🚨 Send SOS”
6️⃣ Frontend sends hash to smart contract
7️⃣ Smart contract logs SOS on-chain
8️⃣ UI shows success or error
