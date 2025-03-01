// // import type { Metadata } from 'next'
// // import { draftMode } from 'next/headers'
// // import { getPayload } from 'payload'
// // import configPromise from '@payload-config'

// // import { generateMeta } from '@/utilities/generateMeta'
// // import { homeStatic } from '@/endpoints/seed/home-static'

// import Header from './header'
// import Hero from './hero'
// import Features from './features'
// import HowItWorks from './how-it-work'
// import FAQ from './faq'
// import CTA from './cta'
// import Footer from './footer'
// // import { cache, useEffect } from 'react'
// import PageClient from './page.client'

// export default function Home() {
//   // Uncomment if use page collections
//   // const page = await queryPageBySlug({ slug: 'home' })
//   // // Remove this code once your website is seeded
//   // if (!page) {
//   //   return homeStatic
//   // }
//   // const { hero, layout } = page
//   // return (
//   //   <article className="pt-16 pb-24">
//   //     <PageClient />
//   //     {/* Allows redirects for valid pages too */}
//   //     <PayloadRedirects disableNotFound url={url} />

//   //     {draft && <LivePreviewListener />}

//   //     <RenderHero {...hero} />
//   //     <RenderBlocks blocks={layout} />
//   //   </article>
//   // )

//   return (
//     <main className="relative">
//       <PageClient />
//       <div id="particles-js" className="absolute inset-0 z-0"></div>
//       <Header />
//       <Hero />
//       <Features />
//       <HowItWorks />
//       <FAQ />
//       <CTA />
//       <Footer />
//     </main>
//   )
// }

import Head from 'next/head'
import Hero from './Hero'
import Header from './Header'
import Footer from './Footer'
import AIConsultation from './AIConsultation'
import StepsGuide from './StepsGuide'
import WebAppLink from './WebAppLink'
import TelegramLink from './TelegramLink'
import Logos from './logos'
import Stats from './Stats'
import Integration from './Integration'
import Impact from './Impact'
import Trust from './Trust'
import PageClient from './page.client'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Head>
        <title>AI Sức Khỏe - Tư vấn thông minh cho sức khỏe của bạn</title>
        <meta
          name="description"
          content="AI Sức Khỏe giúp bạn hỏi vấn đề sức khỏe, nhận tư vấn AI, và gợi ý bác sĩ phù hợp."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageClient />
      <Header />

      <main className="container mx-auto p-4 pt-20">
        {/* Adjust for fixed header */}
        {/* Hero Section */}
        <Hero />
        <Logos />
        <Stats />
        <Integration />
        <Impact />
        <Trust />
        {/* AI Consultation */}
        <AIConsultation />
        {/* 3-Step Guide */}
        <StepsGuide />
        {/* WebApp and Telegram Links */}
        <WebAppLink />
        <TelegramLink />
      </main>

      <Footer />
    </div>
  )
}
