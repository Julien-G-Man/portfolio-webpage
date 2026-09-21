import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const projectPages = {
  '10-day-ai-ml-engineering-agentic-systems-sprint': {
    title: '10-Day AI/ML Engineering & Agentic Systems Sprint',
    category: 'AI/ML and Agents',
    date: '2026',
    image: '/agent-right.jpeg',
    summary: 'A hands-on sprint turning AI and machine learning concepts into working APIs, retrieval systems, model workflows, and agentic applications.',
    description: 'This project collection documents a practical development sprint with nGOT Giants. The work moves from first principles to shipped systems, with an emphasis on grounding outputs, validating inputs, and building deployment-ready services.',
    highlights: ['Medical-literature RAG API grounded in retrieved guideline sources', 'QLoRA fine-tuning and inference experiments for biomedical NER', 'Telecom complaint analysis with function calling and structured output', 'Agent systems for satellite data summarisation and eCommerce assistance'],
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'RAG', 'LoRA', 'MLflow', 'Pinecone', 'LlamaIndex', 'LangChain', 'Docker'],
    github: 'https://github.com/Julien-G-Man/10-Day-AI-ML-and-Agentic-Systems-Sprint',
    live: '#'
  },
  ocasia: {
    title: 'Ocasia',
    category: 'Education',
    date: '2026',
    image: '/ai-tutor.jpg',
    summary: 'An AI-powered study platform that turns student notes into personalised quizzes, flashcards, and explanations.',
    description: 'Ocasia combines a Django application with an async AI service to help students study from their own material. I focused on backend architecture and the AI integration while collaborating with a friend on the frontend.',
    highlights: ['GPT-4o-mini content generation', 'Django core logic and API gateway', 'Async FastAPI service for AI interactions', 'Persistent profiles, uploads, quizzes, and flashcards'],
    technologies: ['Python', 'Django', 'FastAPI', 'React', 'PostgreSQL', 'RAG', 'Upstash Vector', 'Django Channels', 'Redis', 'OpenAI', 'OpenAI Embeddings', 'Claude', 'Paystack', 'Cloudinary'],
    github: 'https://github.com/Julien-G-Man/ocasia',
    live: 'https://ocasia.vercel.app'
  },
  verimed: {
    title: 'VeriMed',
    category: 'Health Tech',
    date: '2026',
    image: '/drugs-on-desk.jpg',
    summary: 'A mobile-friendly medicine authenticity risk assessment tool using image analysis, OCR, barcode decoding, and reference data.',
    description: 'VeriMed combines computer vision and reference-based matching to give users a plain-language assessment of whether medicine packaging appears genuine, suspicious, or unverifiable.',
    highlights: ['Three-image verification flow', 'OCR, barcode decoding, and fuzzy matching', 'Weighted risk classification with next-step guidance', 'Persistent assistant conversations tied to verification results'],
    technologies: ['FastAPI', 'Next.js', 'OpenCV', 'EasyOCR', 'pyzbar', 'rapidfuzz', 'PostgreSQL'],
    github: 'https://github.com/Julien-G-Man/verimed',
    live: 'https://verimed-web.netlify.app'
  },
  'tool-augmented-chatbot': {
    title: 'Tool-Augmented Chatbot',
    category: 'LLM Tools',
    date: '2026',
    image: '/server.jpg',
    summary: 'A database-aware chatbot that uses controlled LLM tools to query real SQL Server data instead of inventing answers.',
    description: 'This full-stack learning project explores function calling, database access, and conversational context. The model chooses from predefined backend functions, and the server executes the resulting SQL operation before returning a natural-language response.',
    highlights: ['Six controlled database tools', 'SQL Server access through SQLAlchemy and pyodbc', 'Conversation context stored in SQLite', 'Markdown tables and lists in the chat interface'],
    technologies: ['FastAPI', 'React', 'Vite', 'SQLAlchemy', 'pyodbc', 'OpenAI-compatible SDK', 'SQL Server'],
    github: 'https://github.com/Julien-G-Man/tool-augmented-chatbot',
    live: '#'
  },
  scholaraid: {
    title: 'ScholarAid',
    category: 'Education',
    date: '2026',
    image: '/fulbright_students.jpg',
    summary: 'A scholarship platform combining opportunity discovery, AI application feedback, and admin tools for managing scholarship data.',
    description: 'ScholarAid helps students find relevant opportunities and improve their applications while giving administrators structured workflows for collecting, cleaning, and publishing scholarship listings.',
    highlights: ['Searchable scholarship listings and deadlines', 'Claude-powered essay review', 'AI-assisted scholarship intake from URLs or raw text', 'Admin scraping, review, CSV export, and ingestion workflow'],
    technologies: ['Python', 'Django', 'Next.js', 'Claude', 'DRF', 'JWT', 'BeautifulSoup4', 'PostgreSQL'],
    github: 'https://github.com/Julien-G-Man/ScholarAid',
    live: 'https://scholar-aid.netlify.app'
  },
  'tena-ai': {
    title: 'Tena AI',
    category: 'LLM Tools',
    date: '2026',
    image: '/ai-tutor.jpg',
    summary: 'A conversational AI platform providing women rights education and emotional support to women and children',
    description: 'I collaborated on the backend for Tena AI, contributing to API design, user management, authentication, and the foundation for scalable AI interactions.',
    highlights: ['Flask REST API for users and authentication', 'Async service for low-latency interactions', 'PostgreSQL with SQLAlchemy ORM', 'Role-based access control and session authentication'],
    technologies: ['Python', 'Flask', 'Azure OpenAI', 'PostgreSQL'],
    github: 'https://github.com/Julien-G-Man',
    live: 'https://tenaai.vercel.app'
  },
  'customer-support-chatbot': {
    title: 'MoMoChat',
    category: 'Fintech',
    date: '2025',
    image: '/momochat_illustration.png',
    summary: 'A grounded customer support chatbot built during my MTN Mobile Money Congo internship.',
    description: 'The chatbot covers 15 MoMo service topics and uses layered retrieval to keep answers accurate: semantic search first, keyword fallback second, and full context injection as a final safety net.',
    highlights: ['Coverage for XtraCash, MoMo Advance, account management, and more', 'Semantic search, keyword fallback, and full context injection', 'Async endpoints with semaphore-based concurrency', 'Cross-functional work with product, BI, and engineering teams'],
    technologies: ['FastAPI', 'RAG', 'pgvector', 'BM25', 'PostgreSQL', 'Azure OpenAI', 'React', 'REST APIs'],
    github: '#',
    live: '#'
  },
  'python-developer-projects': {
    title: 'Python Developer Projects',
    category: 'Practice Projects',
    date: 'Ongoing',
    image: '/python-code.jpg',
    summary: 'A growing collection of Python practice work covering fundamentals, APIs, computer vision, and machine learning.',
    description: 'This repository records the practical side of my Python learning journey, from early exercises and data structures to frameworks, APIs, and experiments that continue to evolve as I learn.',
    highlights: ['Data structures and algorithms', 'Python libraries and frameworks', 'REST and LLM APIs', 'Computer vision and machine learning experiments'],
    technologies: ['Python', 'NumPy', 'Pandas', 'OpenCV', 'FastAPI', 'Flask', 'Scikit-learn', 'OpenAI'],
    github: 'https://github.com/Julien-G-Man/python-developer',
    live: '#'
  },
  'ai-ml-engineering-journey': {
    title: 'AI/ML Engineering Journey',
    category: 'AI/ML and Agents',
    date: 'In progress',
    image: '/agent-left.jpeg',
    summary: 'A structured, hands-on curriculum moving from machine learning foundations and neural networks to transformers, foundation models, applied AI, and ML systems.',
    description: 'This repository documents an intentional AI/ML engineering path. The work progresses from mathematics and classical machine learning through deep learning, transformers, open-source models, fine-tuning, applied AI systems, and production-oriented ML infrastructure. The learning approach is simple: understand, implement, use, then integrate.',
    highlights: ['Mathematics, classical machine learning, model evaluation, and scikit-learn', 'Neural networks, backpropagation, autograd, deep learning, and PyTorch', 'Transformers, tokenization, embeddings, attention, and foundation models', 'LoRA and QLoRA fine-tuning, quantization, and model evaluation', 'RAG, agents, tool calling, MCP, and orchestration for applied AI', 'Model serving, MLOps, deployment, monitoring, computer vision, and edge AI'],
    technologies: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'PyTorch', 'Hugging Face', 'OpenAI', 'Anthropic', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'MLflow', 'DVC'],
    github: 'https://github.com/Julien-G-Man/ai-ml-engineering',
    live: '#'
  }
} as const

