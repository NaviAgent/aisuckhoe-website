import Head from 'next/head'
import ComingSoon from '../../components/ComingSoon/ComingSoon'
import ComingSoonHeader from '../../components/ComingSoon/ComingSoonHeader'
import PageClient from './page.client'

export default function Auth() {
  return (
    <div>
      <Head>
        <title>AI sức khoẻ - Trợ lý sức khoẻ thông minh mọi gia đình</title>
      </Head>
      <PageClient />

      <ComingSoonHeader />

      <div className="sm:space-y-24">
        <ComingSoon />
      </div>
    </div>
  )
}
