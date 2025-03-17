import { getCachedGlobal } from '@/utilities/getGlobals'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import RichText from '@/components/RichText'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  if (!footerData) {
    return null
  }

  const { navColumns } = footerData

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <footer className="mt-auto border-t border-border">
      <div className="container py-8 gap-8 flex flex-col md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo loading="eager" />
          <h1 className="text-3xl">Aisuckhoe</h1>
        </Link>

        <Fragment>
          {navColumns?.map(({ columns }, i) => {
            return (
              <div className="border-b border-border" key={i}>
                <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
                  {columns &&
                    columns.length > 0 &&
                    columns.map((col, index) => {
                      const { enableLink, link, richText, size } = col

                      return (
                        <div
                          className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]}`, {
                            'md:col-span-2': size !== 'full',
                          })}
                          key={index}
                        >
                          {richText && <RichText data={richText} enableGutter={false} />}

                          {enableLink && <CMSLink {...link} />}
                        </div>
                      )
                    })}
                </div>
              </div>
            )
          })}
        </Fragment>
      </div>
    </footer>
  )
}
