import Head from 'next/head'
import PricingPlans from './PricingPlans'
import Features from './Features'
import FAQ from './FAQ'
import Footer from '@website/components/Footer'
import Hero from './Hero'
// import Header from './Header'
import { TelegramCTA, WebAppCTA } from './CTA'
import PageClient from './page.client'
import Link from 'next/link'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>AI sức khoẻ - Trợ lý sức khoẻ thông minh mọi gia đình</title>
      </Head>

      <main className="flex flex-col justify-between min-h-screen">
        <PageClient />
        <Header isAbsolute={false} />

        <div className="flex-1 container mx-auto px-4 bg-background">
          <Hero />
        </div>

        <Footer isAbsolute={false} />
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
