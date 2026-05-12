'use client'

import { Download, Github, Linkedin, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { HomeSectionLink } from '@/components/home-section-link'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar when scrolled down 100px
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent
      ${scrolled 
        ? 'dark:bg-black/40 bg-white/70 backdrop-blur-md' 
        : 'dark:bg-black/0 bg-white/0 backdrop-blur-none'
      }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <HomeSectionLink
          sectionId="hero"
          className={`text-xl md:text-2xl font-bold transition-colors duration-300 leading-tight text-left whitespace-normal
            ${scrolled ? 'text-accent' : 'text-white'}`}
        >
          <span className="block md:inline">Julien G.</span>
          <span className="block md:inline md:ml-1">Manana</span>
        </HomeSectionLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <HomeSectionLink
            sectionId="about"
            className={`text-sm font-medium transition-colors duration-300 hover:text-accent
              ${scrolled ? 'text-black dark:text-white' : 'text-white'}`}
          >
            About
          </HomeSectionLink>
          <HomeSectionLink
            sectionId="experience"
            className={`text-sm font-medium transition-colors duration-300 hover:text-accent
              ${scrolled ? 'text-black dark:text-white' : 'text-white'}`}
          >
            Experience
          </HomeSectionLink>
          <a
            href="/projects"
            className={`text-sm font-medium transition-colors duration-300 hover:text-accent
              ${scrolled ? 'text-black dark:text-white' : 'text-white'}`}
          >
            Projects
          </a>
          <HomeSectionLink
            sectionId="skills"
            className={`text-sm font-medium transition-colors duration-300 hover:text-accent
              ${scrolled ? 'text-black dark:text-white' : 'text-white'}`}
          >
            Skills
          </HomeSectionLink>
          <HomeSectionLink
            sectionId="contact"
            className={`text-sm font-medium transition-colors duration-300 hover:text-accent
              ${scrolled ? 'text-black dark:text-white' : 'text-white'}`}
          >
            Contact
          </HomeSectionLink>
          <a
            href="/JULIEN-GLORY-MANANA-Resume.pdf"
            download
            className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300 hover:text-accent
              ${scrolled ? 'text-black dark:text-white' : 'text-white'}`}
          >
            CV
            <Download size={16} />
          </a>
          <div className={`flex items-center gap-4 ml-4 pl-4 border-l transition-colors duration-300
            ${scrolled ? 'border-black/20 dark:border-white/20' : 'border-white/20'}`}>
            <a
              href="https://github.com/Julien-G-Man"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 hover:text-accent
                ${scrolled ? 'text-black dark:text-white' : 'text-white'}`}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/julien-glory-manana"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 hover:text-accent
                ${scrolled ? 'text-black dark:text-white' : 'text-white'}`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden transition-colors duration-300 hover:text-accent
            ${scrolled ? 'text-black dark:text-white' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-zinc-950">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <HomeSectionLink
              sectionId="about"
              onNavigate={() => setIsOpen(false)}
              className="text-sm font-medium hover:text-accent transition-colors text-left text-white"
            >
              About
            </HomeSectionLink>
            <HomeSectionLink
              sectionId="experience"
              onNavigate={() => setIsOpen(false)}
              className="text-sm font-medium hover:text-accent transition-colors text-left text-white"
            >
              Experience
            </HomeSectionLink>
            <a
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium hover:text-accent transition-colors text-left text-white"
            >
              Projects
            </a>
            <HomeSectionLink
              sectionId="skills"
              onNavigate={() => setIsOpen(false)}
              className="text-sm font-medium hover:text-accent transition-colors text-left text-white"
            >
              Skills
            </HomeSectionLink>
            <HomeSectionLink
              sectionId="contact"
              onNavigate={() => setIsOpen(false)}
              className="text-sm font-medium hover:text-accent transition-colors text-left text-white"
            >
              Contact
            </HomeSectionLink>
            <a
              href="/JULIEN-GLORY-MANANA-Resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors text-left text-white"
            >
              Download CV
              <Download size={16} />
            </a>
            <div className="flex items-center gap-4 pt-2 border-t border-white/10">
              <a
                href="https://github.com/Julien-G-Man"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors text-white"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/julien-glory-manana"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors text-white"
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
