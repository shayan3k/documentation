<!-- Please remove this file from your project -->
<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <div v-if="item.seperator">
      <td colspan="2">
        <div class="px-6 py-4 text-bold text-xl">
          {{ item.seperator }}
        </div>
      </td>
    </div>

    <td class="px-6 py-4 flex items-center" v-else>
      {{ item.title
      }}<img
        v-if="item.html5"
        src="https://static.javatpoint.com/htmlpages/images/html-tags-list.png"
        alt="HTML Tags List"
        class="mx-1"
      />
    </td>
    <td class="px-6 py-4">
      {{ item.description }}

      <strong v-if="item.deprecated">(Not supported in HTML5)</strong>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'HTMLItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
