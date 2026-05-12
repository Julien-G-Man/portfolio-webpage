'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { MouseEvent, ReactNode } from 'react'

type HomeSectionLinkProps = {
  sectionId: string
  className?: string
  children: ReactNode
  onNavigate?: () => void
}

export function HomeSectionLink({ sectionId, className, children, onNavigate }: HomeSectionLinkProps) {
  const pathname = usePathname()
  const href = `/?section=${encodeURIComponent(sectionId)}`

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.()

    if (pathname === '/') {
      event.preventDefault()
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}