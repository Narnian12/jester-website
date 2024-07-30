<template>
  <div class="container section-container">
    <div class="contacts">This is how you contact</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContactContainer'
}
</script>

<style lang="scss" scoped>
.section-container {
  @include section-container();
}

.contacts {
  font-family: $body-font;
  color: $secondary;
  padding: 10px;
}
</style>
