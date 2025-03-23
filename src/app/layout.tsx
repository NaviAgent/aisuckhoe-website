import type { Metadata } from 'next'
import React from 'react'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { GoogleTagManager } from '@next/third-parties/google'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import globalConfig from '@/global.config'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const config = await globalConfig
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={config.gtm.id} />
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@NaviAgent',
  },
}
