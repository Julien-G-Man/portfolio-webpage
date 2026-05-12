import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Julien Glory Manana',
  description:
    'Explore Julien Glory Manana\'s AI, backend, and full-stack projects, including FastAPI apps, LLM integrations, RAG systems, Django platforms, and deployed portfolio work.',
  alternates: {
    canonical: 'https://juliengmanana.netlify.app/projects',
  },
  openGraph: {
    title: 'Projects | Julien Glory Manana',
    description:
      'AI, backend, and full-stack projects by Julien Glory Manana, including FastAPI, Django, LLM integrations, RAG systems, and deployed applications.',
    url: 'https://juliengmanana.netlify.app/projects',
    siteName: 'Julien Glory Manana - Portfolio',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Julien Glory Manana - AI and backend projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Julien Glory Manana',
    description:
      'AI, backend, and full-stack projects by Julien Glory Manana, including FastAPI, Django, LLM integrations, and RAG systems.',
    images: ['/og-image.jpg'],
  },
}

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
