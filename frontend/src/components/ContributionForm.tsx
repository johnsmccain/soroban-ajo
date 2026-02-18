// Issue #24: Implement contribution form
// Complexity: Trivial (100 pts)
// Status: Placeholder

import React, { useState } from 'react'

interface ContributionFormProps {
  groupId: string
  contributionAmount: number
}

export const ContributionForm: React.FC<ContributionFormProps> = ({
  groupId,
  contributionAmount,
}) => {
  const [amount, setAmount] = useState(contributionAmount)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // TODO: Validate amount
    // TODO: Call contribute function on smart contract
    // TODO: Sign transaction with user's wallet
    // TODO: Show success/error notification
    // TODO: Update contributions in UI
    
    setLoading(true)
    try {
      // Placeholder for contract call
      console.log('Contributing to group:', groupId, 'Amount:', amount)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setAmount(contributionAmount)
    } catch (err) {
      setError('Failed to contribute. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-md">
      <h3 className="text-2xl font-bold mb-4">Make a Contribution</h3>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Amount to Contribute ($)</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-600">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              step="0.01"
              min="0"
              className="w-full pl-8 pr-4 py-2 border rounded-lg text-lg font-semibold"
              required
            />
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-semibold">${amount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Network Fee:</span>
            <span className="font-semibold">$0.01</span>
          </div>
          <div className="border-t pt-2 flex justify-between items-center">
            <span className="text-gray-900 font-semibold">Total:</span>
            <span className="text-lg font-bold text-blue-600">
              ${(amount + 0.01).toFixed(2)}
            </span>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition"
        >
          {loading ? 'Processing...' : 'Contribute'}
        </button>

        <p className="text-xs text-gray-600 text-center">
          You'll be prompted to confirm this transaction in your wallet.
        </p>
      </form>
    </div>
  )
}
