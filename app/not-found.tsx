'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { ArrowLeft, Home } from 'lucide-react'
import { HomeSectionLink } from '@/components/home-section-link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex items-center justify-center min-h-screen pt-20 px-6">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* 404 Number */}
          <div className="space-y-4">
            <div className="text-9xl md:text-[150px] font-bold bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
              404
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Page Not Found
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you may have mistyped the URL.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors duration-300"
            >
              <Home size={20} />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary border border-border text-foreground font-medium rounded-lg hover:border-accent/50 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-3">
              <HomeSectionLink sectionId="about" className="text-accent hover:text-accent/80 transition-colors">
                About
              </HomeSectionLink>
              <span className="text-border">•</span>
              <HomeSectionLink sectionId="projects" className="text-accent hover:text-accent/80 transition-colors">
                Projects
              </HomeSectionLink>
              <span className="text-border">•</span>
              <HomeSectionLink sectionId="skills" className="text-accent hover:text-accent/80 transition-colors">
                Skills
              </HomeSectionLink>
              <span className="text-border">•</span>
              <HomeSectionLink sectionId="contact" className="text-accent hover:text-accent/80 transition-colors">
                Contact
              </HomeSectionLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
