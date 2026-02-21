'use client'

import { WalletConnector } from '@/components/WalletConnector'
import { useAuth } from '@/hooks/useAuth'
import Dashboard from './Dashboard'

export default function DashboardPage() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 40%, #f5f3ff 70%, #f8fafc 100%)' }}>
        <div className="max-w-md w-full px-6 animate-fade-in-up">
          <div className="text-center mb-8">
            <div className="empty-state-icon mb-4 animate-float">
              <svg className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold text-surface-900 tracking-tight">Connect Your Wallet</h1>
            <p className="mt-2 text-surface-500 text-sm">Connect your Stellar wallet to access your savings groups</p>
          </div>
          <div className="bg-white rounded-2xl border border-surface-200/80 p-6" style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.04)' }}>
            <WalletConnector />
          </div>
        </div>
      </div>
    )
  }

  return <Dashboard />
}
