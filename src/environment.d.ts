declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URI: string
      NEXT_PUBLIC_SERVER_URL: string
      VERCEL_PROJECT_PRODUCTION_URL: string
      NEXT_PUBLIC_GTM_ID: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
