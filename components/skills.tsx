'use client'

import { Zap } from 'lucide-react'

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'C++', 'SQL'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    category: 'Core Skills',
    skills: ['FastAPI', 'PostgreSQL', 'REST APIs', 'LLM Integration', 'Backend Development'],
    color: 'from-cyan-500 to-cyan-600',
    mastered: true
  },
  {
    category: 'Backend Frameworks',
    skills: ['Django', 'Flask', 'SQLAlchemy', 'Async Programming', 'API Design'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    category: 'AI & ML',
    skills: ['Azure OpenAI', 'Prompt Engineering', 'AI Systems Design', 'Langchain', 'Vector Databases'],
    color: 'from-pink-500 to-pink-600'
  },
  {
    category: 'Databases & Tools',
    skills: ['PostgreSQL', 'MongoDB', 'Git', 'GitHub', 'CLI Tools'],
    color: 'from-green-500 to-green-600'
  },
  {
    category: 'Platforms & Deployment',
    skills: ['Azure', 'Render', 'Docker', 'Linux', 'Cloud Architecture'],
    color: 'from-orange-500 to-orange-600'
  }
]

export function Skills() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary rounded-full border border-border mb-4">
            <Zap size={16} className="text-accent" />
            <span className="text-xs font-medium text-accent">Technical Arsenal</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground">A comprehensive toolkit built through practical experience</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 overflow-hidden ${
                category.mastered 
                  ? 'bg-accent/10 border-accent/50' 
                  : 'bg-secondary/50 border-border'
              }`}
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <h3 className="text-lg font-bold text-accent">{category.category}</h3>
                  {category.mastered && (
                    <span className="px-2 py-1 text-xs font-bold text-accent-foreground bg-accent rounded">
                      Mastered
                    </span>
                  )}
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-foreground/80 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
