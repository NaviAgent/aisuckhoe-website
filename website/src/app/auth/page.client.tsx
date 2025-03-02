'use client'
import { useHeaderTheme } from '@payload/providers/HeaderTheme'
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
  return <React.Fragment></React.Fragment>
}

export default PageClient