const projectAliases = {
  'ai-engineering-journey': 'ai-ml-engineering-journey',
  'momochat': 'customer-support-chatbot'
} as const

export function generateStaticParams() {
  return [...Object.keys(projectPages), ...Object.keys(projectAliases)].map((slug) => ({ slug }))
}

function getRelatedProjects(currentSlug: string) {
  return Object.entries(projectPages)
    .filter(([slug]) => slug !== currentSlug)
    .slice(0, 3)
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const canonicalSlug = projectAliases[slug as keyof typeof projectAliases] ?? slug
  const project = projectPages[canonicalSlug as keyof typeof projectPages]

  if (!project) notFound()

  return (
    <main className="bg-background">
      <Header alwaysSolid />
      <section className="border-b border-border bg-secondary/30 px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Link href="/projects" className="mb-12 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80">
              <ArrowLeft size={16} />
              Back to projects
            </Link>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{project.category}</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-foreground md:text-6xl">{project.title}</h1>
            <div className="mt-8 h-1 w-20 bg-accent" />
            <p className="mt-8 text-sm text-muted-foreground">Project timeline</p>
            <p className="mt-1 text-xl font-semibold text-foreground">{project.date}</p>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground/80">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.github !== '#' && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-semibold text-background"><Github size={17} /> Repository</a>}
              {project.live !== '#' && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border bg-background px-5 py-3 font-semibold text-foreground"><ArrowUpRight size={17} /> Live project</a>}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-border bg-black">
            <Image src={project.image} alt={`${project.title} project preview`} fill priority className="object-cover" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Project overview</p>
              <h2 className="text-3xl font-bold text-foreground">What I built</h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-foreground/80">{project.description}</p>
              <div className="mt-8 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Category</p>
                  <p className="mt-2 font-semibold text-foreground">{project.category}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Timeline</p>
                  <p className="mt-2 font-semibold text-foreground">{project.date}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Scope</p>
                  <p className="mt-2 font-semibold text-foreground">{project.technologies.length} technologies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-10 border-b border-border py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Delivery notes</p>
              <h3 className="text-3xl font-bold text-foreground">Highlights</h3>
              <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">The practical work, decisions, and working systems that shaped this project.</p>
            </div>
            <ul className="grid content-start gap-x-10 gap-y-6 sm:grid-cols-2">
              {project.highlights.map((highlight) => <li key={highlight} className="border-l-2 border-accent pl-4 leading-relaxed text-foreground/80">{highlight}</li>)}
            </ul>
          </div>

          <div className="grid gap-10 pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Technical foundation</p>
              <h3 className="text-3xl font-bold text-foreground">Built with</h3>
              <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">The tools and platforms used to move the idea from concept to a working project.</p>
            </div>
            <div className="flex content-start flex-wrap gap-3">
              {project.technologies.map((technology) => <span key={technology} className="border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground">{technology}</span>)}
            </div>
          </div>

          <section className="border-t border-border pt-16">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Keep exploring</p>
                <h2 className="text-3xl font-bold text-foreground">Other projects</h2>
              </div>
              <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80">
                View all projects
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {getRelatedProjects(canonicalSlug).map(([relatedSlug, relatedProject]) => (
                <Link key={relatedSlug} href={`/projects/${relatedSlug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden border border-border bg-secondary">
                    <Image
                      src={relatedProject.image}
                      alt={`${relatedProject.title} project preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{relatedProject.category}</p>
                    <h3 className="mt-2 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-accent">
                      {relatedProject.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{relatedProject.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
