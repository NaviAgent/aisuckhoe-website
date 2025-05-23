import z from 'zod'

// Schema cho client-side
export const ENV = {
  // client env
  NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
  NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
  NEXT_PUBLIC_APP_LOGO:
    'https://res.cloudinary.com/aisuckhoe/image/upload/w_100,ar_1:1,c_fill,g_auto,e_art:hokusai/v1744884433/logo_lrpuv3.svg',
  NEXT_PUBLIC_SUPPORT_EMAIL: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'xinchao@aisuckhoe.com',
  // server env
}

const clientEnvSchema = z.object({
  NEXT_PUBLIC_SERVER_URL: z.string(),
  NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(),
  NEXT_PUBLIC_GTM_ID: z.string(),
  NEXT_PUBLIC_APP_LOGO: z.string().optional(),
  NEXT_PUBLIC_SUPPORT_EMAIL: z.string().optional(),
})

const serverEnvSchema = z.object({})

// Validate env dựa trên môi trường
const isServer = typeof window === 'undefined'
// export const serverEnv = isServer ? serverEnvSchema.parse(ENV) : null;
// export const clientEnv = clientEnvSchema.parse(ENV);
export const getClientEnv = () => {
  return clientEnvSchema.parse(ENV)
}

export const getServerEnv = () => {
  if (isServer) return serverEnvSchema.parse(ENV)
  else throw new Error('Invalid env')
}
