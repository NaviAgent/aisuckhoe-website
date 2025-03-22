import Head from 'next/head'
import Header from '@website/components/Header'
import Footer from '@website/components/Footer'

import { checkoutAction } from '@/lib/payments/actions'
import { Check } from 'lucide-react'
// import { getStripePrices, getStripeProducts } from '@/lib/payments/stripe';
import { SubmitButton } from './submit-button'

// Prices are fresh for one hour max
export const revalidate = 3600

export default function Pricing() {
  const [prices, products] = await Promise.all([getStripePrices(), getStripeProducts()])

  const basePlan = products.find((product) => product.name === 'Base')
  const plusPlan = products.find((product) => product.name === 'Plus')

  const basePrice = prices.find((price) => price.productId === basePlan?.id)
  const plusPrice = prices.find((price) => price.productId === plusPlan?.id)

  return (
    <>
      <Head>
        <title>AI sức khoẻ - Trợ lý sức khoẻ thông minh mọi gia đình</title>
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto">
          <PricingCard
            name={'Base'}
            price={100000}
            interval={'day'}
            trialDays={0}
            features={['Unlimited Usage', 'Unlimited Workspace Members', 'Email Support']}
            priceId={basePrice?.id}
          />
          <PricingCard
            name={'Plus'}
            price={1200}
            interval={plusPrice?.interval || 'month'}
            trialDays={plusPrice?.trialPeriodDays || 7}
            features={[
              'Everything in Base, and:',
              'Early Access to New Features',
              '24/7 Support + Slack Access',
            ]}
            priceId={plusPrice?.id}
          />
        </div>
      </main>

      <Footer />
    </>
  )
}

function PricingCard({
  name,
  price,
  interval,
  trialDays,
  features,
  priceId,
}: {
  name: string
  price: number
  interval: string
  trialDays: number
  features: string[]
  priceId?: string
}) {
  return (
    <div className="pt-6">
      <h2 className="text-2xl font-medium text-gray-900 mb-2">{name}</h2>
      <p className="text-sm text-gray-600 mb-4">with {trialDays} day free trial</p>
      <p className="text-4xl font-medium text-gray-900 mb-6">
        ${price / 100}{' '}
        <span className="text-xl font-normal text-gray-600">per user / {interval}</span>
      </p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <form action={checkoutAction}>
        <input type="hidden" name="priceId" value={priceId} />
        <SubmitButton />
      </form>
    </div>
  )
}
