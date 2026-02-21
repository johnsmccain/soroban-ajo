'use client'

import React, { createContext, useContext } from 'react'
import { useAuth } from '../hooks/useAuth'
import type { AuthState, AuthActions } from '../types/auth'

type AuthContextType = AuthState & AuthActions

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}
