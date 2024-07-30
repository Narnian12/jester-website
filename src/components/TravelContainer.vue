<template>
  <div class="container section-container">
    <div class="travel">O'HAre plane or amtrak water powered steam train</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TravelContainer'
}
</script>

<style lang="scss" scoped>
.section-container {
  @include section-container();
}

.travel {
  font-family: $body-font;
  color: $secondary;
  padding: 10px;
}
</style>
