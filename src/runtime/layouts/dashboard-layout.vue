<template>
  <div class="w-screen h-screen flex">
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
            @click="sidebarOpen = false"
          />
          <UNavigationMenu
            orientation="vertical"
            :items="items"
            class="data-[orientation=vertical]:w-full py-12 px-2 gap-2"
          />
        </div>
      </template>
    </UCollapsible>
    <main class="max-w-screen h-screen w-full flex flex-col overflow-hidden">
      <nav
        class="flex items-center pl-8 pt-6 pb-4 pr-8 w-full border-b border-scn-sidebar-border dark:border-default justify-between"
      >
        <div class="flex items-center space-x-6">
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
          <h1
            :class="{
              'text-2xl font-bold font-zinc-950': true,
              'opacity-0': false,
            }"
          >
            Dashboard
          </h1>
        </div>
        <div class="space-x-6 flex items-center">
          <!-- <CoreColorModeButton /> -->
        </div>
      </nav>
      <div class="grow p-4 overflow-y-auto flex flex-col">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

const sidebarOpen = ref(true)

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Personas',
      icon: 'i-lucide:handshake',
      children: [
        {
          label: 'Asociados',
        },
        {
          label: 'Clientes',
        },
      ],
    },
  ],
])
// const sidebarOpen = useCookie<boolean>("sidebarOpen", {
//   default: () => true,
// });

// function closeSidebar() {
//   sidebarOpen.value = false;
// }
</script>
