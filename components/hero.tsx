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
      {/* Dark gradient overlay from left to right - always dark */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
          {/* Content */}
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur rounded-full border border-white/20">
                <span className="text-xs font-medium text-white">Available for opportunities</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Julien Glory <span className="text-white">Manana</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Computer Science student at KNUST, focused on building and experimenting with applied AI systems. I create intelligent solutions that bridge AI capabilities with real-world applications.
              </p>
            </div>

            {/* Key Details */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-white rounded-full flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/70">Location</p>
                  <p className="font-medium text-white">Kumasi, Ghana</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-white rounded-full flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/70">Focus</p>
                  <p className="font-medium text-white">AI & Backend Dev</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-white rounded-full flex-shrink-0 mt-1" />
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors group"
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
