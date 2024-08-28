<!-- This is the homepage -->
<template>
  <div class="home-layout">
    <main>
      <slot />
      <!-- Where the page content will be injected -->
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.home-layout {
  @media (min-width: 1024px) {
    padding-top: 1em;
    background-color: $lighter;
  }
  @media (max-width: 1024px) {
    padding-top: 2.5em;
    background-color: $lighter;
  }
}
</style>
