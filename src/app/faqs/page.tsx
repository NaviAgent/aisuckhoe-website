import Head from 'next/head'
import Header from '@website/components/Header'
import Footer from '@/components/Footer'

export default function FAQ() {
  return (
    <>
      <Head>
        <title>AI sức khoẻ - Trợ lý sức khoẻ thông minh mọi gia đình</title>
      </Head>

      <Header isAbsolute={true} />

      <div>
        <title>FAQ</title>
      </div>

      <Footer />
    </>
  )
}
