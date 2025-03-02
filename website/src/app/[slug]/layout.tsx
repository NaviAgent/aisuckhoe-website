import type { Metadata } from 'next'
import React from 'react'

import { AdminBar } from '@payload/components/AdminBar'
import { Footer } from '@payload/globals/Footer/Component'
import { Header } from '@payload/globals/Header/Component'
import { Providers } from '@payload/providers'
import { InitTheme } from '@payload/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@payload/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import '../globals.css'
import { getServerSideURL } from '@payload/utilities/getURL'

export default async function SlugLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <Providers>
      <AdminBar
        adminBarProps={{
          preview: isEnabled,
        }}
      />
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
