'use client'

import { ReactNode } from 'react'
import { I18nProviderClient } from './client'

type Props = {
  locale: string
  children: ReactNode
}

export default function I18nProvider({ locale, children }: Props) {
  return (
    <I18nProviderClient locale={locale || 'vi'} fallback={<p>Loading...</p>}>
      {children}
    </I18nProviderClient>
  )
}
