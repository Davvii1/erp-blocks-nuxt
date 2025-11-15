import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
  ],
  components: [join(currentDir, './runtime/components')],
  imports: {
    dirs: [join(currentDir, './runtime/components')],
  },
  css: [join(currentDir, './assets/css/tailwind.css')],
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
