'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Code2, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

export function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)
  const [showLeftBtn, setShowLeftBtn] = useState(false)
  const [showRightBtn, setShowRightBtn] = useState(true)

  const featuredProjects = [
    {
      id: 1,
      title: '10-Day AI/ML Engineering & Agentic Systems Sprint',
      subtitle: 'AI/ML and Agents',
      description: 'Hands-on sprint covering FastAPI, LLM workflows, RAG pipelines, model training, and deployment practices from NGOT Giants.',
      technologies: ['Python', 'FastAPI', 'OpenAI', 'RAG', 'LangChain'],
      github: 'https://github.com/Julien-G-Man/10-Day-AI-ML-and-Agentic-Systems-Sprint',
      live: '#',
      image: '/agent-left.jpeg'
    },
    {
      id: 2,
      title: 'Lamla AI',
      subtitle: 'AI-Powered Study Platform',
      description: 'Full-stack platform generating personalized quizzes, flashcards, and AI explanations from student notes.',
      technologies: ['Python', 'Django', 'React', 'OpenAI', 'Claude'],
      github: 'https://github.com/Julien-G-Man/lamla.ai',
      live: 'https://lamla-ai.vercel.app',
      image: '/lamla_home.jpeg'
    },
    {
      id: 3,
      title: 'VeriMed',
      subtitle: 'Medicine Authenticity Risk Assessment',
      description: 'Mobile-friendly app analyzing medicine packaging images against FDA datasets for genuine vs suspicious classification.',
      technologies: ['FastAPI', 'Next.js', 'OpenCV', 'PostgreSQL'],
      github: 'https://github.com/Julien-G-Man/verimed',
      live: 'https://verimed-web.netlify.app',
      image: '/verimed_hero.png'
    }
  ]

  const scroll = (direction: 'left' | 'right') => {
    const isMobile = window.innerWidth < 768
    const container = isMobile ? mobileRef.current : containerRef.current
    if (!container) return

    // Prefer measuring a card element for precise scrolling
    const cardEl = container.querySelector('[data-card]') as HTMLElement | null
    const cardWidth = cardEl ? cardEl.clientWidth : Math.round(container.clientWidth * 0.5)

    const amount = cardWidth

    if (direction === 'right') {
      container.scrollBy({ left: amount, behavior: 'smooth' })
    } else {
      container.scrollBy({ left: -amount, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const desktop = containerRef.current
    const mobile = mobileRef.current

    const updateButtons = () => {
      const desktopLeft = desktop ? desktop.scrollLeft > 0 : false
      const mobileLeft = mobile ? mobile.scrollLeft > 0 : false
      const desktopRight = desktop ? desktop.scrollLeft < desktop.scrollWidth - desktop.clientWidth - 10 : false
      const mobileRight = mobile ? mobile.scrollLeft < mobile.scrollWidth - mobile.clientWidth - 10 : false

      setShowLeftBtn(desktopLeft || mobileLeft)
      setShowRightBtn(desktopRight || mobileRight)
    }

    if (desktop) desktop.addEventListener('scroll', updateButtons)
    if (mobile) mobile.addEventListener('scroll', updateButtons)
    window.addEventListener('resize', updateButtons)
    updateButtons()

    return () => {
      if (desktop) desktop.removeEventListener('scroll', updateButtons)
      if (mobile) mobile.removeEventListener('scroll', updateButtons)
      window.removeEventListener('resize', updateButtons)
    }
  }, [])

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary rounded-full border border-border mb-4">
            <Code2 size={16} className="text-accent" />
            <span className="text-xs font-medium text-accent">Featured Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground">Featured projects showcasing AI, backend and full-stack development</p>
        </div>

        {/* Featured Projects Container */}
        <div className="relative group mb-12">
          {/* Desktop Horizontal Scroll */}
          <div
            ref={containerRef}
            className="hidden md:flex gap-4 overflow-x-auto scroll-smooth px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredProjects.map((project) => (
              <div key={project.id} data-card className="flex-shrink-0 w-full md:w-1/2 flex">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Desktop Scroll Buttons */}
          {showLeftBtn && (
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-accent hover:bg-accent/90 text-background rounded-full transition-all duration-300 shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {showRightBtn && (
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-accent hover:bg-accent/90 text-background rounded-full transition-all duration-300 shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Mobile Horizontal Scroll */}
          <div
            ref={mobileRef}
            className="md:hidden flex gap-6 overflow-x-auto scroll-smooth pb-4 relative"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredProjects.map((project) => (
                <div key={project.id} data-card className="flex-shrink-0 w-full max-w-sm flex">
                  <ProjectCard project={project} />
                </div>
            ))}
          </div>

          {/* Mobile Scroll Buttons */}
          {showLeftBtn && (
            <button
              onClick={() => scroll('left')}
              className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-accent hover:bg-accent/90 text-background rounded-full transition-all duration-300 shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {showRightBtn && (
            <button
              onClick={() => scroll('right')}
              className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-accent hover:bg-accent/90 text-background rounded-full transition-all duration-300 shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* View All Button */}
        <div className="flex justify-center max-w-6xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent/90 text-background font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            View All Projects
            <ExternalLink size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="group relative w-full bg-background border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 flex flex-col">
      {/* Project Image */}
      <div className="relative aspect-video md:aspect-[3/2] overflow-hidden bg-black">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
            project.id === 3 ? 'object-left' : 'object-center'
          }`}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Links on Top Left */}
        <div className="absolute top-4 left-4 flex gap-3 z-10">
          {project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-accent hover:bg-accent/90 text-background rounded-full transition-colors shadow-md"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-accent hover:bg-accent/90 text-background rounded-full transition-colors shadow-md"
              aria-label="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="relative p-6 flex-1 flex min-h-[260px] flex-col">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
          <p className="text-accent font-medium text-sm">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, idx: number) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-1 bg-secondary border border-border rounded-lg text-foreground/70 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
