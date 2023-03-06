import 'vite/client'

interface ImportMetaEnv {
  readonly VITE_CLOUDINARY_PRODUCT_ENVIRONMENT: string
  readonly VITE_CLOUDINARY_API_KEY: string
  readonly VITE_CLOUDINARY_UPLOAD_PRESET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
