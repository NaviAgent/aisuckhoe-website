'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Skeleton from 'react-loading-skeleton'

const AIConsultation = () => {
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResponse(null)

    // Simulate AI response (replace with real API call in production)
    setTimeout(() => {
      setResponse(
        'AI khuyên bạn nên nghỉ ngơi và liên hệ bác sĩ chuyên khoa nội nếu triệu chứng kéo dài.',
      )
      setIsLoading(false)
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8"
    >
      <h2 className="text-xl font-bold mb-4 text-teal-500">Tư vấn AI thông minh</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Hỏi AI về vấn đề sức khỏe của bạn và nhận gợi ý bác sĩ phù hợp.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Hỏi về vấn đề sức khỏe của bạn..."
          className="w-full p-2 border rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? 'Đang xử lý...' : 'Gửi câu hỏi'}
        </button>
      </form>
      {isLoading ? (
        <Skeleton height={20} width={300} className="mt-4" />
      ) : response ? (
        <p className="mt-4 text-gray-700 dark:text-gray-300">{response}</p>
      ) : null}
    </motion.div>
  )
}

export default AIConsultation
