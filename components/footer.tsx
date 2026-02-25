'use client'

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">JGM</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building intelligent AI systems and full-stack applications that make a real impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="mailto:juliengmanana@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:juliengmanana@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
              >
                <Mail size={16} />
                juliengmanana@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/julien-glory-manana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
              >
                <Linkedin size={16} />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/Julien-G-Man"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
              >
                <Github size={16} />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-muted-foreground">
            © {currentYear} Julien Glory Manan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Julien-G-Man"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/julien-glory-manana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:juliengmanana@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
