import type { Metadata } from 'next'

import { cn } from '@payload/utilities/ui'
import React from 'react'

import { Providers } from '@payload/providers'
import { InitTheme } from '@payload/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@payload/utilities/mergeOpenGraph'
import { GoogleTagManager } from '@next/third-parties/google'

import './globals.css'
import { getServerSideURL } from '@payload/utilities/getURL'
import websiteConfig from '@website/website.config'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const config = await websiteConfig
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={config.gtm.id} />
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>{children}</body>
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
