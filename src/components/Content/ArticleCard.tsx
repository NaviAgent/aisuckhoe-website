import React from 'react'

interface ArticleCardProps {
  title: string
  slug: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  author: string
  size?: 'small' | 'medium' | 'large'
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  slug,
  excerpt,
  image,
  category,
  date,
  readTime,
  author,
  size = 'medium',
}) => {
  return (
    <div
      className={`glass overflow-hidden group hover:border-primary/30 transition-all duration-300 h-full flex flex-col`}
    >
      <div className="relative w-full pt-[56.25%] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1 text-sm rounded-full">
          {category}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3
          className={`font-bold mb-2 ${size === 'large' ? 'text-3xl' : size === 'medium' ? 'text-2xl' : 'text-xl'}`}
        >
          {title}
        </h3>

        <p className="text-gray-400 mb-4 flex-1 line-clamp-3 overflow-hidden text-overflow-ellipsis">
          {excerpt}
        </p>

        <div className="flex items-center text-sm text-gray-500 mt-auto">
          <span className="flex items-center">
            <span className="mr-2">📅</span>
            {date}
          </span>
          <span className="mx-3">•</span>
          <span>{readTime} read</span>
          <span className="mx-3">•</span>
          <span>{author}</span>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
