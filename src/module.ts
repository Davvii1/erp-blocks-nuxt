import { defineNuxtModule, addLayout, createResolver, addTemplate } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  defaults: {},
  setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.css.push(resolve('./assets/css/main.css'))

    addTemplate({
      filename: 'app.vue',
      src: resolve('./runtime/app.vue'),
    })

    addLayout({
      src: resolve('./runtime/layouts/dashboard-layout.vue'),
    }, 'dashboard')
  },
  moduleDependencies: {
    '@nuxt/ui': {
      version: '>=4.0.0',
    },
  },
})
