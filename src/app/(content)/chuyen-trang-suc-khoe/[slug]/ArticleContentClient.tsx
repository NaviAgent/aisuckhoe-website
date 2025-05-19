'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useI18n } from '@/libs/i18n/client'
import CommonCTAButton from '@/components/Common/CommonCTAButton'
import { Card } from '@/components/ui/card'

interface ArticleContentClientProps {
  fileContent: string
  fileExtension: string
  metadata: {
    title: string
    slug: string
    excerpt: string
    image: string
    category: string
    date: string
    readTime: string
    author: string
    callToAction?: string
  }
}

const ArticleContentClient: React.FC<ArticleContentClientProps> = ({
  fileContent,
  fileExtension,
  metadata, // Accept metadata prop
}) => {
  const t = useI18n()

  const renderContent = () => {
    switch (fileExtension) {
      case '.md':
        return (
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
              h3: ({ children }) => <h3 className="text-lg font-bold">{children}</h3>,
              p: ({ children }) => (
                <p
                  className="text-base text-gray-800 mb-4"
                  style={{
                    letterSpacing: '0.01em',
                    lineHeight: '2',
                  }}
                >
                  {children}
                </p>
              ),
              li: ({ children }) => (
                <li
                  className="text-base text-gray-800 mb-4"
                  style={{
                    letterSpacing: '0.01em',
                    lineHeight: '2',
                  }}
                >
                  {children}
                </li>
              ),
            }}
          >
            {fileContent}
          </ReactMarkdown>
        )
      case '.html':
        return <div dangerouslySetInnerHTML={{ __html: fileContent }} /> // Render raw HTML (be cautious with security)
      case '.css':
        return (
          <>
            <style>{fileContent}</style>
            <div>CSS content loaded.</div>
          </>
        ) // Embed CSS
      case '.js':
        return (
          <>
            <script>{fileContent}</script>
            <div>JS content loaded.</div>
          </>
        ) // Embed JS
      default:
        return <p>Unsupported file type: {fileExtension}</p>
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center text-sm text-gray-500">
          <span className="flex items-center">
            <span className="mr-2">📅</span>
            {metadata.date}
          </span>
          <span className="mx-3">•</span>
          <span>{metadata.readTime} read</span>
          <span className="mx-3">•</span>
          <span>{metadata.author}</span>
        </div>
      </div>

      {renderContent()}

      {metadata.callToAction && (
        <Card className="p-4 mt-4">
          <h3 className="text-lg font-bold mb-2">{metadata.callToAction}</h3> {/* Added a title */}
          <CommonCTAButton
            onClick={() => window.location.replace('https://hoi.aisuckhoe.com/chat')}
            text={t('Content.promote')}
            size="clear"
          />
        </Card>
      )}
    </>
  )
}

export default ArticleContentClient
