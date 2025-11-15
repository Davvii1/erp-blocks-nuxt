<template>
  <div>
    <UButton
      :icon="
        sidebarOpen
          ? 'i-lucide:arrow-left-from-line'
          : 'i-lucide:arrow-right-from-line'
      "
      color="neutral"
      size="xl"
      variant="ghost"
      @click="sidebarOpen = !sidebarOpen"
    />
  </div>
</template>

<script setup lang="ts">
import { useCookie } from '#app'

const sidebarOpen = useCookie<boolean>('sidebarOpen')
</script>
