// Issue #20: Design responsive dashboard layout
// Complexity: Trivial (100 pts)
// Status: Placeholder

import React from 'react'

export const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-blue-600">Soroban Ajo</h1>
          <p className="text-gray-600">Decentralized Rotational Savings</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* TODO: Add stat cards for active groups, total saved, next payout */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Active Groups</h3>
            <p className="text-3xl font-bold text-blue-600">0</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Total Saved</h3>
            <p className="text-3xl font-bold text-green-600">$0.00</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Next Payout</h3>
            <p className="text-gray-600">None scheduled</p>
          </div>
        </div>

        {/* TODO: Add groups list section below */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Your Groups</h2>
          <p className="text-gray-600">No groups yet. Create one to get started!</p>
        </div>
      </main>
    </div>
  )
}
