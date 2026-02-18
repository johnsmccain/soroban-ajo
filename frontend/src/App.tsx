import { useState } from 'react'
import './App.css'
import { WalletConnector } from '@/components/WalletConnector'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GroupCreationForm } from '@/components/GroupCreationForm'
import { GroupCard } from '@/components/GroupCard'
import { MemberList } from '@/components/MemberList'
import { ContributionForm } from '@/components/ContributionForm'

type ViewType = 'dashboard' | 'create' | 'detail'

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard')

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Navigation */}
        <header className="bg-white shadow sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-blue-600">Soroban Ajo</h1>
                <p className="text-sm text-gray-600">Decentralized Rotational Savings</p>
              </div>
              <WalletConnector />
            </div>
          </nav>
        </header>

        {/* View Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`px-4 py-2 rounded font-semibold transition ${
                currentView === 'dashboard'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentView('create')}
              className={`px-4 py-2 rounded font-semibold transition ${
                currentView === 'create'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Create Group
            </button>
            <button
              onClick={() => setCurrentView('detail')}
              className={`px-4 py-2 rounded font-semibold transition ${
                currentView === 'detail'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Group Detail (Demo)
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {currentView === 'dashboard' && <DashboardLayout />}

          {currentView === 'create' && (
            <div className="flex justify-center">
              <GroupCreationForm />
            </div>
          )}

          {currentView === 'detail' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <GroupCard
                  groupId="group-1"
                  groupName="Market Women Ajo"
                  memberCount={8}
                  maxMembers={10}
                  nextPayout="Feb 28, 2026"
                  totalContributions={4000}
                  status="active"
                />
                <GroupCard
                  groupId="group-2"
                  groupName="Tech Team Savings"
                  memberCount={5}
                  maxMembers={5}
                  nextPayout="Mar 5, 2026"
                  totalContributions={2500}
                  status="active"
                />
                <GroupCard
                  groupId="group-3"
                  groupName="Community Fund"
                  memberCount={10}
                  maxMembers={10}
                  nextPayout="Completed"
                  totalContributions={5000}
                  status="completed"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <MemberList
                    groupId="group-1"
                    members={[
                      {
                        address: 'GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                        joinedDate: '2024-01-15',
                        contributions: 1500,
                        status: 'active',
                      },
                      {
                        address: 'GBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB',
                        joinedDate: '2024-01-20',
                        contributions: 1500,
                        status: 'active',
                      },
                    ]}
                  />
                </div>

                <ContributionForm groupId="group-1" contributionAmount={500} />
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-gray-600 text-center">
              🚀 Frontend placeholder components created for Wave issues #19-35
            </p>
            <p className="text-sm text-gray-500 text-center mt-2">
              See components in src/components/ for implementation details
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
