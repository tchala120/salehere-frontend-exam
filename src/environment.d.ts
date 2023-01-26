/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    // Version
    readonly REACT_APP_VERSION: string

    // Supabase config
    readonly REACT_APP_SUPABASE_URL: string
    readonly REACT_APP_SUPABASE_ANON_KEY: string
  }
}
