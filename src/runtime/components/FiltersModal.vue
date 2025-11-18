<template>
  <UModal v-bind="modalProps">
    <UButton
      v-bind="buttonProps"
    />

    <template #body>
      <slot name="body">
        <slot />
      </slot>
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
import type { ModalProps, ButtonProps } from '@nuxt/ui'

withDefaults(defineProps<{
  modalProps?: ModalProps
  buttonProps?: ButtonProps
}>(), {
  modalProps: () => ({
    title: 'Filters',
    scrollable: true,
    ui: {
      footer: 'justify-end',
    },
  }),
  buttonProps: () => ({
    icon: 'i-lucide:filter',
    label: 'Filters',
    color: 'neutral',
    variant: 'solid',
    class: 'cursor-pointer',
  }),
})

const emit = defineEmits(['reset'])
</script>
