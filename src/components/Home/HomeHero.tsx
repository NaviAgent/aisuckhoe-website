'use client'

import { useI18n } from '@/libs/i18n/client'
import { motion } from 'framer-motion'
import CommonCTAButton from '@/components/Common/CommonCTAButton'

export default function HomeHero() {
  const t = useI18n()

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
        <CommonCTAButton
          onClick={() => window.location.replace('https://hoi.aisuckhoe.com/chat')}
          text={t('HomeHero.promote')}
          size="clear"
        />
        <div className="h-20"></div>
        <div className="h-20"></div>
        <div className="h-20"></div>
      </div>
    </div>
  )
}
