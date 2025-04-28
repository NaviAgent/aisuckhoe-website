'use client'
import Head from 'next/head'
import { MessageCircle, Twitter } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Common/CommonHeader'
import { ZaloIcon } from '@website/components/icons/zalo'
import Footer from '@/components/Common/CommonFooter'
import { getClientEnv } from '@/libs/env'
import { useI18n } from '@/libs/i18n/client'
import { FacebookIcon } from '@/components/icons/facebook'
import { XIcon } from '@/components/icons/x'

export default function ContactPage() {
  const t = useI18n()
  const clientEnv = getClientEnv()
  const supportEmail = clientEnv.NEXT_PUBLIC_SUPPORT_EMAIL
  const socialLinks = {
    X: {
      name: 'X',
      href: 'https://x.com/aisuckhoe',
      icon: <XIcon className="w-6 h-6 text-primary" />,
      description: 'Kết nối tài khoản trên X',
    },
    Facebook: {
      name: 'Facebook',
      href: 'https://facebook.com/aisuckhoe',
      icon: <FacebookIcon className="w-6 h-6 text-primary" />,
      description: 'Kết nối tài khoản fanpage Facebook',
    },
    Zalo: {
      name: '',
      href: 'https://zalo.me/aisuckhoe',
      icon: <ZaloIcon className="w-12 h-12 text-primary" />,
      description: 'Kết nối tài khoản trên Zalo',
    },
  }

  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Head>
        <title>{t('common.title')}</title>
      </Head>
      <Header isAbsolute={false} />

      <div className="flex-1 container max-w-3xl mx-auto px-4 bg-background">
        <div className="text-center my-12">
          <h1 className="text-4xl font-bold">{t('ContactPage.title')}</h1>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-16 h-16 text-primary" />
              <span className="text-muted-foreground ml-6">
                {t('ContactPage.contact.description')}
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`mailto:${supportEmail}`}
                className="inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none data-[state=open]:bg-secondary/50 bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2"
              >
                {t('ContactPage.contact.emailSupport')}
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-20 mb-4">
          <h2 className="text-3xl font-semibold mb-8 text-foreground">
            {t('ContactPage.social.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(socialLinks).map(([index, social]) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  {social.icon}
                  <p className="text-muted-foreground ml-2">
                    {t(`ContactPage.social.${index as keyof typeof socialLinks}.description`)}
                  </p>
                  {/* <h3 className="text-xl font-semibold ml-2 text-foreground">
                    {t(`ContactPage.social.${index as keyof typeof socialLinks}.name`)}
                  </h3> */}
                </div>
                {/* <p className="text-muted-foreground">
                  {t(`ContactPage.social.${index as keyof typeof socialLinks}.description`)}
                </p> */}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer isAbsolute={false} />
    </main>
  )
}
