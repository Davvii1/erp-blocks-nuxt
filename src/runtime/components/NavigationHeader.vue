<template>
  <nav
    class="flex items-center pl-8 pt-6 pb-4 pr-8 w-full border-b border-scn-sidebar-border dark:border-default justify-between"
  >
    <div class="flex items-center space-x-6">
      <SidebarTrigger />
      <h1
        :class="{
          'text-2xl font-bold font-zinc-950': true,
          'opacity-0': false,
        }"
      >
        {{ route.meta.dashboardTitle }}
      </h1>
    </div>
    <div class="space-x-6 flex items-center">
      <ColorModeButton />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from '#app'
import ColorModeButton from './ColorModeButton.vue'
import SidebarTrigger from './SidebarTrigger.vue'

const route = useRoute()
</script>
