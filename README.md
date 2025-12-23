# ERP Blocks for Nuxt 4

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A collection of ready-to-use UI layouts and components designed as ERP system elements for Nuxt 4 applications.

## Features

- 🏗️ **Dashboard Layout** - Responsive dashboard layout with collapsible sidebar
- 🔄 **Data Fetching** - Enhanced `useCountFetch` composable for handling paginated data
- 🎨 **Pre-styled Components** - Common ERP components with consistent styling
- 🧩 **Modular Design** - Easy to customize and extend for your needs
- 🚀 **Nuxt 4 Ready** - Built with Nuxt 4 and Vue 3 Composition API

## Installation

1. Add `erp-blocks` dependency to your project:

```bash
npm install erp-blocks
# or
yarn add erp-blocks
# or
pnpm add erp-blocks
```

2. Add `erp-blocks` to the `modules` section of `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['erp-blocks']
})
```

## Usage

### Dashboard Layout

Use the provided dashboard layout in your pages:

```vue
<template>
  <div>
    <!-- Your page content -->
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
  layout: 'dashboard'
})
</script>
```

### useCountFetch Composable

The `useCountFetch` composable extends Nuxt's `useFetch` with count tracking capabilities, useful for paginated data:

```ts
const { data, pending, error, count } = useCountFetch('/api/items', {
  count: {
    source: 'header', // or 'key' for JSON response
    name: 'X-Total-Count' // header name or object key
  },
  // Standard useFetch options
  query: {
    page: 1,
    limit: 10
  }
})
```

### Available Components

- `CollapsibleSidebar` - A responsive, collapsible sidebar component
- `NavigationHeader` - Top navigation bar component

</details>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
