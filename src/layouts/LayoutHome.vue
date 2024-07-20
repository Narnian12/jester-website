<template>
  <div class="home-layout">
    <default-nav></default-nav>
    <!-- Your nav bar component -->
    <main>
      <slot />
      <!-- Where the page content will be injected -->
    </main>
  </div>
</template>

<script setup lang="ts">
import DefaultNav from './default/DefaultNav.vue' // Ensure the path is correct
</script>

<style lang="scss">
html {
  position: relative;
  min-height: 100%;
}

body {
  margin-bottom: 60px; /* Margin bottom equal to footer height */
}

.home-layout {
  padding: 5em 0em 3em 0em;
}
</style>
