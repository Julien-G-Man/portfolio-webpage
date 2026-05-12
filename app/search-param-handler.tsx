'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export function SearchParamHandler() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const section = searchParams.get('section')
    if (section) {
      // Wait for the next frame, then check if element exists
      requestAnimationFrame(() => {
        // Wait one more frame to ensure all content is rendered
        requestAnimationFrame(() => {
          const element = document.getElementById(section)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        })
      })
    }
  }, [searchParams])

  return null
}
