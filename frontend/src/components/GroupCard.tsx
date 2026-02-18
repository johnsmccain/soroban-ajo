// Issue #22: Create group card component
// Complexity: Trivial (100 pts)
// Status: Placeholder

import React from 'react'

interface GroupCardProps {
  groupId: string
  groupName: string
  memberCount: number
  maxMembers: number
  nextPayout: string
  totalContributions: number
  status: 'active' | 'completed' | 'paused'
}

export const GroupCard: React.FC<GroupCardProps> = ({
  groupName,
  memberCount,
  maxMembers,
  nextPayout,
  totalContributions,
  status,
}) => {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    paused: 'bg-yellow-100 text-yellow-800',
  }

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900">{groupName}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Members</span>
          <span className="font-semibold">
            {memberCount}/{maxMembers}
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${(memberCount / maxMembers) * 100}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Total Contributed</span>
          <span className="font-semibold">${totalContributions.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Next Payout</span>
          <span className="text-blue-600 font-semibold">{nextPayout}</span>
        </div>
      </div>

      <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">
        View Details
      </button>
    </div>
  )
}
