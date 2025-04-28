import Head from 'next/head'
import { MessageCircle, Facebook, Twitter } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Common/CommonHeader'
import { ZaloIcon } from '@website/components/icons/zalo'
import Footer from '@/components/Common/CommonFooter'
import { getClientEnv } from '@/libs/env'

export default function ContactPage() {
  const clientEnv = getClientEnv()
  const supportEmail = clientEnv.NEXT_PUBLIC_SUPPORT_EMAIL
  const socialLinks = [
    {
      name: 'X',
      href: 'https://x.com/aisuckhoe',
      icon: <Twitter className="w-6 h-6 text-primary" />,
      description: 'Kết nối tài khoản trên X',
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/aisuckhoe',
      icon: <Facebook className="w-6 h-6 text-primary" />,
      description: 'Kết nối tài khoản fanpage Facebook',
    },
    {
      name: 'Zalo',
      href: 'https://zalo.me/aisuckhoe',
      icon: <ZaloIcon className="w-6 h-6 text-primary" />,
      description: 'Kết nối tài khoản trên Zalo',
    },
  ]

  return (
    <>
      <Head>
        <title>AI sức khoẻ - Trợ lý sức khoẻ thông minh mọi gia đình</title>
      </Head>
      <main className="flex flex-col justify-between min-h-screen">
        <Header isAbsolute={false} />

        <div className="flex-1 container max-w-6xl mx-auto px-4 bg-background">
          <div className="text-left my-12">
            <h1 className="text-4xl font-bold mb-16 text-foreground">Liên hệ</h1>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg shadow-md bg-card">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">Thắc mắc về dịch vụ</h2>
              <p className="text-muted-foreground mb-6">
                Mọi thắc mắc về sản phẩm công nghệ AI Sức Khỏe xin gửi về địa chỉ mail dưới đây
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`mailto:${supportEmail}`}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none data-[state=open]:bg-secondary/50 bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2"
                >
                  Email Support
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-20">
            <h2 className="text-3xl font-semibold mb-8 text-foreground">
              Kết nối và follow đội ngũ
            </h2>
            <div className="grid grid-rows-1 md:grid-rows-3 gap-8">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-card"
                >
                  <div className="flex items-center mb-4">
                    {social.icon}
                    <h3 className="text-xl font-semibold ml-2 text-foreground">{social.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{social.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Footer isAbsolute={false} />
      </main>
    </>
  )
}
