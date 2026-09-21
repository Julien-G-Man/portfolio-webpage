'use client'

import { Github, Linkedin, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react'
import { HomeSectionLink } from '@/components/home-section-link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/15 bg-[#252525] text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Julien G. Manana</h3>
            <p className="text-sm leading-relaxed text-white/65">
              Building intelligent AI systems and backend applications that make a real impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-bold text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <HomeSectionLink
                  sectionId="about"
                    className="inline-flex items-center gap-1 text-white/65 transition-colors hover:text-accent"
                >
                  About
                </HomeSectionLink>
              </li>
              <li>
                <HomeSectionLink
                  sectionId="experience"
                    className="inline-flex items-center gap-1 text-white/65 transition-colors hover:text-accent"
                >
                  Experience
                </HomeSectionLink>
              </li>
              <li>
                <a
                  href="/projects"
                  className="inline-flex items-center gap-1 text-white/65 transition-colors hover:text-accent"
                >
                  Projects
                </a>
              </li>
              <li>
                <HomeSectionLink
                  sectionId="contact"
                    className="inline-flex items-center gap-1 text-white/65 transition-colors hover:text-accent"
                >
                  Contact
                </HomeSectionLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-bold text-white">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:juliengmanana@gmail.com"
                className="flex items-center gap-2 text-white/65 transition-colors hover:text-accent"
              >
                <Mail size={16} />
                Email
              </a>
              <a
                href="https://wa.me/2348165113449"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/65 transition-colors hover:text-accent"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="https://linkedin.com/in/julien-glory-manana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/65 transition-colors hover:text-accent"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Julien-G-Man"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/65 transition-colors hover:text-accent"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-sm sm:flex-row">
          <p className="text-white/65">
            Copyright {currentYear} Julien Glory Manana. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Julien-G-Man"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/julien-glory-manana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://facebook.com/julien.g.manana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 transition-colors hover:text-accent"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com/julien_g_manana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 transition-colors hover:text-accent"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/2348165113449"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 transition-colors hover:text-accent"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="mailto:juliengmanana@gmail.com"
              className="text-white/65 transition-colors hover:text-accent"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
