<script setup lang="ts" generic="T">
import type { TableColumn } from '@nuxt/ui'

withDefaults(defineProps<{
  data: T[] | undefined
  columns: TableColumn<T>[]
  loading?: boolean
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
      :loading="loading"
      :data="data"
      :columns="columns"
      class="flex-1 border border-default rounded-lg grow"
    />
    <div class="flex items-center justify-between">
      <span
        v-if="data && totalRows"
        class="text-base text-dimmed"
      >
        {{ data.length }} of {{ totalRows }} rows
      </span>
      <div
        v-else
        class="h-6 w-25 animate-pulse bg-gray-200"
      />
      <UPagination
        v-model:page="page"
        active-color="neutral"
        :total="totalRows"
        :items-per-page="itemsPerPage"
      />
    </div>
  </div>
</template>
