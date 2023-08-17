'use client'

import { useTheme } from "@/hooks/contexts/theme"

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Portfolio</h1>
      <button onClick={toggleTheme}>Theme: {theme}</button>
    </main>
  )
}
