<!-- This is the homepage -->
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
.home-layout {
  @media (min-width: 1024px) {
    padding-top: 3.5em;
    background-color: $lighter;
  }
  @media (max-width: 1024px) {
    padding-top: 2.5em;
    background-color: $lighter;
  }
}
</style>
