'use client'

import { useI18n } from '@/libs/i18n/client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button' // Add this import

export default function HomeHero() {
  const t = useI18n()
  // const router = useRouter() // Removed unused variable
  // const [inputFocused, setInputFocused] = useState(false) // Removed unused state

  return (
    <div>
      {/* Background Glow */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <motion.div
          className="w-[40vw] h-[40vw] bg-primary opacity-20 blur-3xl rounded-full"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className="h-20"></div>
        <div className="h-20"></div>
        <div className="h-20"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center leading-tight text-primary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {t('HomeHero.title')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground text-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {t('HomeHero.for your health concerns')}
        </motion.p>

        {/* CTA Input */}
        <motion.div
          className="mt-6  px-6  w-full max-w-md relative flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            onClick={() => window.location.replace('https://hoi.aisuckhoe.com/chat')}
            className="w-full px-6 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:shadow-xl" // Added hover:bg-gray-50 for visual feedback
            variant="default"
            size="clear"
          >
            {t('HomeHero.promote')}
          </Button>
        </motion.div>
        <div className="h-20"></div>
        <div className="h-20"></div>
        <div className="h-20"></div>
      </div>
    </div>
  )
}
