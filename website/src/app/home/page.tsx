import Head from 'next/head'
import PricingPlans from './PricingPlans'
import Features from './Features'
import FAQ from './FAQ'
import Footer from './Footer'
import Hero from './Hero'
import Header from './Header'
import { TelegramCTA, WebAppCTA } from './CTA'
import PageClient from './page.client'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI sức khoẻ - Trợ lý sức khoẻ thông minh mọi gia đình</title>
      </Head>

      <PageClient />

      <Header />

      <div className="sm:space-y-24">
        <Hero />

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
      </main>

      <Footer /> */}
      </div>
    </div>
  )
}
