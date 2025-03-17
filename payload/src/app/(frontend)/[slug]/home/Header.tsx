import Link from 'next/link'
import Image from 'next/image'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/ivanistao/image/upload/t_Profile/v1740834460/aisuckhoe/logo/logo-light_a53s1a.png"
            alt="AI Sức Khỏe Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-teal-500">AI Sức Khỏe</span>
        </Link>
        <nav className="space-x-6">
          <Link href="#features" className="text-gray-700 dark:text-gray-300 hover:text-teal-500">
            Tính năng
          </Link>
          <Link href="#webapp" className="text-gray-700 dark:text-gray-300 hover:text-teal-500">
            WebApp
          </Link>
          <Link href="#telegram" className="text-gray-700 dark:text-gray-300 hover:text-teal-500">
            Telegram
          </Link>
          <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-teal-500">
            Liên hệ
          </Link>
        </nav>
        <ThemeSelector />
      </div>
    </header>
  )
}

export default Header
