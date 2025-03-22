'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Hero() {
  const router = useRouter()
  const [inputFocused, setInputFocused] = useState(false)

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
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center leading-tight text-primary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Hỏi AI sức khoẻ
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg sm:text-xl text-muted-foreground text-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        cho bạn và cả người thân trong gia đình
      </motion.p>

      {/* CTA Input */}
      <motion.div
        className="mt-6  px-6  w-full max-w-md relative flex items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <input
          type="text"
          placeholder="Ask me anything... 🤖💬"
          className="w-full px-6 py-4 text-lg font-bold border border-border rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-primary bg-white text-gray-900 placeholder-gray-500 hover:shadow-xl transition-all duration-300 cursor-text pr-12"
          onFocus={() => router.replace('/auth')}
        />
        <motion.div
          className="absolute  px-6  right-4 flex items-center"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="text-primary text-xl">💡</span>
        </motion.div>
      </motion.div>

      <motion.p
        className="text-sm text-primary font-semibold mt-1 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Bắt đầu dùng thử tới 3 câu hỏi miễn phí!
      </motion.p>
      {/* 
      <p className="text-sm text-primary font-semibold mt-1 text-center">
        
      </p> */}

      {/* AI Illustration */}
      {/* <motion.div
        className="relative w-full mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Image
          src="https://picsum.photos/800/500"
          alt="AI Robots"
          sizes="100vw"
          width={1024}
          height={500}
          priority
          className="w-full"
        />
      </motion.div> */}
    </section>
  )
}
