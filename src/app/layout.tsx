import type { Metadata } from 'next'
import React from 'react'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/libs/utilities/mergeOpenGraph'
import { GoogleTagManager } from '@next/third-parties/google'

import './globals.css'
import { getServerSideURL } from '@/libs/utilities/getURL'
import { getClientEnv } from '@/libs/env'
import I18nProvider from '@/libs/i18n/provider'
import { getStaticParams } from '@/libs/i18n/server'

export function generateStaticParams() {
  return getStaticParams()
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const clientEnv = getClientEnv()
  const locale = (await params).locale || 'vi'
  return (
    <html lang={locale} suppressHydrationWarning>
      {/* Set lang dynamically */}
      <GoogleTagManager gtmId={clientEnv.NEXT_PUBLIC_GTM_ID} />
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className="min-h-screen">
        <I18nProvider locale={locale}>{children}</I18nProvider> {/* Wrap children */}
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
