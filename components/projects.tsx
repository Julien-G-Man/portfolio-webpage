'use client'

import { Code2, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Lamla AI',
    subtitle: 'AI-Powered Study Platform',
    description: 'A full-stack application that helps students generate personalized quizzes, flashcards, and AI explanations from their notes using OpenAI APIs.',
    technologies: ['Python', 'Django', 'FastAPI', 'React', 'Azure OpenAI', 'PostgreSQL'],
    highlights: [
      'GPT-4o-mini integration for intelligent content generation',
      'Django core logic and API gateway',
      'Async FastAPI service for low-latency AI interactions',
      'User authentication and persistent profiles',
      'File upload and processing system',
      'Quiz and flashcards generation',
      'Deployed on Render (backend) and Vercel (frontend)'
    ],
    links: {
      github: 'https://github.com/Julien-G-Man/lamla.ai',
      live: 'https://lamla-ai.vercel.app'
    }
  },
  {
    title: 'Tena AI',
    subtitle: 'Multi-Server Conversational AI Backend',
    description: 'Collaborated on the backend for a conversational AI platform with secure authentication and scalable architecture.',
    technologies: ['Python', 'Flask', 'FastAPI', 'Azure OpenAI', 'PostgreSQL'],
    highlights: [
      'REST API with Flask for user management and auth',
      'Async FastAPI service for low-latency AI interactions',
      'PostgreSQL with SQLAlchemy ORM',
      'Role-based access control and session authentication'
    ],
    links: {
      github: 'https://github.com/Julien-G-Man',
      live: 'https://tenaai.vercel.app'
    }
  },
  {
    title: 'Customer Support Chatbot',
    subtitle: 'Internship Project',
    description: 'Context-aware customer support chatbot with Azure OpenAI integration and knowledge chunking system.',
    technologies: ['FastAPI', 'PostgreSQL', 'Azure OpenAI', 'React', 'REST APIs'],
    highlights: [
      'Topic-based knowledge chunking for structured responses',
      'Keyword-based context retrieval with fallback mechanisms',
      'Async endpoints with semaphore-based concurrency',
      'Reduced hallucination through context injection'
    ],
    links: {
      github: 'https://github.com/Julien-G-Man',
      live: '#'
    }
  },
  {
    title: 'Python Developer Projects',
    subtitle: 'Practice Projects',
    description: 'A collection of python codes and projects I have be writing since the start of my Python coding journey. \nThis code base will never stop growing as long as I keep learning',
    technologies: ['Python', 'Numpy', 'Pandas', 'OpenCV', 'FastAPI', 'Flask', 'SK-Learn', 'OpenAI', 'Pydantic'],
    highlights: [
      'Data Structure and Algorithms', 
      'Object Oriented Programming',
      'Python Libraries', 
      'Python Frameworks', 
      'LeetCode Problems and solutions',
      'File management',
      'REST APIs with Python',
      'LLM APIs with Python',
      'Computer Vision',
      'Machine Learning',
      'Mathematical Programming'
    ],
    links: {
      github: 'https://github.com/Julien-G-Man/python-developer',
      live: '#'
    }
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary rounded-full border border-border mb-4">
            <Code2 size={16} className="text-accent" />
            <span className="text-xs font-medium text-accent">Featured Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground">Real-world applications combining AI, backend or full-stack development, and scalable architecture</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-background border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative p-8 lg:p-10">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-lg text-accent font-medium">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-foreground/80 text-lg leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-8 space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-2" />
                      <p className="text-foreground/70">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 bg-secondary border border-border rounded-lg text-foreground/70 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium group/link"
                  >
                    <Github size={18} />
                    GitHub
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  {project.links.live !== '#' && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium group/link"
                    >
                      Live Demo
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
