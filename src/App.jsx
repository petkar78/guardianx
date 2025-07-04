import ConnectWallet from './ConnectWallet';
import SOSButton from './SOSButton';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState(null);
  
  
  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      () => {
        alert("Unable to retrieve your location");
      }
    );
  };
  
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🛡️ GuardianX — Web3 SOS App</h1>
      <ConnectWallet />
      <SOSButton />
      <button onClick={getLocation} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
       📍 Get Location
      </button>
      {location && (
  <p style={{ marginTop: '0.5rem' }}>
    Latitude: {location.latitude}, Longitude: {location.longitude}
  </p>
)}

    </div>
  );
}

export default App;
