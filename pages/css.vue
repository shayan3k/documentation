<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-800 sm:flex items-center sm:pt-0 overflow-x-auto"
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8 my-8 overflow-x-auto">
      <CSSPropertyW3 />
      <CSSSelector />
      <CSSProperty />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CSSPage',
})
</script>
