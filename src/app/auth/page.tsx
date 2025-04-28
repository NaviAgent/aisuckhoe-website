'use client'
import ComingSoon from '@/components/ComingSoon/ComingSoon'
import ComingSoonHeader from '@/components/ComingSoon/ComingSoonHeader'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Head from 'next/head'
import React, { useEffect } from 'react'

const PageClient: React.FC = () => {
  /* Force the header to be dark mode while we have an image behind it */
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
    // if (window.particlesJS) {
    //   window.particlesJS('particles-js', {
    //     particles: { number: { value: 50 }, size: { value: 3 }, move: { speed: 1 } },
    //     interactivity: { events: { onhover: { enable: true, mode: 'repulse' } } },
    //   })
    // }
  }, [setHeaderTheme])
  return (
    <div>
      <Head>
        <title>AI sức khoẻ - Trợ lý sức khoẻ thông minh mọi gia đình</title>
      </Head>

      <ComingSoonHeader />

      <div className="sm:space-y-24">
        <ComingSoon />
      </div>
    </div>
  )
}

export default PageClient
