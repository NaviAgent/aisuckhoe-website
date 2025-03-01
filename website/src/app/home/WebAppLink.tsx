'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const WebAppLink = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="text-center mb-8"
    >
      <h2 className="text-2xl font-bold text-teal-500 mb-4">Sử dụng WebApp ngay</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Truy cập WebApp để tư vấn AI và kết nối bác sĩ trực tiếp.
      </p>
      <Link
        href="/webapp" // Replace with actual URL
        className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition-colors"
      >
        Đi đến WebApp
      </Link>
    </motion.div>
  )
}

export default WebAppLink
