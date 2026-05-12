'use client'

import Image from 'next/image'
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'C++', 'SQL'],
    color: 'from-blue-500 to-blue-600',
    mastered: false,
    image: '/python-code.jpg'
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Django', 'Flask', 'PostgreSQL', 'SQL Server', 'SQLite', 'SQLAlchemy', 'pyodbc', 'REST APIs', 'Async Programming'],
    color: 'from-cyan-500 to-cyan-600',
    mastered: false,
    image: '/server.jpg'
  },
  {
    category: 'AI / ML',
    skills: ['OpenAI API', 'Claude API', 'Prompt Engineering', 'RAG (embeddings + retrieval)', 'Vector Databases (Pinecone)', 'LangChain', 'LlamaIndex', 'Agents basics'],
    color: 'from-pink-500 to-pink-600',
    mastered: false,
    image: '/ai_silicon.jpg'
  },
  {
    category: 'DevOps & Tools',
    skills: ['VS Code', 'Vercel', 'Render', 'Netlify', 'Git', 'GitHub', 'Poetry', 'Pydantic V2', 'CLI Tools'],
    color: 'from-green-500 to-green-600',
    mastered: false,
    image: '/github-profile.jpg'
  }
]

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftBtnRef = useRef<HTMLButtonElement>(null)
  const rightBtnRef = useRef<HTMLButtonElement>(null)
  const [showLeftBtn, setShowLeftBtn] = useState(false)
  const [showRightBtn, setShowRightBtn] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return
    const cards = containerRef.current.querySelectorAll('[data-skill-card]')
    const cardWidth = cards[0] ? (cards[0] as HTMLElement).clientWidth : Math.floor(containerRef.current.clientWidth / 3)
    
    if (direction === 'right') {
      containerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
    } else {
      containerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateButtons = () => {
      setShowLeftBtn(container.scrollLeft > 0)
      setShowRightBtn(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      )
    }

    container.addEventListener('scroll', updateButtons)
    updateButtons()

    return () => container.removeEventListener('scroll', updateButtons)
  }, [])

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary rounded-full border border-border mb-4">
            <Zap size={16} className="text-accent" />
            <span className="text-xs font-medium text-accent">Technical Arsenal</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Skills & Tools</h2>
          <p className="text-lg text-muted-foreground">What I've picked up so far — and keep adding to</p>
        </div>

        {/* Skills Horizontal Scroll Container */}
        <div className="relative group">
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-6 lg:px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {skillCategories.map((category, index) => (
              <div
                key={index}
                data-skill-card
                className="group/card relative min-h-[340px] min-w-[280px] md:min-w-0 md:flex-1 flex-shrink-0 border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={`${category.category} background`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-black/55 group-hover/card:bg-black/45 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/35 to-black/65" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <h3 className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-extrabold uppercase tracking-[0.2em] text-red-700 shadow-sm">
                      {category.category}
                    </h3>
                    {category.mastered && (
                      <span className="px-2 py-1 text-xs font-bold text-white bg-white/15 rounded border border-white/20 backdrop-blur-sm">
                        Mastered
                      </span>
                    )}
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                        <span className="text-white/90 font-medium drop-shadow-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Button */}
          {showLeftBtn && (
            <button
              ref={leftBtnRef}
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-accent hover:bg-accent/90 text-background rounded-full transition-all duration-300 shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Right Button */}
          {showRightBtn && (
            <button
              ref={rightBtnRef}
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-accent hover:bg-accent/90 text-background rounded-full transition-all duration-300 shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
