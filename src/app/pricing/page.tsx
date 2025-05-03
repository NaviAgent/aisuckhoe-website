'use client'

import { Metadata } from 'next'
import Head from 'next/head'
import './pricing.css'
import Footer from '@/components/Common/CommonFooter'
import Header from '@/components/Common/CommonHeader'
import PricingCard from '@/components/Pricing/PricingCard'
import { useI18n } from '@/libs/i18n/client'

// export const metadata: Metadata = {
//   title: 'Pricing | Aisuckhoe',
//   description: 'Aisuckhoe Pricing Plans',
// }

const pricingData = [
  {
    name: 'Gói Gia đình',
    description: 'Dành cho gia đình',
    price: '200.000 VNĐ',
    queries: '/ tháng',
    features: [
      'Cho cả gia đình 3 người',
      '200 lượt/ngày',
      '1 AI mới nhất',
      '1 GB hình ảnh và video',
      'Hổ trợ nâng cấp thành viên gia đình',
      'Sao lưu hồ sơ gia đình',
      'Hổ trợ qua fanpage',
    ],
    discountedPrice: '12+1 giá không đổi (tiết kiệm 8%)',
    buttonLink: '#',
  },
  // {
  //   name: 'Gói Cơ bản',
  //   description: 'Dành cho người dùng cá nhân',
  //   price: '100.000 VNĐ',
  //   queries: '/ tháng',
  //   features: [
  //     'Cho gia đình 2 người',
  //     '100 lượt/ngày (~3100 lượt hỏi mỗi tháng)',
  //     '1 AI mới nhất',
  //     '1 GB hình ảnh và video',
  //     'Sao lưu hồ sơ gia đình',
  //     'Hổ trợ qua fanpage',
  //   ],
  //   discountedPrice: '12+1 giá không đổi (tiết kiệm 8%)',
  //   popular: true,
  //   buttonLink: '#',
  // },
  {
    name: 'Gói Linh Hoạt',
    description: 'Phù hợp cho nhu cầu ít',
    price: '50.000 VNĐ',
    queries: '/ tháng',
    features: [
      'Cho gia đình 2 người',
      'Linh hoạt, chi phí thấp',
      '1200 lượt/tháng',
      '1 AI mới nhất',
      '1 GB hình ảnh và video',
      'Hổ trợ qua fanpage',
    ],
    buttonLink: '#',
    popular: true,
  },
  {
    name: 'Gói Đồng Hành',
    description: 'Dành cho cá nhân cần AI đồng hành',
    price: 'Coming Soon',
    queries: '/ month',
    features: ['Tính năng đang phát triển', 'Không giới hạn lượt hỏi', 'Tính năng độc quyền'],
    buttonLink: '#',
    comingSoon: true,
  },
]

export default function PricingPage() {
  const t = useI18n()
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Head>
        <title>{t('common.title')}</title>
      </Head>

      <Header isAbsolute={false} />

      <div className="flex-1 container mx-auto px-4 bg-background">
        <div className="">
          <div className="text-center mt-12 mb-24">
            <h1 className="text-4xl font-bold text-foreground">{t('PricingPage.title')}</h1>
            <p className="text-muted-foreground mt-2">{t('PricingPage.description')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-1">
            {pricingData.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>

      <Footer isAbsolute={false} />
    </main>
  )
}
