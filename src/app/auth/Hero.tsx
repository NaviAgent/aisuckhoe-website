'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-background text-foreground">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div
          className="w-[40vw] h-[40vw] bg-primary opacity-20 blur-3xl rounded-full"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>

      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Chờ vài ngày nữa nhé ...
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg sm:text-xl text-muted-foreground text-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Ngày ra mắt 28/03/2025 giờ Việt Nam
      </motion.p>
    </section>
  )
}
