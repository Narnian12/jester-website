<template>
  <div class="row">
    <div class="col text-center">
      <h1 class="msg">{{ msg }}</h1>
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
h1.msg {
  color: $gray-900;
}
</style>
