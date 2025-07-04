import { useState } from 'react';

function ConnectWallet() {
  const [account, setAccount] = useState(null);

  async function connect() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } else {
      alert("MetaMask not found");
    }
  }

  return (
    <div>
      <button onClick={connect}>
        {account ? `Connected: ${account.slice(0, 6)}...` : '🔌 Connect Wallet'}
      </button>
    </div>
  );
}

export default ConnectWallet;
