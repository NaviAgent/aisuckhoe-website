import { Check } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import type { UrlObject } from 'url'
import { useI18n } from '@/libs/i18n/client'

interface PricingCardProps {
  name: string
  price: string
  description: string
  queries: string
  features: string[]
  comingSoon?: boolean
  discountedPrice?: string
  popular?: boolean
  buttonLink?: string | UrlObject
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  queries,
  features,
  comingSoon,
  discountedPrice,
  popular = false,
  buttonLink,
}: PricingCardProps) => {
  const t = useI18n()
  return (
    <div
      className={`pt-6 p-4 rounded-lg shadow-xl flex flex-col justify-between h-full bg-card bg-gradient-to-br from-muted to-card ${
        comingSoon ? 'opacity-50 cursor-not-allowed' : ''
      } ${popular ? 'popular-card mx-4' : ''}`}
    >
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2 text-center">{name}</h2>
        <p className="text-sm text-muted-foreground mb-4 text-center">{description}</p>
        <p className="text-4xl font-bold text-primary mb-6 text-center">{price}</p>
        <p className="text-sm text-muted-foreground mb-4 text-center">{queries}</p>
        <Link
          href={buttonLink || '#'}
          className={`w-full ${comingSoon ? 'cursor-not-allowed' : ''}`}
        >
          <Button variant={popular ? 'accept' : 'default'} className="w-full">
            {comingSoon ? 'Sắp ra mắt' : popular ? 'Thử miễn phí' : 'Đăng ký ngay'}
          </Button>
        </Link>
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
        <div className="absolute top-0 right-0 bg-secondary text-primary-foreground py-1 px-2 rounded-lg text-xs font-bold">
          {t('common.popular')}
        </div>
      )}
    </div>
  )
}

export default PricingCard
