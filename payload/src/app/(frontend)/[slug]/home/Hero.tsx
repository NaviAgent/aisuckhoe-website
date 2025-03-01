'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="container">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16 bg-gradient-to-r from-teal-500 to-blue-400 text-white rounded-lg mb-8"
      >
        <h1 className="text-4xl font-bold mb-4">AI cho mọi vấn đề sức khỏe</h1>
        <p className="text-lg mb-6">
          Trải nghiệm AI thông minh, nhanh chóng, và an toàn cho sức khỏe của bạn
        </p>
        <div className="space-x-4">
          <Link
            href="/get-access"
            className="bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-teal-500 transition-colors"
          >
            Bắt đầu
          </Link>
        </div>
      </motion.section>
    </section>
  )
}
