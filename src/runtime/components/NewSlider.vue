<template>
  <USlideover :title="title">
    <UButton
      :label="label"
      color="neutral"
      variant="solid"
      :icon="icon"
    />

    <template #content>
      <slot name="content" />
    </template>
  </USlideover>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  icon?: string
  title?: string
}>(), {
  label: 'New',
  icon: 'i-lucide:plus',
  title: 'New record',
})
</script>
