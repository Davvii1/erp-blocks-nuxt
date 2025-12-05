<template>
  <UForm v-bind="formProps">
    <UModal v-bind="modalProps">
      <slot name="trigger">
        <UButton
          icon="i-lucide:filter"
          :label="buttonLabel"
          color="neutral"
          variant="solid"
          class="cursor-pointer"
        />
      </slot>

      <template #body>
        <div class="space-y-4">
          <slot name="fields" />
        </div>
      </template>

      <template #footer>
        <UButton
          :label="resetLabel"
          color="neutral"
          variant="outline"
          @click="emit('reset')"
        />
        <UButton
          v-if="applyButton"
          type="submit"
          :label="applyLabel"
          color="neutral"
        />
      </template>
    </UModal>
  </UForm>
</template>

<script setup lang="ts">
import type { FormProps, FormSchema, ModalProps } from '@nuxt/ui'

withDefaults(defineProps<{
  formProps?: FormProps<FormSchema>
  modalProps?: ModalProps
  buttonLabel?: string
  resetLabel?: string
  applyButton?: boolean
  applyLabel?: string
}>(), {
  buttonLabel: 'Filters',
  resetLabel: 'Reset',
  applyButton: true,
  applyLabel: 'Apply',
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
