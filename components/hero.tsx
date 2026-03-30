'use client'

import { ArrowRight, Download } from 'lucide-react'

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
        className="absolute inset-0 h-full w-full object-cover object-[20%_top] lg:inset-y-0 lg:right-0 lg:left-auto lg:w-[72%] lg:object-[52%_35%]"
        style={{ pointerEvents: 'none' }}
      />

      {/* Dark gradient overlay from left to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent via-[65%] to-transparent z-10 lg:from-black/96 lg:via-black/78 lg:via-[15%]" />

      {/* Desktop edge fade so the image can start later without looking abrupt */}
      <div className="absolute inset-y-0 left-0 hidden lg:block w-[44%] bg-gradient-to-r from-black via-black/95 via-[72%] to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
          {/* Content */}
          <div className="max-w-xl space-y-6 sm:space-y-8 lg:max-w-2xl">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur rounded-full border border-white/20">
                <span className="text-xs font-medium text-white dark:text-yellow-300">Available for opportunities</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Julien Glory <span className="text-accent dark:text-yellow-300">Manana</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                Computer Science student at KNUST, focused on building and experimenting with applied AI systems. I create intelligent solutions that bridge AI capabilities with real-world applications.
              </p>
            </div>

            {/* Key Details */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-accent dark:bg-yellow-300 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium text-white">Kumasi, Ghana</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-accent dark:bg-yellow-300 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground">Focus</p>
                  <p className="font-medium text-white">Backend Dev</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-accent dark:bg-yellow-300 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground">Status</p>
                  <p className="font-medium text-white">1 Year in Tech</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 bg-accent dark:bg-yellow-300 text-white dark:text-black font-medium rounded-lg transition-colors group hero-btn"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/JULIEN-GLORY-MANANA-Resume.pdf"
                download
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Download CV
                <Download size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
