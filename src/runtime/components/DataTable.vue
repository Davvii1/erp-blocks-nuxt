<script setup lang="ts" generic="T">
import type { TableProps } from '@nuxt/ui'

withDefaults(defineProps<{
  tableProps: TableProps
  totalRows?: number | undefined
  itemsPerPage?: number
}>(), {
  itemsPerPage: 5,
})

const page = defineModel<number>('page')
</script>

<template>
  <div class="flex flex-col size-full space-y-4 py-4">
    <UTable
      v-bind="tableProps"
      class="flex-1 border border-default rounded-lg grow"
    >
      <template
        v-for="(_, name) in $slots"
        #[name]="slotProps"
      >
        <slot
          :name="name"
          v-bind="slotProps"
        />
      </template>
    </UTable>
    <div
      v-if="tableProps.data && totalRows"
      class="flex items-center justify-between"
    >
      <span
        class="text-base text-dimmed"
      >
        {{ tableProps.data?.length || itemsPerPage }} of {{ totalRows || itemsPerPage }} rows
      </span>
      <UPagination
        v-model:page="page"
        active-color="neutral"
        :total="totalRows || itemsPerPage"
        :items-per-page="itemsPerPage"
      />
    </div>
  </div>
</template>
