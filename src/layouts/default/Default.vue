<template>
  <div class="default-page-wrapper">
    <default-nav />
    <slot />
  </div>
</template>

<script setup lang="ts">
import DefaultNav from './DefaultNav.vue'
</script>

<style lang="scss">
/* Sticky footer */
html {
  z-index: 9999;
  position: relative;
  min-height: 100%;
}

body {
  margin-bottom: 60px; /* Margin bottom equal to footer height */
}

.default-page-wrapper {
  padding: 5em 0em 3em 0em;
}
</style>
