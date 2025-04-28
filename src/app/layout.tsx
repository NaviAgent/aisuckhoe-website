import type { Metadata } from 'next'
import React from 'react'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { GoogleTagManager } from '@next/third-parties/google'
import { I18nProviderClient } from '@/libs/i18n/client' // Import client provider
import { getCurrentLocale } from '@/libs/i18n/server' // Import server helper

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import { getClientEnv } from '@/libs/env'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const clientEnv = getClientEnv()
  const locale = await getCurrentLocale() // Get current locale on the server

  return (
    <html lang={locale} suppressHydrationWarning>
      {' '}
      {/* Set lang dynamically */}
      <GoogleTagManager gtmId={clientEnv.NEXT_PUBLIC_GTM_ID} />
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className="min-h-screen">
        <I18nProviderClient locale={locale}>{children}</I18nProviderClient> {/* Wrap children */}
      </body>
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
