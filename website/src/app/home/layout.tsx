import { InitTheme } from '@payload/providers/Theme/InitTheme'
import './globals.css'
import Script from 'next/script'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { cn } from '@payload/utilities/ui'
import { Providers } from '@payload/providers'

export const metadata = {
  title: 'AI Sức Khỏe - Hỏi AI, Kết nối Bác sĩ',
  description: 'Nhanh chóng, tiện lợi, nguồn bác sĩ uy tín',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
