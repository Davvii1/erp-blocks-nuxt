import { defineNuxtModule, addLayout, createResolver, addTemplate, addComponentsDir } from '@nuxt/kit'
// import type { NavigationMenuItem } from '@nuxt/ui'

// export interface ModuleOptions {
//   /**
//    * Dashboard Menu Items
//    */
//   menuItems?: NavigationMenuItem[][]
// }

export default defineNuxtModule({
  meta: {
    name: 'erp-blocks',
    configKey: 'erp',
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

    addTemplate({
      filename: 'index.d.ts',
      src: resolve('./runtime/index.d.ts'),
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
