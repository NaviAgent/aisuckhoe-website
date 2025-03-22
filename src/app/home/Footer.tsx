// components/Footer.tsx
'use client'
// import websiteConfig from '@website/website.config'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full z-10 bg-background text-foreground py-6 md:py-10">
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
              Pricing
            </Link>
            <Link
              href="/faqs"
              className="px-4 py-2 text-sm rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-4 lg:mt-0">
            <Link
              href="/privacy-policy"
              className="px-4 py-2 text-sm rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="px-4 py-2 text-sm rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition"
            >
              Terms and Conditions
            </Link>
            {/* <button className="px-4 py-2 text-sm rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition">
              Socials
            </button> */}
            {/* New Social Links */}
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/yourpage" target="_blank">
                <img src="/path/to/facebook-logo.png" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="https://www.tiktok.com/@yourpage" target="_blank">
                <img src="/path/to/tiktok-logo.png" alt="TikTok" width={24} height={24} />
              </Link>
              <Link href="https://x.com/yourpage" target="_blank">
                <img src="/path/to/x-logo.png" alt="X" width={24} height={24} />
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
