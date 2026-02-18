// Issue #21: Build group creation form
// Complexity: Trivial (100 pts)
// Status: Placeholder

import React, { useState } from 'react'

interface GroupFormData {
  groupName: string
  description: string
  cycleLength: number
  contributionAmount: number
  maxMembers: number
}

export const GroupCreationForm: React.FC = () => {
  const [formData, setFormData] = useState<GroupFormData>({
    groupName: '',
    description: '',
    cycleLength: 30,
    contributionAmount: 100,
    maxMembers: 10,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Submit form data to smart contract
    // Steps:
    // 1. Validate form data
    // 2. Call create_group on Soroban contract
    // 3. Show success notification
    // 4. Redirect to group detail page
    console.log('Create group:', formData)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Create a New Group</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Group Name</label>
          <input
            type="text"
            value={formData.groupName}
            onChange={(e) => setFormData({ ...formData, groupName: e.target.value })}
            placeholder="e.g., Market Women Ajo"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe your group's purpose..."
            className="w-full px-4 py-2 border rounded-lg"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Cycle Length (days)</label>
            <input
              type="number"
              value={formData.cycleLength}
              onChange={(e) => setFormData({ ...formData, cycleLength: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Contribution Amount ($)</label>
            <input
              type="number"
              step="0.01"
              value={formData.contributionAmount}
              onChange={(e) => setFormData({ ...formData, contributionAmount: parseFloat(e.target.value) })}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Max Members</label>
          <input
            type="number"
            value={formData.maxMembers}
            onChange={(e) => setFormData({ ...formData, maxMembers: parseInt(e.target.value) })}
            min="2"
            max="50"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
        >
          Create Group
        </button>
      </form>
    </div>
  )
}
