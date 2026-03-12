'use client'

import { Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Software Engineering Trainee',
    company: 'Next Generation of Tech Giants (nGOT Giants)',
    period: '02/2026 – Present',
    location: 'Kumasi, Ghana',
    description: 'Part of the engineering team at an organisation dedicated to developing tech talent across Africa. Involved in building internal tools for the team and gaining exposure to research-driven innovation.',
    highlights: ['Internal Tooling', 'Research-Driven Innovation', 'Engineering Team', 'Tech Talent Development']
  },
  {
    title: 'Intern',
    company: 'MTN Mobile Money Congo B.',
    period: '11/2025 – 12/2025',
    location: 'Brazzaville, Republic of Congo',
    description: 'Gained hands-on exposure to large-scale fintech operations, including MoMo internal systems, MoMo App, and MoMo Open APIs. Collaborated with product, BI, engineering, and operations teams.',
    highlights: ['Fintech Systems', 'Product Lifecycle', 'Cross-functional Collaboration']
  },
  {
    title: 'Deputy Head of Technology',
    company: 'Enactus KNUST',
    period: '2025 – 2026',
    location: 'Kumasi, Ghana',
    description: 'Developing and designing Enactus technology tools and platforms to help the team scale their impact.',
    highlights: ['Leadership', 'Tech Architecture', 'Team Coordination']
  },
  {
    title: 'International Relations Officer',
    company: 'Science Students\' Association (SCISA) - KNUST',
    period: '01/2026 – 09/2026',
    location: 'Kumasi, Ghana',
    description: 'Building international connections and representing the association.',
    highlights: ['Communication', 'Diplomacy', 'Networking']
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary rounded-full border border-border mb-4">
            <Briefcase size={16} className="text-accent" />
            <span className="text-xs font-medium text-accent">Professional Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">Roles and responsibilities that shaped my expertise</p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative pl-8 pb-8 border-l-2 border-border hover:border-accent transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-0 w-6 h-6 bg-background border-2 border-border group-hover:border-accent group-hover:bg-accent transition-all rounded-full" />

              {/* Content */}
              <div className="bg-secondary/30 rounded-lg p-6 group-hover:bg-secondary/50 transition-colors border border-border group-hover:border-accent/30">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>

                <p className="text-foreground/80 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/30"
                    >
                      {highlight}
                    </span>
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
