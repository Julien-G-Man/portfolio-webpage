import { Suspense } from 'react'
import { SearchParamHandler } from '@/app/search-param-handler'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { FeaturedProjects } from '@/components/featured-projects'
import { Skills } from '@/components/skills'
import Contact from '@/components/contact'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <main className="bg-background">
      <Suspense fallback={null}>
        <SearchParamHandler />
      </Suspense>
      <Header />
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Skills />
      <Contact />
      <Footer />
      <ThemeToggle />
    </main>
  )
}
