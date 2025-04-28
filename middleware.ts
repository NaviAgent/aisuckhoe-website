import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'vi'],
  defaultLocale: 'vi',
  urlMappingStrategy: 'redirect', // Keeps locale in URL path e.g. /vi/chat
  // Optional: Enable redirection based on Accept-Language header
  // headerDetection: true,
  // Optional: Define URL mapping for locales
  // urlMapping: {
  //   pt: '/pt-BR',
  // },
  // Optional: Prefix the default locale
  // prefixDefault: true,
})

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: [
    '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)',
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
}
