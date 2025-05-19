'use client'

import React, { useState, useEffect } from 'react'
import { useI18n } from '@/libs/i18n/client'
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid'
import SearchInput from '@/components/Content/SearchInput'
import Head from 'next/head'
import CommonHeader from '@/components/Common/CommonHeader'
import CommonFooter from '@/components/Common/CommonFooter'
import ArticleCard from '@/components/Content/ArticleCard'
import Link from 'next/link'

export interface Article {
  id: number
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

interface ChuyenTrangSucKhoeClientPageProps {
  articles: Article[]
}

const ChuyenTrangSucKhoeClientPage: React.FC<ChuyenTrangSucKhoeClientPageProps> = ({
  articles,
}) => {
  const t = useI18n()

  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles)

  useEffect(() => {
    setFilteredArticles(articles)
  }, [articles])

  const handleSearch = (filtered: Article[]) => {
    setFilteredArticles(filtered)
  }

  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Head>
        <title>{t('chuyen-trang-suc-khoe.title')}</title>
      </Head>

      <CommonHeader isAbsolute={false} />

      <div className="flex-1 container mx-auto px-4 bg-background">
        {/* Section 1: Chat Input with keyword suggestions */}
        <section className="py-20 px-4">
          <SearchInput articles={articles} onSearch={handleSearch} />
        </section>

        {/* Section 2: Article cards in bento layout */}
        <section className="py-16 px-4">
          <BentoGrid>
            {filteredArticles.map((article) => (
              <BentoGridItem key={article.id}>
                <Link href={`/chuyen-trang-suc-khoe/${article.slug}`}>
                  <ArticleCard {...article} />
                </Link>
              </BentoGridItem>
            ))}
          </BentoGrid>
        </section>
      </div>

      <CommonFooter isAbsolute={false} />
    </main>
  )
}

export default ChuyenTrangSucKhoeClientPage
