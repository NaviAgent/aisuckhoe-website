import Head from 'next/head'
import { Heart, MessageCircle, Facebook, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@website/components/Header'
import Footer from '@website/components/Footer'
import { ZaloIcon } from '@website/components/icons/zalo'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>AI sức khoẻ - Trợ lý sức khoẻ thông minh mọi gia đình</title>
      </Head>

      <Header />

      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold mb-16">Contact</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Product Support */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-semibold mb-3">Contact Product Support</h2>
              <p className="text-gray-400 mb-6">
                For all things related to AI Sức Khỏe and our products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}
                  className="rounded-full border-gray-700 hover:bg-gray-800 outline outline-1 outline-gray-700 px-4 py-2 text-muted-foreground "
                >
                  EMAIL SUPPORT
                </Link>
                {/* <Button
                  variant="outline"
                  className="rounded-full border-gray-700 hover:bg-gray-800"
                >
                  CALL SUPPORT
                </Button> */}
              </div>
            </div>

            {/* Contact Sales */}
            {/* <div className="border-t border-gray-800 pt-8">
              <div className="flex items-center mb-6">
                <Heart className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-semibold mb-3">Contact Sales</h2>
              <p className="text-gray-400 mb-6">Discover how we can work together.</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="rounded-full border-gray-700 hover:bg-gray-800"
                >
                  EMAIL SALES
                </Button>
              </div>
            </div> */}
          </div>

          {/* Social Media Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {/* X (Twitter) */}
            <Link
              href="https://x.com/aisuckhoe"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <Twitter className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Visit on X</h2>
              <p className="text-gray-400 mb-4">Visit our official X account.</p>
            </Link>

            {/* Facebook */}
            <Link
              href="https://facebook.com/aisuckhoe"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center mb-6">
                <Facebook className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-semibold mb-3">Visit on Facebook</h2>
              <p className="text-gray-400 mb-6">Visit our official Facebook page.</p>
            </Link>

            {/* Zalo */}
            <Link
              href="https://zalo.me/aisuckhoe"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center font-bold text-xl">
                  <ZaloIcon></ZaloIcon>
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-3">Visit on Zalo</h2>
              <p className="text-gray-400 mb-6">Visit our official Zalo community.</p>
            </Link>
          </div>

          {/* Footer */}
          {/* <div className="mt-20 grid grid-cols-2 gap-8 border-t border-gray-800 pt-8">
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">MEDIA</h3>
              <a href="mailto:media@aisuckhoe.vn" className=" hover:text-primary">
                media@aisuckhoe.vn
              </a>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">SAFETY</h3>
              <a href="mailto:safety@aisuckhoe.vn" className=" hover:text-primary">
                safety@aisuckhoe.vn
              </a>
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </>
  )
}
