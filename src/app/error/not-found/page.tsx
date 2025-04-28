'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import Head from 'next/head'
import { useI18n } from '@/libs/i18n/client'

export default function NotFoundErrorPage() {
  const t = useI18n()
  return (
    <div className="container py-28">
      <Head>
        <title>{t('ErrorPage.404.title') + '-' + t('ErrorPage.404.description')}</title>
      </Head>
      <div className="text-center prose max-w-none">
        <h1 style={{ marginBottom: 0 }}>{t('ErrorPage.404.title')}</h1>
        <p className="mb-4">{t('ErrorPage.404.description')}</p>
      </div>
      <Button asChild variant="default">
        <Link href="/">{t('common.gohHome')}</Link>
      </Button>
    </div>
  )
}
