/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH0_CLIENT_ID: string
  readonly VITE_AUTH0_DOMAIN: string
  readonly VITE_API_HOST: string
  readonly VITE_WS_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
