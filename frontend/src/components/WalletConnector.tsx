// Issue #19: Create wallet connection component
// Complexity: Trivial (100 pts)
// Status: Placeholder

import React, { useState } from 'react'

export const WalletConnector: React.FC = () => {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState('')

  const handleConnect = async () => {
    // TODO: Integrate with Freighter wallet
    // Steps:
    // 1. Check if Freighter is installed
    // 2. Request user to connect wallet
    // 3. Get user's public key
    // 4. Store in Zustand store
    // 5. Update connected state
    setConnected(true)
    setAddress('GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Wallet Connection</h2>
      {connected ? (
        <div>
          <p className="text-green-600 mb-2">Connected ✓</p>
          <p className="text-sm text-gray-600 break-all">{address}</p>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Connect Wallet
        </button>
      )}
    </div>
  )
}
