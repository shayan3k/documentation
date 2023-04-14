<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-800 sm:flex items-center sm:pt-0 overflow-x-auto"
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8 my-8 overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-100 dark:text-gray-400">
        <thead
          class="text-xs text-gray-100 uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Tag name</th>
            <th scope="col" class="px-6 py-3">Description</th>
            <th scope="col" class="px-6 py-3">Attribute</th>
          </tr>
        </thead>

        <tbody ref="body">
          <HTMLItem v-for="item in data" :key="item.title" :item="item" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import htmlData from '@/assets/data/html'

export default Vue.extend({
  name: 'HTMLPage',
  data() {
    return {
      data: htmlData,
    }
  },
})
</script>
