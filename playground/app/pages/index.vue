<template>
  <div class="flex flex-col h-full overflow-hidden">
    <div class="space-x-2">
      <FiltersModal />
      <ConfirmationModal />
      <NewSlider />
    </div>
    <div class="grow">
      <DataTable
        v-model:page="page"
        :data="data"
        :columns="columns"
        :total-rows="count"
        :loading="status === 'pending'"
        :items-per-page="5"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from '#ui/types'

definePageMeta({
  layout: 'dashboard',
  dashboardTitle: 'Dashboard',
})

const page = ref(1)

const { data, count, status } = await useCountFetch<UserResponse[]>(() => `https://jsonplaceholder.typicode.com/posts?_page=${page.value}&_limit=5`, {
  lazy: true,
})

type UserResponse = {
  userId: number
  id: number
  title: string
  body: string
}
const columns: TableColumn<UserResponse>[] = [
  {
    accessorKey: 'id',
    header: '#',
    cell: ({ row }) => `#${row.getValue('id')}`,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => row.getValue('title'),
  },
  {
    accessorKey: 'body',
    header: 'Body',
    cell: ({ row }) => row.getValue('body'),
  },
]
</script>
