/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_COMPANY: string;
  readonly PUBLIC_DEBUG: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
