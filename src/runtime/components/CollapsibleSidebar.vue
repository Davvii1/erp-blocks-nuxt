<template>
  <!-- TODO: Change UCollapsible to UDrawer in mobile -->
  <UCollapsible
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
</template>

<script setup lang="ts">
import { useState } from '#app'
import MainMenu from './MainMenu.vue'

const sidebarOpen = useState<boolean>('sidebarOpen', () => true)

function closeSidebar() {
  sidebarOpen.value = false
}
</script>
