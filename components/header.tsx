import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#" className="text-2xl font-bold text-accent">
          JGM
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Projects
          </a>
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
            <a
              href="https://github.com/Julien-G-Man"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/julien-glory-manana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:juliengmanana@gmail.com"
              className="text-foreground hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
