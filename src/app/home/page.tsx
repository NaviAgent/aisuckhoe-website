import Head from 'next/head'
import CommonHeader from '@/components/Common/CommonFooter'
import HomeHero from '../../components/Home/HomeHero'
import PageClient from './page.client'
import Header from '@/components/Common/CommonHeader'
import { getI18n } from '@/libs/i18n/server' // Import server i18n helper

export default async function Home() {
  // Fetch translations on the server
  const t = await getI18n()

  return (
    <>
      <Head>
        <title>AI sức khoẻ - Trợ lý sức khoẻ thông minh mọi gia đình</title>
      </Head>

      <main className="flex flex-col justify-between min-h-screen">
        <PageClient />
        <Header isAbsolute={false} />

        <div className="flex-1 container mx-auto px-4 bg-background">
          <h1>{t('greeting')}</h1> {/* Display translated greeting */}
          <HomeHero />
        </div>

        <CommonHeader isAbsolute={false} />
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
