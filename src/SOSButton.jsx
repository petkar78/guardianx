import { useState } from 'react';
import { ethers } from 'ethers';

function SOSButton() {
  const [status, setStatus] = useState('');

  async function sendSOS() {
    setStatus('📍 Getting location...');

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude.toFixed(6);
        const lon = position.coords.longitude.toFixed(6);
        const location = `Location: ${lat}, ${lon}`;
        const message = `Help me! ${location}`;

        console.log("📍 Sending message:", message);

        setStatus('🔗 Connecting to wallet...');
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();

          const contract = new ethers.Contract(
            '0x4f0fa1672b61164db0a6152Dd9282a47A8A57D15', // 🔁 Replace with actual address
            ["function sendSOS(string message) public"],
            signer
          );

          setStatus('🚨 Sending SOS...');
          const tx = await contract.sendSOS(message);
          await tx.wait();

          setStatus(`✅ SOS sent with message and location`);
        } catch (error) {
          console.error("❌ Transaction Error:", error);
          setStatus('❌ Failed to send SOS');
        }
      },
      (error) => {
        console.error("❌ GPS Error:", error);
        setStatus('❌ Could not get location');
      }
    );
  }

  return (
    <div>
      <button onClick={sendSOS}>🚨 Send SOS</button>
      <p>{status}</p>
    </div>
  );
}

export default SOSButton;
