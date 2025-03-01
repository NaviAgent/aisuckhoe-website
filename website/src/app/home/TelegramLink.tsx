'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const TelegramLink = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="text-center mb-8"
    >
      <h2 className="text-2xl font-bold text-teal-500 mb-4">Kết nối qua Telegram</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Tương tác với AI qua bot Telegram của chúng tôi.
      </p>
      <Link
        href="https://t.me/aisuckhoebot" // Replace with actual Telegram bot URL
        className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mở Telegram
      </Link>
    </motion.div>
  )
}

export default TelegramLink
