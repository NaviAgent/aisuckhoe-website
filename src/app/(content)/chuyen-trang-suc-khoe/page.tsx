import React from 'react'
import fs from 'fs/promises'
import path from 'path'
import ChuyenTrangSucKhoeClientPage from './ChuyenTrangSucKhoeClientPage'
import matter from 'gray-matter'
import type { Metadata } from 'next'

interface Article {
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

export async function generateMetadata(): Promise<Metadata> {
  // Basic metadata for the page
  const metadata: Metadata = {
    title: 'Chuyên Trang Sức Khỏe',
    description: 'Tổng hợp các bài viết về sức khỏe',
    openGraph: {
      title: 'Chuyên Trang Sức Khỏe',
      description: 'Tổng hợp các bài viết về sức khỏe',
      url: 'https://aisuckhoe.com/chuyen-trang-suc-khoe', // Replace with your actual URL
      type: 'website',
    },
  }
  return metadata
}

async function getArticles(): Promise<Article[]> {
  const contentDir = path.join(process.cwd(), 'src', 'contents', 'chuyen-trang-suc-khoe')
  const filenames = await fs.readdir(contentDir)

  const articles = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith('.md'))
      .map(async (filename) => {
        const filePath = path.join(contentDir, filename)
        const fileContent = await fs.readFile(filePath, 'utf-8')
        const { data, content } = matter(fileContent)

        // Extract title (H1) and sapo (first paragraph after H1) from content if not in frontmatter
        const lines = content.split('\n')
        let title = data.title || ''
        let sapo = data.excerpt || ''
        let foundTitle = false

        if (!title) {
          for (const line of lines) {
            if (line.startsWith('# ') && !foundTitle) {
              title = line.replace('# ', '').trim()
              foundTitle = true
            } else if (foundTitle && line.trim() !== '' && !line.startsWith('---') && sapo === '') {
              sapo = line.trim()
            } else if (sapo !== '' && line.startsWith('---')) {
              // Stop after finding sapo and encountering a horizontal rule
              break
            }
          }
        }

        const slug = filename.replace(/\.md$/, '')

        return {
          id: Math.random(), // Simple unique ID for now
          title,
          slug,
          excerpt: sapo,
          image: data.image || '',
          category: data.category || '',
          date: data.date || '',
          readTime: data.readTime || '',
          author: data.author || '',
          size: data.size || undefined,
        }
      }),
  )

  return articles
}

const Page = async () => {
  const articles = await getArticles()

  return <ChuyenTrangSucKhoeClientPage articles={articles} />
}

export default Page
