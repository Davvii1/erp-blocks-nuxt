declare module '#app' {
  interface PageMeta {
    dashboardTitle?: string
  }
}

declare module 'nuxt/schema' {
  interface AppConfigInput {
    erp?: {
      menuItems?: NavigationMenuItem[][]
    }
  }
}

export {}
