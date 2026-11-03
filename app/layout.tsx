import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Julien Glory Manana | AI/ML & Software Engineering',
  description: 'Portfolio of Julien Glory Manana, a KNUST Computer Science student exploring Artificial Intelligence, Machine Learning, and software engineering through practical projects.',
  keywords: [
    'Julien Glory Manana',
    'Julien Manana',
    'Julien Glory',
    'Python backend developer',
    'Artificial Intelligence',
    'Machine Learning',
    'software engineering',
    'Full-stack developer',
    'software engineer',
    'KNUST computer science',
    'Ghana tech',
    'Africa developer',
    'portfolio',
  ],
  generator: 'v0.app',
  metadataBase: new URL('https://juliengmanana.netlify.app'),
  alternates: {
    canonical: 'https://juliengmanana.netlify.app',
    languages: {
      'en': 'https://juliengmanana.netlify.app',
      'en-US': 'https://juliengmanana.netlify.app',
    },
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
    title: 'Julien Glory Manana | AI/ML & Software Engineering',
    description: 'AI/ML and software engineering projects by a KNUST Computer Science student.',
    url: 'https://juliengmanana.netlify.app',
    siteName: 'Julien Glory Manana - Portfolio',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Julien Glory Manana - Python Backend Developer',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julien Glory Manana | AI/ML & Software Engineering',
    description: 'Exploring intelligent systems and building practical software.',
    creator: '@julien_g_manana',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.jpg',
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
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Julien Glory Manana",
      url: "https://juliengmanana.netlify.app",
      image: "https://juliengmanana.netlify.app/julien.jpg",
      email: "mailto:juliengmanana@gmail.com",
      sameAs: [
        "https://github.com/Julien-G-Man",
        "https://www.linkedin.com/in/julien-glory-manana",
        "https://instagram.com/julien_g_manana",
        "https://facebook.com/julien.g.manana"
      ],
      jobTitle: "AI/ML and Software Engineering Student",
      description: "Computer Science student at KNUST exploring Artificial Intelligence, Machine Learning, and software engineering.",
      worksFor: {
        "@type": "Organization",
        name: "Freelance / Self-employed"
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Kwame Nkrumah University of Science and Technology",
        sameAs: "https://www.knust.edu.gh"
      },
      knowsAbout: [
        "Python", "Backend Development", "Artificial Intelligence", "Machine Learning",
        "Deep Learning", "Computer Vision", "Software Engineering", "REST APIs", "KNUST"
      ],
      nationality: "Congolese",
      workLocation: {
        "@type": "Place",
        name: "Kumasi, Ghana"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Julien Glory Manana - Developer Portfolio",
      url: "https://juliengmanana.netlify.app",
      description: "Portfolio of Julien Glory Manana - AI/ML and software engineering projects",
      creator: {
        "@type": "Person",
        name: "Julien Glory Manana"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://juliengmanana.netlify.app?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <html lang="en">
      <head>
        {/* inject JSON-LD manually since Next's metadata doesn't cover custom script */}
        {jsonLd.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
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
