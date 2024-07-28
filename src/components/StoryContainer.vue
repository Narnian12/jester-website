<template>
  <div class="container section-container">
    <div class="story">This is our story</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'StoryContainer'
}
</script>

<style lang="scss" scoped>
.section-container {
  @include section-container();
}

.story {
  font-family: $body-font;
  color: $secondary;
  padding: 10px;
}
</style>
