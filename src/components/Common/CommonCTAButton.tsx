'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useI18n } from '@/libs/i18n/client'

interface CommonCTAButtonProps {
  onClick: () => void
  text: string
  className?: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'clear'
}

export default function CommonCTAButton({
  onClick,
  text,
  className,
  variant = 'default',
  size = 'default',
}: CommonCTAButtonProps) {
  return (
    <motion.div
      className={`mt-6 px-6 w-full max-w-md relative flex items-center ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Button
        onClick={onClick}
        className="w-full px-6 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:shadow-xl"
        variant={variant}
        size={size}
      >
        {text}
      </Button>
    </motion.div>
  )
}
