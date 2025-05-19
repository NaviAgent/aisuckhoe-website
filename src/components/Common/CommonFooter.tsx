'use client'
import Link from 'next/link'
import { Facebook, Twitter } from 'lucide-react'
import { useI18n } from '@/libs/i18n/client'
import { FacebookIcon } from '../icons/facebook'
import { XIcon } from '../icons/x'
import { ZaloIcon } from '../icons/zalo'
import { TelegramIcon } from '../icons/telegram'
import { TiktokIcon } from '../icons/tiktok'
import { YoutubeIcon } from '../icons/youtube'

interface FooterProps {
  isAbsolute?: boolean
}

const CommonFooter: React.FC<FooterProps> = ({ isAbsolute = true }) => {
  const t = useI18n()
  const positionClass = isAbsolute ? 'absolute' : 'relative'

  return (
    <footer
      className={`${positionClass} bottom-0 w-full z-10 bg-background text-foreground py-6 md:py-10`}
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Footer Bottom */}
        {/* <div className="mt-6 border-t border-border flex flex-col lg:flex-row items-center justify-between"></div> */}
        <div className="mt-6 flex flex-row justify-between items-center lg:items-center">
          {/* Links */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 lg:mt-0">
            <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-2">
              <Link href="/pricing" className="px-4 py-2 text-sm text-foreground transition">
                {t('common.pricing')}
              </Link>
              <Link
                href="/chuyen-trang-suc-khoe"
                className="px-4 py-2 text-sm text-foreground transition"
              >
                {t('common.chuyenTrangSucKhoe')}
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4 lg:mt-0">
            <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-2">
              <Link href="/#faqs" className="px-4 py-2 text-sm text-foreground transition">
                {t('common.faqs')}
              </Link>
              <Link href="/contact" className="px-4 py-2 text-sm text-foreground transition">
                {t('common.contact')}
              </Link>
              <Link href="/privacy-policy" className="px-4 py-2 text-sm text-foreground transition">
                {t('common.privacyPolicy')}
              </Link>
              <Link
                href="/terms-and-conditions"
                className="px-4 py-2 text-sm text-foreground transition"
              >
                {t('common.termsAndConditions')}
              </Link>
            </div>
            {/* <button className="px-4 py-2 text-sm text-foreground transition">
              Socials
            </button> */}
            {/* New Social Links */}
            <div className="flex gap-4">
              <Link href="https://youtube.com/@aisuckhoevn" target="_blank">
                <YoutubeIcon className="w-6 h-6" />
              </Link>
              <Link href="https://www.facebook.com/aisuckhoe" target="_blank">
                <FacebookIcon className="w-6 h-6" />
              </Link>
              <Link href="https://www.tiktok.com/@aisuckhoevn" target="_blank">
                <TiktokIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <p className="pt-6 text-xs text-center text-muted-foreground">
          {t('common.allRightsReserved')}
        </p>
      </div>
    </footer>
  )
}

export default CommonFooter
