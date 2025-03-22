// components/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const logoURL = `https://res.cloudinary.com/ivanistao/image/upload/t_Profile/v1740834460/aisuckhoe/logo/logo-light_a53s1a.png?${Math.floor(Date.now() / 100000)}`

  return (
    <header className="absolute w-full z-10 flex justify-between items-center px-6 md:px-12 py-4 bg-background text-foreground">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <img src={logoURL} alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-primary">Aisuckhoe</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
