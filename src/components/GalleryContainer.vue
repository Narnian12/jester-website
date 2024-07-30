<template>
  <div class="container section-container">
    <div class="gallery">This is the gallery</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GalleryContainer'
}
</script>

<style lang="scss" scoped>
.section-container {
  @include section-container();
}

.gallery {
  font-family: $body-font;
  color: $secondary;
  padding: 10px;
}
</style>
