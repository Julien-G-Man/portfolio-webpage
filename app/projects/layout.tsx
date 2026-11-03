import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Julien Glory Manana',
  description:
    'Explore Julien Glory Manana\'s AI/ML and software engineering projects, including deep learning foundations, computer vision, intelligent systems, and accessible education tools.',
  alternates: {
    canonical: 'https://juliengmanana.netlify.app/projects',
  },
  openGraph: {
    title: 'Projects | Julien Glory Manana',
    description:
      'AI/ML and software engineering projects by Julien Glory Manana, a Computer Science student at KNUST.',
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
      'AI/ML and software engineering projects by Julien Glory Manana, including deep learning, computer vision, and intelligent systems.',
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
