<template>
  <div class="container section-container">
    <div class="registry">This is the registry</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RegistryContainer'
}
</script>

<style lang="scss" scoped>
.section-container {
  @include section-container();
}

.registry {
  font-family: $body-font;
  color: $secondary;
  padding: 10px;
}
</style>
