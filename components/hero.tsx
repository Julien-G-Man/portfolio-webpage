'use client'

import { ArrowRight } from 'lucide-react'

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      className="relative min-h-screen pt-24 overflow-hidden bg-background"
      style={{
        backgroundImage: 'url(/hero.jpg)',
        backgroundPosition: 'right center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark gradient overlay from left to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
          {/* Content */}
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary rounded-full border border-border">
                <span className="text-xs font-medium text-accent">Available for opportunities</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Julien Glory <span className="text-accent">Manana</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Computer Science student at KNUST, focused on building and experimenting with applied AI systems. I create intelligent solutions that bridge AI capabilities with real-world applications.
              </p>
            </div>

            {/* Key Details */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-accent rounded-full flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Kumasi, Ghana</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-accent rounded-full flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground">Focus</p>
                  <p className="font-medium text-foreground">AI & Backend Dev</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-accent rounded-full flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground">Status</p>
                  <p className="font-medium text-foreground">1 Year in Tech</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-yellow-500 transition-colors group"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
