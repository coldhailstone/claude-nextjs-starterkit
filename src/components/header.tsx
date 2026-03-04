import Link from 'next/link'
import { Code2 } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold hover:opacity-80"
        >
          <Code2 className="h-5 w-5" />
          Next.js Starter Kit
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}
