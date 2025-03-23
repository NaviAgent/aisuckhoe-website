import Head from 'next/head'
import Header from '@website/components/Header'
import Footer from '@website/components/Footer'
import { Check } from 'lucide-react'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>AI sức khoẻ - Bảng giá</title>
      </Head>

      <Header isAbsolute={true} />

      <main className="max-w-7xl mx-auto sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Bảng giá dịch vụ</h1>
          <p className="mt-4 text-lg text-gray-600">
            Chọn gói dịch vụ phù hợp với nhu cầu của bạn.
          </p>
        </div>

        <div className="flex flex-col gap-8 mt-10 max-w-md mx-auto">
          <PricingCard
            name={'Gói Cơ Bản'}
            price={'100.000 VNĐ/tháng'}
            description={'Dành cho người dùng cá nhân'}
            queries={'100 lượt/ngày (~3100 lượt hỏi mỗi tháng)'}
            features={['100 lượt hỏi mỗi ngày', 'AI mới nhất', 'Hỗ trợ cơ bản']}
            discountedPrice={'1.200.000 VNĐ/năm (tiết kiệm 1 tháng)'}
            popular={true}
          />
          <PricingCard
            name={'Gói Linh Hoạt'}
            price={'50.000 VNĐ/tháng'}
            description={'Phù hợp với nhu cầu ít hơn'}
            queries={'1200 lượt hỏi/tháng'}
            features={['1200 lượt hỏi mỗi tháng', 'Linh hoạt, chi phí thấp', 'Hỗ trợ cơ bản']}
          />
          <PricingCard
            name={'Gói Đồng Hành'}
            price={'Coming Soon'}
            description={'Dành cho người dùng có nhu cầu cao'}
            queries={'Tính năng đang phát triển'}
            features={['Ưu tiên hỗ trợ', 'Không giới hạn lượt hỏi', 'Tính năng độc quyền']}
            comingSoon={true}
          />
        </div>
      </main>

      <Footer isAbsolute={false} />
    </>
  )
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  queries: string;
  features: string[];
  comingSoon?: boolean;
  discountedPrice?: string;
  popular?: boolean;
}

function PricingCard({
  name,
  price,
  description,
  queries,
  features,
  comingSoon,
  discountedPrice,
  popular,
}: PricingCardProps) {
  return (
    <div className={`pt-6 p-4 rounded-lg shadow-xl flex flex-col justify-between h-full bg-card bg-gradient-to-br from-muted to-card ${
      comingSoon ? "opacity-50 cursor-not-allowed" : ""
    }`}>
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2 text-center">{name}</h2>
        <p className="text-sm text-muted-foreground mb-4 text-center">{description}</p>
        <p className="text-4xl font-bold text-primary mb-6 text-center">{price}</p>
        <p className="text-sm text-muted-foreground mb-4 text-center">{queries}</p>
        <ul className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        {discountedPrice && (
          <p className="text-sm text-muted-foreground mb-4 text-center">{discountedPrice}</p>
        )}
      </div>
      {popular && (
        <div className="absolute top-0 right-0 bg-success text-primary-foreground py-1 px-2 rounded-br-lg rounded-tl-none text-xs font-bold">
          Popular
        </div>
      )}
      <button
        className={`bg-primary hover:bg-primary-foreground text-primary-foreground font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline w-full ${
          comingSoon ? 'cursor-not-allowed' : ''
        }`}
        disabled={comingSoon}
      >
        {comingSoon ? 'Sắp ra mắt' : 'Chọn gói này'}
      </button>
    </div>
  )
}
