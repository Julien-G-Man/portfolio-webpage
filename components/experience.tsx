'use client'

import { Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Project Lead & Product Engineer',
    company: 'Project ReL — Enactus KNUST',
    period: '08/2026  -  Present',
    location: 'Kumasi, Ghana',
    description: 'Leading product and technical development of an accessible educational platform for Deaf and hard-of-hearing students. The work combines accessible learning materials, sign-language learning support, AI-powered tutoring, and a focus on educational inclusion.',
    highlights: ['Technical Leadership', 'Product Leadership', 'Accessible EdTech', 'Sign-Language Learning', 'AI Tutoring', 'Educational Inclusion', 'Enactus KNUST National Champion']
  },
  {
    title: 'AI/ML Engineering Fellow',
    company: 'Next Generation of Tech Giants (nGOT Giants)',
    period: '02/2026  -  Present',
    location: 'Kumasi, Ghana',
    description: 'Hands-on engineering work across retrieval-augmented generation, semantic retrieval and recommendation systems, intelligent agents, and applied machine learning projects. I have also run fine-tuning experiments using LoRA and QLoRA approaches while learning how these systems behave in practice.',
    highlights: ['RAG', 'Semantic Retrieval', 'Recommendation Systems', 'Intelligent Agents', 'LoRA & QLoRA', 'Applied Machine Learning', 'Software Engineering']
  },
  {
    title: 'Intern',
    company: 'MTN Mobile Money Congo B.',
    period: '11/2025  -  12/2025',
    location: 'Brazzaville, Republic of Congo',
    description: 'Developed a prototype AI-powered customer-support assistant to help users access information about Mobile Money products and services. The work combined intelligent information retrieval with contextual responses across approximately 15 product and service topics.',
    highlights: ['AI Product Prototype', 'Customer Support', 'Information Retrieval', 'Contextual Responses', 'Mobile Money', 'Cross-functional Collaboration']
  },
  {
    title: 'Deputy Head of Technology',
    company: 'Enactus KNUST',
    period: '2025  -  2026',
    location: 'Kumasi, Ghana',
    description: 'Part of the tech leadership team at Enactus KNUST, supporting the Head of Technology in managing the chapter\'s tech operations. Own the automation and internal tooling side; building systems for mass emails, project data, and member management. Contributed to the chapter website and support other divisions and projects with tech solutions. Contributed to Enactus KNUST winning the national championship in 2026.',
    highlights: ['Team Leadership', 'Internal Tooling', 'Automation Tools', 'Website Development', 'Cross-division Support']
  },
  {
    title: 'International Relations Officer',
    company: 'Science Students\' Association (SCISA) - KNUST',
    period: '01/2026  -  09/2026',
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
              <div className="bg-secondary/30 rounded-none p-6 group-hover:bg-secondary/50 transition-colors border border-border group-hover:border-accent/30">
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
                      className="relative pl-3 text-xs font-medium text-foreground/75 before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:bg-accent"
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
