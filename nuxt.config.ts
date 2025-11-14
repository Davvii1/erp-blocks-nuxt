export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
