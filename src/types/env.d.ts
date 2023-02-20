/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_GITHUB_TOKEN: string;
  readonly VITE_APP_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
