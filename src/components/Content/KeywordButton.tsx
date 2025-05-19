import React from 'react'
import { Button } from '../ui/button'

interface KeywordButtonProps {
  keyword: string
  onClick: () => void
}

const KeywordButton: React.FC<KeywordButtonProps> = ({ keyword, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="glass px-4 py-2 text-sm hover:text-white hover:border-primary/50 transition-colors"
    >
      {keyword}
    </Button>
  )
}

export default KeywordButton
