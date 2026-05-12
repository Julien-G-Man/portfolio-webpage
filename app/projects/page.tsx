'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { Code2, ExternalLink, Github, ArrowRight, Filter, X } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { ScrollReveal } from '@/components/scroll-reveal'
import type { ReactNode } from 'react'

type Project = {
  title: string
  subtitle: string
  category: string
  description: ReactNode
  technologies: string[]
  highlights: string[]
  links: {
    github: string
    live: string
  }
  githubLabel?: string
}

const projects: Project[] = [
  {
    title: '10-Day AI/ML Engineering & Agentic Systems Sprint',
    subtitle: 'AI/ML and Agents',
    category: 'AI/ML and Agents',
    description: (
      <>
        A hands-on sprint repository from a 10-day AI/ML and agentic systems program at{' '}
        <a
          href="https://www.linkedin.com/company/next-generation-of-tech-ngot-giants"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/80 transition-colors font-medium"
        >
          NGOT Giants
        </a>
        , covering practical FastAPI apps, LLM workflows, RAG pipelines, model training, and
        deployment-ready project structure.
      </>
    ),
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'RAG', 'LoRA', 'MLflow', 'Pinecone', 'LlamaIndex', 'Tavily', 'LangChain', 'Agentic Systems', 'Docker'],
    highlights: [
      'telecomm-api: telecom complaint analysis API with functional calling and structured LLM output',
      'biohealth-finetune: QLoRA fine-tuning and inference demos for biomedical NER',
      'eta-predictor: logistics ETA service with validated inputs and model-backed predictions',
      'medical-literature-rag: medical QA API grounded in retrieved guideline sources',
      'rag-system: experimental RAG work for chunking, embeddings, retrieval, and OpenAI-based generation',
      'product-recommender: semantic product discovery in an eCommerce context, using vector similarity instead of keyword search, Pinecone-managed retrieval, and Pydantic V2 plus Poetry for modern Python tooling',
      'agent-systems: LangChain-based agents including a SpaceTech Satellite Data Summariser and an eCommerce smart shopper'
    ],
    links: {
      github: 'https://github.com/Julien-G-Man/10-Day-AI-ML-and-Agentic-Systems-Sprint',
      live: '#'
    }
  },
  {
    title: 'Lamla AI',
    subtitle: 'AI-Powered Study Platform',
    category: 'Education',
    description: 'A full-stack application that helps students generate personalized quizzes, flashcards, and AI explanations from their notes using OpenAI and Claude APIs.',
    technologies: ['Python', 'Django', 'FastAPI', 'React', 'OpenAI', 'Claude', 'PostgreSQL'],
    highlights: [
      'GPT-4o-mini integration for intelligent content generation',
      'Django core logic and API gateway',
      'Async FastAPI service for low-latency AI interactions',
      'User authentication and persistent profiles',
      'File upload and processing system',
      'Quiz and flashcards generation',
      'Deployed on Render (backend) and Vercel (frontend)',
      'I worked on the backend and AI integration, my friend handled the frontend'
    ],
    links: {
      github: 'https://github.com/Julien-G-Man/lamla.ai',
      live: 'https://lamla-ai.vercel.app'
    }
  },
  {
    title: 'VeriMed',
    subtitle: 'AI-Powered Medicine Authenticity Risk Assessment',
    category: 'Health Tech',
    description: 'A mobile-friendly web application that helps users assess whether a medicine is likely genuine, suspicious, or unverifiable by analyzing packaging images against FDA reference dataset.',
    technologies: ['FastAPI', 'Next.js', 'OpenCV', 'EasyOCR', 'pyzbar', 'rapidfuzz', 'PostgreSQL'],
    highlights: [
      'Three-image verification flow: front pack, back pack, and barcode or QR close-up',
      'OCR, barcode decoding, and fuzzy matching combined in a rule-based scoring pipeline',
      'Weighted risk classification with plain-language explanations and next-step guidance',
      'Reference-based assessment using curated medicine registry data rather than barcode-only checks',
      'Follow-up assistant with persistent Postgres conversation history tied to verification results',
      'Mobile-first full-stack architecture built for consumers, vendors, and hackathon demos'
    ],
    links: {
      github: 'https://github.com/Julien-G-Man/verimed',
      live: 'https://verimed-web.netlify.app'
    }
  },
  {
    title: 'Tool-Augmented Chatbot',
    subtitle: 'LLM Tool/Function-Calling Database Query Agent',
    category: 'LLM Tools',
    description: 'Full-stack learning project demonstrating LLM tool/function-calling by connecting a chatbot to a real SQL Server database. Instead of hallucinating answers, the AI assistant queries actual database tables through controlled backend functions, then summarizes results in natural language.',
    technologies: ['FastAPI', 'React', 'Vite', 'SQLAlchemy', 'pyodbc', 'OpenAI-compatible SDK', 'SQL Server', 'SQLite'],
    highlights: [
      'LLM tool-calling: AI model decides when and which database function to invoke',
      'Connects to real SQL Server (CompanyDB) with 6 predefined database functions',
      'Maintains conversation context across multiple turns (last 5 messages in SQLite)',
      'Rich response rendering with Markdown tables and lists support',
      'Six available tools: list departments/projects/employees, filter by project, get project lead, get dependents',
      'Backend: FastAPI with tool handler and SQL query execution',
      'Frontend: React + Vite chat interface for real-time interaction'
    ],
    links: {
      github: 'https://github.com/Julien-G-Man/tool-augmented-chatbot',
      live: '#'
    }
  },
  {
    title: 'ScholarAid',
    subtitle: 'Scholarship Management & Application Platform',
    category: 'Education',
    description: 'A full-stack platform that helps students discover scholarships and get AI assistance on their applications, while giving admins intelligent tools to ingest and manage scholarship data at scale.',
    technologies: ['Python', 'Django', 'Next.js', 'Claude', 'DRF', 'JWT', 'BeautifulSoup4', 'PostgreSQL', 'Bootstrap 5'],
    highlights: [
      'Scholarship listings with search and filter across curated opportunities',
      'AI application review  -  submit essays for automated feedback powered by Claude',
      'AI scholarship intake (admin)  -  paste a URL or raw text; Claude extracts all fields',
      'Scraper pipeline (admin)  -  bulk-scrape portals, Claude cleans data, download CSV, review, re-upload, ingest',
      'User dashboard to track deadlines, applications, and progress',
      'Secure admin tools for managing scholarships and reviewing applicants',
      'JWT authentication via SimpleJWT  -  SQLite in dev, PostgreSQL in prod'
    ],
    links: {
      github: 'https://github.com/Julien-G-Man/ScholarAid',
      live: 'https://scholar-aid.netlify.app'
    }
  },
  {
    title: 'Tena AI',
    subtitle: 'Conversational AI Backend',
    category: 'LLM Tools',
    description: 'Collaborated on the backend for a conversational AI platform with secure authentication and scalable architecture.',
    technologies: ['Python', 'Flask', 'Azure OpenAI', 'PostgreSQL'],
    highlights: [
      'REST API with Flask for user management and auth',
      'Async service for low-latency AI interactions',
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
    subtitle: 'MTN Mobile Money Congo  -  Internship Project',
    category: 'Fintech',
    description: 'Built during my internship at MTN Mobile Money Congo. A customer support chatbot covering 15 MoMo service topics  -  XtraCash, MoMo Advance, account management, and more. Uses a three-layer retrieval system to keep responses accurate and grounded: semantic search first, keyword fallback second, and full context injection as a final safety net against hallucinations.',
    technologies: ['FastAPI', 'PostgreSQL', 'Azure OpenAI', 'React', 'REST APIs'],
    highlights: [
      '15 MoMo service topics chunked  -  XtraCash, MoMo Advance, account management, and more',
      'Three-layer retrieval: semantic search -> keyword fallback -> full context injection',
      'Full context injection as last resort to eliminate hallucinations',
      'Async endpoints with semaphore-based concurrency',
      'Collaborated with product, BI, and engineering teams on query coverage'
    ],
    links: {
      github: '#',
      live: '#'
    },
    githubLabel: 'GitHub Not Available'
  },
  {
    title: 'Python Developer Projects',
    subtitle: 'Practice Projects',
    category: 'Practice Projects',
    description: 'A collection of Python code and projects I have been writing since the start of my Python coding journey. \nA lot there looks messy by the way, it includes my helloWorld("print") as well :) \nThis code base will never stop growing as long as I keep learning',
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
  {
    title: 'AI Engineering Journey',
    subtitle: 'Hands-on Personal AI Engineering Curriculum (In Progress, started April 2026)',
    category: 'AI/ML and Agents',
    description: 'A structured learning repo documenting my path through AI engineering, from LLM fundamentals and prompt patterns to RAG pipelines, agents, MCP, deployment, and LangChain.',
    technologies: ['Python', 'OpenAI', 'Anthropic', 'ChromaDB', 'Weaviate', 'Pinecone', 'FastAPI', 'BentoML', 'Docker', 'LangChain', 'LangGraph', 'MCP'],
    highlights: [
      'LLM fundamentals: raw API calls, context windows, structured outputs, and prompt patterns',
      'RAG pipeline work: embeddings, chunking, vector stores, and retrieval logic',
      'Agent systems: tool calling, multi-step reasoning, and memory vs stateless design',
      'MCP exploration: context and memory management across systems with tool servers',
      'Deployment focus: serving models and shipping AI apps with FastAPI and BentoML',
      'LangChain study: chains, memory, LangGraph, and agent orchestration'
    ],
    links: {
      github: 'https://github.com/Julien-G-Man/ai-engineering',
      live: '#'
    }
  },
]

const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return selectedCategory === 'All' || project.category === selectedCategory
    })
  }, [selectedCategory])

  const hasActiveFilters = selectedCategory !== 'All'

  const clearFilters = () => {
    setSelectedCategory('All')
  }

  return (
    <main className="bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen flex items-end overflow-hidden bg-black pt-20">
        <Image
          src="/agent-right.jpeg"
          alt="Projects hero background"
          fill
          className="object-cover object-center opacity-45"
          priority

        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 w-full p-6 md:p-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/50 rounded-full border border-border/50 mb-6 backdrop-blur-sm">
              <Code2 size={16} className="text-accent" />
              <span className="text-xs font-medium text-accent">Featured Work</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              All Projects
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl">
              Real-world applications combining AI, backend or full-stack development, and scalable architecture
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-10">
          <div className="space-y-6 rounded-xl border border-border bg-background/80 p-5 shadow-sm backdrop-blur sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  <Filter size={16} />
                  Project Filters
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Showing {filteredProjects.length} of {projects.length} projects
                </p>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/50 sm:w-auto"
                >
                  <X size={16} />
                  Clear
                </button>
              )}
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Project categories">
              {categories.map((category) => {
                const isSelected = selectedCategory === category

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`h-11 flex-shrink-0 rounded-lg border px-4 text-sm font-medium transition-colors ${
                      isSelected
                        ? 'border-accent bg-accent text-background'
                        : 'border-border bg-secondary text-foreground hover:border-accent/50'
                    }`}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={`${project.title}-${project.category}`} delay={Math.min(index * 70, 280)}>
              <div
                className="group relative bg-background border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="absolute top-4 right-4 text-foreground/30 font-mono font-extrabold text-4xl md:text-5xl select-none pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative p-8 lg:p-10">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{project.title}</h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-lg text-accent font-medium">{project.subtitle}</p>
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                        {project.category}
                      </span>
                    </div>
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
                    {project.links.github !== '#' ? (
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
                    ) : project.githubLabel ? (
                      <span className="inline-flex items-center gap-2 text-foreground/60 font-medium">
                        <Github size={18} />
                        {project.githubLabel}
                      </span>
                    ) : null}
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
              </ScrollReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <ScrollReveal>
            <div className="rounded-xl border border-border bg-background p-10 text-center">
              <h2 className="text-2xl font-bold text-foreground">No projects found</h2>
              <p className="mx-auto mt-2 max-w-md text-muted-foreground">
                Try a different category or clear the filter.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-background transition-colors hover:bg-accent/90"
              >
                <X size={16} />
                Clear Filters
              </button>
            </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background border-t border-border">
        <ScrollReveal className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-secondary hover:bg-secondary/80 border border-border text-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            <ArrowRight size={18} className="rotate-180" />
            Home
          </Link>
          <a
            href="/?section=contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent/90 text-background font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Let's Connect
            <ArrowRight size={18} />
          </a>
        </div>
        </ScrollReveal>
      </section>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
      <ThemeToggle />
    </main>
  )
}

