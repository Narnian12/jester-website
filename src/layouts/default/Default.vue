<template>
  <div class="default-page-wrapper">
    <slot />
  </div>
</template>

<style lang="scss">
/* Sticky footer */
html {
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
