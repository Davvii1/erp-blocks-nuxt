import { defineNuxtModule, addLayout, createResolver, addTemplate, addComponentsDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  defaults: {},
  setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.css.push(resolve('./assets/css/main.css'))
    nuxt.options.build.transpile.push(resolve('./runtime'))

    addTemplate({
      filename: 'app.vue',
      src: resolve('./runtime/app.vue'),
    })

    addComponentsDir({
      path: resolve('./runtime/components'),
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
