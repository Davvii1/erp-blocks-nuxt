<template>
  <UModal v-bind="modalProps">
    <UButton
      v-bind="buttonProps"
    />

    <template #body>
      <slot name="body">
        <div class="flex flex-col items-center text-center gap-2">
          <UIcon
            name="i-lucide:help-circle"
            class="text-3xl text-neutral-500"
          />
          <p class="text-base sm:text-lg">
            Are you sure you want to perform this action?
          </p>
        </div>
      </slot>
    </template>

    <template #footer="{ close }">
      <slot
        name="footer"
      >
        <UButton
          label="Cancel"
          color="neutral"
          variant="outline"
          @click="close"
        />
        <UButton
          type="submit"
          label="Accept"
          color="neutral"
          @click="confirmAction"
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
  confirmAction?: () => void
}>(), {
  modalProps: () => ({
    ui: {
      body: 'p-4 sm:p-6 text-center',
      footer: 'justify-end gap-2',
    },
  }),
  buttonProps: () => ({
    icon: 'i-lucide:check',
    color: 'neutral',
    variant: 'solid',
    class: 'cursor-pointer',
  }),
})
</script>
