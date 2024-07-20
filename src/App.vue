<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const layout = computed(() => {
  // Format the layout name to match component file name
  return `Layout${route.meta.layout ? route.meta.layout : 'Default'}`
})
</script>
