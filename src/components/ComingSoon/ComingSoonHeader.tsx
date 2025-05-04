// components/Header.tsx
'use client'

import Link from 'next/link'
import { getClientEnv } from '@/libs/env'

const ComingSoonHeader = () => {
  const clientEnv = getClientEnv()
  const logoURL = `${clientEnv.NEXT_PUBLIC_APP_LOGO}?${Math.floor(Date.now() / 100000)}`

  return (
    <header className="absolute w-full z-10 flex justify-between items-center px-6 md:px-12 py-4 bg-background text-foreground">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <img src={logoURL} alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-primary">AIsuckhoe</span>
        </Link>
      </div>
    </header>
  )
}

export default ComingSoonHeader
