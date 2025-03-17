import type { Metadata } from 'next'
import React from 'react'

import { AdminBar } from '@payload/components/AdminBar'

import { Providers } from '@payload/providers'
import { InitTheme } from '@payload/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@payload/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import '../globals.css'
import { getServerSideURL } from '@payload/utilities/getURL'
import Header from './Header'
import Footer from './Footer'

export default async function SlugLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <Providers>
      <Header />
      {children}
      <Footer />
    </Providers>
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
