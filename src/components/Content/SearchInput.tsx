import React, { useState, useEffect } from 'react'
import { Search, ArrowRight } from 'lucide-react'
import KeywordButton from './KeywordButton'
import { useI18n } from '@/libs/i18n/client'
import { Article } from '@/app/(content)/chuyen-trang-suc-khoe/ChuyenTrangSucKhoeClientPage'
import { removeMark } from '@whthduck/slugify-vi'

interface SearchInputProps {
  articles: Article[]
  onSearch: (filteredArticles: Article[]) => void
}

const suggestedKeywords = [
  'Ăn sáng có lợi ích gì',
  'Nhịn ăn sáng tập trung',
  'Ảnh hưởng ăn sáng năng suất',
  'Thói quen ăn sáng khoa học',
  'Bữa sáng tăng cường trí não',
  'Cải thiện chất lượng giấc ngủ',
  'Bí quyết ngủ sâu giấc',
  'Mất ngủ phải làm sao',
  'Phương pháp ngủ ngon',
  'Giấc ngủ đủ giấc quan trọng',
  'Tốc độ trả lời AI sức khỏe',
  'Bắt đầu với AIsuckhoe',
  'Nguồn thông tin AIsuckhoe',
  'AI y tế tham khảo ở đâu',
  'Cách dùng AIsuckhoe hiệu quả',
  'Dấu hiệu thiếu nước cơ thể',
  'Triệu chứng cảm cúm AI',
  'Kiểm tra sức khỏe online',
  'Phân tích triệu chứng AI',
  'Hiểu cơ thể qua AI',
]

const SearchInput: React.FC<SearchInputProps> = ({ articles, onSearch }) => {
  const t = useI18n()
  const [inputValue, setInputValue] = useState('')
  const [randomKeywords, setRandomKeywords] = useState<string[]>([])

  useEffect(() => {
    // Shuffle the array and take the first 10 elements
    const shuffled = [...suggestedKeywords].sort(() => 0.5 - Math.random())
    setRandomKeywords(shuffled.slice(0, 8))
  }, [])

  const handleKeywordClick = (keyword: string) => {
    setInputValue(keyword)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Function to create a fuzzy regex from the input string
    const createFuzzyRegex = (input: string): RegExp => {
      const processedInput = removeMark(input, { case: 'lower' }).trim()
      const words = processedInput.split(/\W+/).filter(Boolean) // Use \W+ to split by non-word characters
      if (words.length === 0) {
        return new RegExp('.*', 'i') // Match all
      }
      const regexString = words.map((word) => `\\b${word}\\b`).join('|')
      return new RegExp(regexString, 'i')
    }

    const fuzzyRegex = createFuzzyRegex(inputValue)

    const filteredArticles = articles.filter((article) => {
      const processedTitle = removeMark(article.title, { case: 'lower' })
      // const processedExcerpt = removeMark(article.excerpt, { case: 'lower' })
      return fuzzyRegex.test(processedTitle)
    })

    onSearch(filteredArticles)
    console.log('Query submitted:', inputValue)
    console.log('Filtered articles:', filteredArticles)
  }

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        {t('chuyen-trang-suc-khoe.title')}
      </h1>
      <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
        {t('chuyen-trang-suc-khoe.description')}
      </p>

      <form onSubmit={handleSubmit} className="relative mb-10">
        <div className="relative flex items-center glass glow-purple border-2 rounded-lg">
          <Search className="absolute left-4 text-gray-400" size={24} />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={t('chuyen-trang-suc-khoe.search.placeholder')}
            className="w-full py-4 pl-12 pr-16 bg-transparent outline-none rounded-2xl"
          />
          <button
            type="submit"
            className="absolute right-2 p-2 bg-primary rounded-full hover:bg-primary/80 transition-colors"
            aria-label="Submit"
          >
            <ArrowRight className="text-white" size={20} />
          </button>
        </div>
      </form>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {randomKeywords.map((keyword, index) => (
          <KeywordButton
            key={index}
            keyword={keyword}
            onClick={() => handleKeywordClick(keyword)}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchInput
