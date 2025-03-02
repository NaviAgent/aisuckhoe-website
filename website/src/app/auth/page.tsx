import Head from 'next/head'
import Hero from './Hero'
import Header from './Header'
import PageClient from './page.client'

export default function Auth() {
  return (
    <div>
      <Head>
        <title>AI sức khoẻ - Trợ lý sức khoẻ thông minh mọi gia đình</title>
      </Head>
      <PageClient />

      <Header />

      <div className="sm:space-y-24">
        <Hero />
      </div>
    </div>
  )
}
