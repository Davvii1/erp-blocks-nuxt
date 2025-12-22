<template>
  <UNavigationMenu
    orientation="vertical"
    :items="items"
    class="data-[orientation=vertical]:w-full py-12 px-2 gap-2"
    :ui="{
      linkLabel: 'text-clip text-left',
    }"
  />
</template>

<script setup lang="ts">
import { useAppConfig } from '#app'
import type { NavigationMenuItem } from '@nuxt/ui'

const appConfig = useAppConfig() as { erp?: { menuItems: NavigationMenuItem[][] } }

const items = appConfig.erp && appConfig.erp.menuItems ? appConfig.erp.menuItems : []
</script>
