<!-- Please remove this file from your project -->
<template>
  <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
    <td class="px-6 py-4">
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

    <td class="px-6 py-4">
      <ul>
        <li v-for="(el, index) in item.attributes" :key="index">
          <strong> {{ el.name }} </strong>:
          <span> {{ el.description }} </span>
        </li>
      </ul>
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
