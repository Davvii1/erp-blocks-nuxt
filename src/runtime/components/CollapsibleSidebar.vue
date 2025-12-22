<template>
  <div>
    <UCollapsible
      v-if="breakpoints.isGreaterOrEqual('lg')"
      v-model:open="sidebarOpen"
      :ui="{
        content:
          'max-lg:fixed z-40 max-lg:bg-white left-0 top-0 data-[state=open]:animate-collapsible-right data-[state=closed]:animate-collapsible-left border-r border-scn-sidebar-border dark:border-default',
      }"
    >
      <template #content>
        <div class="relative h-screen w-3xs bg-scn-sidebar">
          <UIcon
            name="i-lucide-x"
            class="size-5 absolute z-50 top-4 right-4 cursor-pointer lg:hidden"
            @click="closeSidebar"
          />
          <MainMenu />
        </div>
      </template>
    </UCollapsible>
    <UDrawer
      v-if="breakpoints.isSmaller('lg')"
      v-model:open="sidebarOpen"
      direction="left"
    >
      <template #content>
        <UIcon
          name="i-lucide-x"
          class="size-5 absolute z-50 top-4 right-4 cursor-pointer lg:hidden"
          @click="closeSidebar"
        />
        <div class="w-[40vw] mt-10">
          <MainMenu />
        </div>
      </template>
    </UDrawer>
  </div>
</template>

<script setup lang="ts">
import { useState } from '#app'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import MainMenu from './MainMenu.vue'

const breakpoints = useBreakpoints(breakpointsTailwind, {
  ssrWidth: 768,
})
const sidebarOpen = useState<boolean>('sidebarOpen', () => true)

function closeSidebar() {
  sidebarOpen.value = false
}
</script>
