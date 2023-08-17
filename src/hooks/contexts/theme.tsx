'use client'

import { createContext, useContext, useState } from 'react'

type ThemeValue = 'light' | 'dark'
type ThemeContext = {
  theme: ThemeValue
  setTheme: React.Dispatch<React.SetStateAction<ThemeValue>>
} | null

export const ThemeContext = createContext<ThemeContext>(null)

export function ThemeContextProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<ThemeValue>('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeContextProvider')
  }
  const toggleTheme = () => context?.setTheme(prev => prev === 'light' ? 'dark' : 'light')
  return { ...context, toggleTheme }
}