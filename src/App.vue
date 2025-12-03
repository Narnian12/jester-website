<template>
  <component :is="_layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _layout = computed(() => {
  // Format the layout name to match component file name
  return `Layout${route.meta.layout ? route.meta.layout : 'Default'}`
})
</script>
