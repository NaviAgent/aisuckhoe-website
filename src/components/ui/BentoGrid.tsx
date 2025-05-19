import React from 'react'

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

const BentoGrid: React.FC<BentoGridProps> = ({ children, className }) => {
  return <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>{children}</div>
}

interface BentoGridItemProps {
  children: React.ReactNode
  className?: string
}

const BentoGridItem: React.FC<BentoGridItemProps> = ({ children, className }) => {
  return <div className={`rounded-lg border p-4 ${className}`}>{children}</div>
}

export { BentoGrid, BentoGridItem }
