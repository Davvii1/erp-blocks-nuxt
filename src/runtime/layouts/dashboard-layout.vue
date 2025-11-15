<script setup lang="ts">
import { CollapsibleSidebar, NavigationHeader } from '#components'
</script>

<template>
  <div class="w-screen h-screen flex">
    <CollapsibleSidebar />
    <main class="max-w-screen h-screen w-full flex flex-col overflow-hidden">
      <NavigationHeader />
      <div class="grow p-4 overflow-y-auto flex flex-col">
        <slot />
      </div>
    </main>
  </div>
</template>
