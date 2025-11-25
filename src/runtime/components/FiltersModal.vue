<template>
  <UModal v-bind="modalProps">
    <slot name="trigger">
      <UButton
        icon="i-lucide:filter"
        label="Filters"
        color="neutral"
        variant="solid"
        class="cursor-pointer"
      />
    </slot>

    <template #body>
      <slot name="body" />
    </template>

    <template #footer>
      <slot
        name="footer"
      >
        <UButton
          label="Reset"
          color="neutral"
          variant="outline"
          @click="emit('reset')"
        />
        <UButton
          type="submit"
          label="Apply"
          color="neutral"
        />
      </slot>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import type { ModalProps } from '@nuxt/ui'

withDefaults(defineProps<{
  modalProps?: ModalProps
}>(), {
  modalProps: () => ({
    title: 'Filters',
    scrollable: true,
    ui: {
      footer: 'justify-end',
    },
  }),
})

const emit = defineEmits(['reset'])
</script>
