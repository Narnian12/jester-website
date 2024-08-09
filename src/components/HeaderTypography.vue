<template>
  <div class="row">
    <div class="col text-center">
      <h1 class="section-header">{{ msg }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HeaderTypography'
}
</script>

<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.section-header {
  font-family: $header-font;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  color: $secondary;
}
</style>
