/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_NAME: string
  readonly VITE_APP_VERSION: string
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_CONTACT_PHONE: string
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_GA_TRACKING_ID: string
  readonly VITE_FACEBOOK_PIXEL_ID: string
  readonly VITE_LINKEDIN_INSIGHT_TAG: string
  readonly VITE_SITE_URL: string
  readonly VITE_SITE_TITLE: string
  readonly VITE_SITE_DESCRIPTION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 