'use client'
import Link from 'next/link'
import clsx from 'clsx'

const CTAButton = ({ text = '', href = '/', isPrimary = false }) => {
  return (
    <Link
      href={href}
      className={clsx(
        'px-6 py-3 rounded-full text-lg font-semibold border transition-all',
        isPrimary
          ? 'bg-primary text-primary-foreground hover:bg-opacity-80'
          : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground',
      )}
    >
      {text}
    </Link>
  )
}

export function WebAppCTA() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 p-10 bg-card rounded-2xl shadow-lg max-w-3xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-center text-foreground">
        Chat trực tiếp từ trình duyệt web
      </h2>
      <p className="text-center text-muted-foreground max-w-xl">
        Chỉ một cú nhấp – hỏi AI sức khoẻ dễ dàng từ trình duyệt của bạn!
      </p>
      <CTAButton text="Bắt đầu trò chuyện ngay" href="/chat" isPrimary />
    </section>
  )
}

export function TelegramCTA() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 p-10 bg-card rounded-2xl shadow-lg max-w-3xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-center text-foreground">Chat từ ứng dụng Telegram</h2>
      <p className="text-center text-muted-foreground max-w-xl">
        Nhắn tin liền mạch – sức khỏe gia đình luôn được chăm sóc!
      </p>
      <CTAButton text="Chat trên Telegram ngay" href="https://t.me/yourbot" />
    </section>
  )
}
