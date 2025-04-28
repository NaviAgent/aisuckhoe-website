// components/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getClientEnv } from '@/libs/env'

const Header = () => {
  const clientEnv = getClientEnv()
  const [menuOpen, setMenuOpen] = useState(false)
  const logoURL = `${clientEnv.NEXT_PUBLIC_APP_LOGO}?${Math.floor(Date.now() / 100000)}`

  return (
    <header className="absolute w-full z-10 flex justify-between items-center px-6 md:px-12 py-4 bg-background text-foreground">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <img src={logoURL} alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-primary">Aisuckhoe</span>
        </Link>
      </div>
      {/* Desktop Nav */}
      {/* <nav className="hidden md:flex items-center space-x-6 font-bold">
        <Link href="/blog" className="hover:text-primary ">
          Blog
        </Link>
        <Link href="/roadmap" className="hover:text-primary">
          Roadmap
        </Link>
        <Link href="/pricing" className="hover:text-primary">
          Gói dịch vụ
        </Link>
      </nav> */}

      {/* Mobile Menu Button */}
      {/* <button
        className="md:hidden p-2 rounded-lg bg-muted/10"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button> */}

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-16 left-0 z-10 w-full bg-background shadow-lg p-4 flex flex-col items-center space-y-4 md:hidden font-bold">
          <Link href="/blog" className="hover:text-primary" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/roadmap" className="hover:text-primary" onClick={() => setMenuOpen(false)}>
            Roadmap
          </Link>
          <Link href="/pricing" className="hover:text-primary" onClick={() => setMenuOpen(false)}>
            Gói dịch vụ
          </Link>
          {/* Get Started Button */}
          <Link
            href="https://hoi.aisuckhoe.com"
            className="hidden md:block px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/80 transition"
          >
            Đăng nhập
          </Link>
        </div>
      )}

      {/* Get Started Button */}
      {/* <Link
        href="/auth"
        className="hidden md:block px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/80 transition"
      >
        Sign in
      </Link> */}
    </header>
  )
}

export default Header
