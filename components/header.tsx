'use client'

import Link from 'next/link'
import { Github, Linkedin, Menu, X, Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from './theme-context'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#" className="text-xl md:text-2xl font-bold text-accent">
          Julien G. Manana
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Projects
          </button>
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
            <button
              onClick={toggleTheme}
              className="text-foreground hover:text-accent transition-colors p-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://github.com/Julien-G-Man"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/julien-glory-manana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="text-foreground hover:text-accent transition-colors p-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors text-left"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors text-left"
            >
              Projects
            </button>
            <div className="flex items-center gap-4 pt-2 border-t border-border">
              <a
                href="https://github.com/Julien-G-Man"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/julien-glory-manana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
