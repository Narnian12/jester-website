<template>
  <div class="container section-container">
    <detail-row-view :detail-rows="detailRows" />
  </div>
</template>

<script lang="ts">
import DetailRowView from '../views/DetailRowView.vue'
import { DetailRow } from '../common/types'

const detailRows: DetailRow[] = [
  {
    // Specify icon using ligature (textual name) - https://developers.google.com/fonts/docs/material_icons#icon_font_for_the_web
    icon: 'event',
    title: 'December 25, 2024'
  },
  {
    icon: 'place',
    title: 'Springfield, IL'
  }
]

export default {
  name: 'DetailContainer',
  components: {
    DetailRowView
  },
  data() {
    return {
      detailRows
    }
  }
}
</script>

<style lang="scss" scoped>
.section-container {
  @include section-container();
}
</style>
