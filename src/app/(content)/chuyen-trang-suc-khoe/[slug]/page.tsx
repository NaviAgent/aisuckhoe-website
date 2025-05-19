import React from 'react'
import fs from 'fs/promises'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import Header from '@/components/Home/Header'
import matter from 'gray-matter'
import CommonHeader from '@/components/Common/CommonHeader'
import CommonFooter from '@/components/Common/CommonFooter'
import ArticleContentClient from './ArticleContentClient'
import CommonCTAButton from '@/components/Common/CommonCTAButton'

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src', 'contents', 'chuyen-trang-suc-khoe')
  const files = await fs.readdir(contentDir)

  const slugs = files
    .filter((file) => file !== 'page.tsx') // Exclude page.tsx
    .map((file) => {
      const fileName = path.parse(file).name // Get filename without extension
      return { slug: fileName }
    })

  return slugs
}

export default async function ChuyenTrangSucKhoePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  let fileContent = '<p>Content not found.</p>'
  let metadata = {
    title: '',
    slug: '',
    excerpt: '',
    image: '',
    category: '',
    date: '',
    readTime: '',
    author: '',
    callToAction: undefined,
  }
  const { slug } = await params
  const supportedExtensions = ['.md', '.html', '.css', '.js']
  let filePath = ''
  let fileExtension = ''
  let foundFile = false

  for (const ext of supportedExtensions) {
    const currentPath = path.join(
      process.cwd(),
      'src',
      'contents',
      'chuyen-trang-suc-khoe',
      `${slug}${ext}`,
    )
    try {
      await fs.access(currentPath) // Check if file exists
      filePath = currentPath
      fileExtension = ext
      foundFile = true
      break
    } catch (error) {
      // File not found, try next extension
    }
  }

  if (foundFile) {
    try {
      const rawContent = await fs.readFile(filePath, 'utf-8')
      if (fileExtension === '.md') {
        const { content, data } = matter(rawContent)
        fileContent = content
        metadata = {
          title: data.title || '',
          slug: slug, // Use the slug from params
          excerpt: data.excerpt || '',
          image: data.image || '',
          category: data.category || '',
          date: data.date || '',
          readTime: data.readTime || '',
          author: data.author || '',
          callToAction: data.callToAction || undefined,
        }
      } else {
        fileContent = rawContent
      }
    } catch (error: any) {
      console.error('Error reading content file:', error)
      fileContent = `<p>Error reading content file: ${error.message}</p>`
    }
  } else {
    fileContent = `<p>Content file not found for slug: ${slug}</p>`
  }

  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Head>
        {/* You might want to fetch the title from the content or use a different approach */}
        <title>Article</title>
      </Head>

      <CommonHeader isAbsolute={true} />

      <div className="flex-1 container max-w-4xl px-4 bg-background">
        <div className="rounded-xl shadow-md p-8 w-full max-w-3xl my-16">
          <div className="flex flex-col gap-4">
            <ArticleContentClient
              fileContent={fileContent}
              fileExtension={fileExtension}
              metadata={metadata}
            />
          </div>
        </div>
      </div>

      <CommonFooter isAbsolute={false} />
    </main>
  )
}
