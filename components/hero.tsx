'use client'

import { ArrowRight } from 'lucide-react'

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 overflow-hidden bg-background"
    >
      {/* Background image as an absolutely-positioned <img> to avoid tiling */}
      <img
        src="/hero.jpg"
        alt="Hero background featuring abstract technology imagery behind Julien Glory Manana"
        className="absolute inset-0 w-full h-full object-cover object-[25%_center] md:object-[82%_55%] lg:object-[72%_35%]"
        style={{ pointerEvents: 'none' }}
      />

      {/* Dark gradient overlay from left to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
          {/* Content */}
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur rounded-full border border-white/20">
                <span className="text-xs font-medium text-white dark:text-yellow-300">Available for opportunities</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Julien Glory <span className="text-accent dark:text-yellow-300">Manana</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Computer Science student at KNUST, focused on building and experimenting with applied AI systems. I create intelligent solutions that bridge AI capabilities with real-world applications.
              </p>
            </div>

            {/* Key Details */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-accent dark:bg-yellow-300 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/70">Location</p>
                  <p className="font-medium text-white">Kumasi, Ghana</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-accent dark:bg-yellow-300 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground">Focus</p>
                  <p className="font-medium text-foreground">Backend Dev</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-accent dark:bg-yellow-300 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/70">Status</p>
                  <p className="font-medium text-white">1 Year in Tech</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent dark:bg-yellow-300 text-white dark:text-black font-medium rounded-lg hover:bg-red-900 dark:hover:bg-yellow-400 transition-colors group"
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
