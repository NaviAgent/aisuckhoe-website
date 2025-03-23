// components/Footer.tsx
'use client'
// import websiteConfig from '@website/website.config'
import Link from 'next/link'
import { Facebook, Twitter } from 'lucide-react'

interface FooterProps {
  isAbsolute?: boolean
}

const Footer: React.FC<FooterProps> = ({ isAbsolute = true }) => {
  const positionClass = isAbsolute ? 'absolute' : 'relative'

  return (
    <footer
      className={`${positionClass} bottom-0 w-full z-10 bg-background text-foreground py-6 md:py-10`}
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Footer Bottom */}
        {/* <div className="mt-6 border-t border-border flex flex-col lg:flex-row items-center justify-between"></div> */}
        <div className="mt-6 border-t border-border  flex flex-row justify-between items-center lg:items-center">
          {/* Links */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 lg:mt-0">
            <Link
              href="/pricing"
              className="px-4 py-2 text-sm rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition"
            >
              Gói dịch vụ
            </Link>
            <Link
              href="/faqs"
              className="px-4 py-2 text-sm rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition"
            >
              Câu hỏi thường gặp
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition"
            >
              Liên hệ
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-4 lg:mt-0">
            <Link
              href="/privacy-policy"
              className="px-4 py-2 text-sm rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition"
            >
              Chính sách bảo mật
            </Link>
            <Link
              href="/terms-and-conditions"
              className="px-4 py-2 text-sm rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition"
            >
              Điều kiện và điều khoản
            </Link>
            {/* <button className="px-4 py-2 text-sm rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition">
              Socials
            </button> */}
            {/* New Social Links */}
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/yourpage" target="_blank">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="https://www.tiktok.com/@yourpage" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-tiktok"
                >
                  <path d="M9 12a3 3 0 1 0 6 0v-1.5a9.5 9.5 0 1 1 3 7.56V22" />
                  <path d="M16 8.2A5 5 0 0 1 12 13v3a2 2 0 1 0 4 0" />
                </svg>
              </Link>
              <Link href="https://x.com/yourpage" target="_blank">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <p className="pt-6 text-xs text-center text-muted-foreground">
          Copyright © 2025. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
