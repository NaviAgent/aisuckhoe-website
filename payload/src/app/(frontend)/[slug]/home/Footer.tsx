import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <footer className="bg-white dark:bg-gray-800 py-6 mt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="/about" className="hover:text-teal-500">
              Về chúng tôi
            </Link>
            <Link href="/features" className="hover:text-teal-500">
              Tính năng
            </Link>
            <Link href="/docs" className="hover:text-teal-500">
              Tài liệu
            </Link>
            <Link href="/support" className="hover:text-teal-500">
              Hỗ trợ
            </Link>
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="https://instagram.com" className="hover:text-teal-500">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.358.064-2.622.33-3.586 1.294-1.04 1.04-1.37 2.382-1.434 3.586-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.064 1.358.33 2.622 1.294 3.586 1.04 1.04 2.382 1.37 3.586 1.434 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.358-.064 2.622-.33 3.586-1.294 1.04-1.04 1.37-2.382 1.434-3.586.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.064-1.358-.33-2.622-1.294-3.586-1.04-1.04-2.382-1.37-3.586-1.434-1.28-.058-1.688-.072-4.947-.072h0Z" />
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162m0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4m6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441" />
              </svg>
            </Link>
            <Link href="https://twitter.com" className="hover:text-teal-500">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06c0 2.385 1.693 4.374 3.946 4.827a4.953 4.953 0 01-2.224.084 4.928 4.928 0 004.6 3.419 9.9 9.9 0 01-6.114 2.107c-.398 0-.79-.023-1.175-.068a13.953 13.953 0 007.548 2.213c9.057 0 14.01-7.5 14.01-14.01 0-.213-.005-.426-.015-.637a10.02 10.02 0 002.458-2.548l-.047-.02z" />
              </svg>
            </Link>
            <Link href="https://linkedin.com" className="hover:text-teal-500">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
          </div>
          <p className="mt-4">&copy; 2025 AI Sức Khỏe. All rights reserved.</p>
        </div>
      </footer>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">Corti</h3>
          <p>About Us</p>
          <p>Research</p>
          <p>Stories</p>
          <p>Newsroom</p>
          <p>Contact</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">API</h3>
          <p>Foundation Models</p>
          <p>AI Platform</p>
          <p>Documentation</p>
          <p>Products</p>
          <p>Corti Assistant</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Resources</h3>
          <p>Blog</p>
          <p>GitHub</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
      <p className="text-center mt-8 text-gray-500">© 2025 Corti. All rights reserved.</p>
    </footer>
  )
}
