'use client'
import CommonFooter from '@/components/Common/CommonFooter'
import CommonHeader from '@/components/Common/CommonHeader'
import HomeHero from '@/components/Home/HomeHero'
import { useChangeLocale, useI18n } from '@/libs/i18n/client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Head from 'next/head'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const PageClient: React.FC = () => {
  /* Force the header to be dark mode while we have an image behind it */
  const { setHeaderTheme } = useHeaderTheme()
  const t = useI18n()
  // const searchParams = useSearchParams()
  // const changeLocale = useChangeLocale()

  // changeLocale((searchParams.get('locale') as keyof typeof t) ?? 'vi')

  useEffect(() => {
    setHeaderTheme('light')
  }, [setHeaderTheme])

  return (
    <>
      <main className="flex flex-col justify-between min-h-screen">
        <Head>
          <title>{t('common.title')}</title>
        </Head>

        <CommonHeader isAbsolute={false} />

        <div className="flex-1 container mx-auto px-4 bg-background">
          <HomeHero />
        </div>

        <CommonFooter isAbsolute={false} />
      </main>

      {/* <div className="flex-1 sm:space-y-24"> */}
      {/* <main id="features" className=" container px-6 sm:p-0">
      <Features />
    </main>

    <main id="pricing" className="container px-6 sm:p-0">
      <PricingPlans />
    </main>

    <main id="faq" className="px-6 sm:p-0">
      <FAQ />
    </main>

    <main className="px-6 sm:p-0">
      <WebAppCTA />
    </main>

    <main className="px-6 sm:p-0">
      <TelegramCTA />
    </main> */}
      {/* </div> */}

      {/* <footer className="absolute bottom-0 w-full z-10 flex justify-between items-center px-6 md:px-12 py-4 bg-background text-foreground"></footer> */}
    </>
  )
}

export default PageClient
