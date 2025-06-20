# 🚨 Frontend Level 4 — SOS Button with Blockchain Action (GuardianX)

This is it — the real SOS logic for GuardianX.  
You’ll learn how to:

- Get user location (latitude, longitude)
- Hash it for privacy
- Send it to the GuardianX smart contract using ethers.js
- Show status in the UI

---

## 🌍 Step 1 — Get User Location

Use the browser’s Geolocation API:

```js
navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
});
