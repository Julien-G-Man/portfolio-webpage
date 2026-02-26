'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-context'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-accent text-accent-foreground hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}
