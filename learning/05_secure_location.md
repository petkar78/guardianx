# 📍 05 — Getting and Securing User Location

In this step, we make GuardianX more powerful by:

- Getting the **user’s real-time location**
- **Hashing or encrypting** that location
- Sending only the **secured version** to the blockchain

---

## 🧭 1. Getting Location in the Browser

JavaScript gives access to a user’s coordinates using the `navigator.geolocation` API.

```js
navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("Lat:", lat, "Lon:", lon);
  },
  (error) => {
    console.error("Location error:", error);
  }
);
