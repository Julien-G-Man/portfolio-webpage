import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Julien Glory Manana | Python Backend Developer',
  description: 'Julien Glory Manana — Computer Science student at KNUST, Ghana. Python backend developer specialising in AI systems, LLM integration, and building innovative products. Open to internships and collaborations.',
  keywords: [
    'Julien',
    'Julien Glory',
    'Glory',
    'Manana',
    'Julien Glory Manana',
    'Python developer',
    'AI developer',
    'backend developer',
    'software engineer',
    'software engineering trainee',
    'KNUST',
    'Kwame Nkrumah University',
    'Computer Science',
    'LLM integration',
    'AI systems',
    'machine learning',
    'Next.js developer',
    'React developer',
    'Ghana developer',
    'Africa tech',
    'nGOT Giants',
    'Next Generation of Tech Giants',
    'portfolio',
    'developer portfolio',
    'open to work',
  ],
  generator: 'v0.app',
  metadataBase: new URL('https://juliengmanana.netlify.app'),
  alternates: {
    canonical: 'https://juliengmanana.netlify.app',
  },
  authors: [
    { name: 'Julien Glory Manana', url: 'https://juliengmanana.netlify.app' },
  ],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'SY98vlwn2xMG5dhZ61WUn_PfjzEX4VSXU48Beo-nDpU',
  },
  openGraph: {
    title: 'Julien Glory Manana | Python Backend Developer',
    description: 'Julien Glory Manana — Computer Science student at KNUST, Ghana. Python backend developer specialising in AI systems, LLM integration, and building innovative products.',
    url: 'https://juliengmanana.netlify.app',
    siteName: 'Julien Glory Manana',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Julien Glory Manana — Python Backend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julien Glory Manana | Python Backend Developer',
    description: 'Julien Glory Manana — Computer Science student at KNUST, Ghana. Python backend developer specialising in AI systems, LLM integration, and building innovative products.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD structured data for person/website helps search engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Julien Glory Manana",
    url: "https://juliengmanana.netlify.app",
    image: "https://juliengmanana.netlify.app/julien.jpg",
    sameAs: [
      "https://github.com/Julien-G-Man",
      "https://www.linkedin.com/in/julien-glory-manana",
      "https://instagram.com/julien_g_manana",
      "https://facebook.com/julien.g.manana"
    ],
    jobTitle: "Python Backend Developer",
    description: "Computer Science student at KNUST, Ghana. Python backend developer specialising in AI systems, LLM integration, and building innovative products.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Kwame Nkrumah University of Science and Technology",
      sameAs: "https://www.knust.edu.gh"
    },
    knowsAbout: [
      "Python", "Backend Development", "Artificial Intelligence",
      "Large Language Models", "Next.js", "React", "Software Engineering",
      "API Development", "Machine Learning"
    ],
    nationality: "Congolese",
    workLocation: {
      "@type": "Place",
      name: "Kumasi, Ghana"
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        {/* inject JSON-LD manually since Next's metadata doesn't cover custom script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* additional meta tags for SEO */}
        <meta
          name="keywords"
          content="Julien Glory Manana, Python developer, AI developer, backend developer, software engineer, KNUST, Computer Science, LLM integration, Ghana developer, Africa tech, nGOT Giants, developer portfolio"
        />
        <meta name="author" content="Julien Glory Manana" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

