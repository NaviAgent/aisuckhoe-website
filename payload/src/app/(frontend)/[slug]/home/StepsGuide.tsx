'use client'

import { motion } from 'framer-motion'

const steps = [
  { title: 'Đặt câu hỏi', description: 'Nhập vấn đề sức khỏe của bạn vào AI.' },
  { title: 'Nhận tư vấn', description: 'AI cung cấp lời khuyên và gợi ý.' },
  { title: 'Kết nối bác sĩ', description: 'Liên hệ bác sĩ phù hợp qua WebApp hoặc Telegram.' },
]

const StepsGuide = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-center text-teal-500 mb-6">Hướng dẫn 3 bước</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
          >
            <h3 className="text-lg font-semibold text-teal-500 mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default StepsGuide
