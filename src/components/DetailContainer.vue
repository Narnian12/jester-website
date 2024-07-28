<template>
  <div class="container section-container">
    <detail-row-view :detail-rows="detailRows" />
  </div>
</template>

<script lang="ts">
import DetailRowView from '@/components/DetailRowView.vue'
import attireImage from '@/assets/icons/attire.png'
import calendarImage from '@/assets/icons/calendar.png'
import locationImage from '@/assets/icons/location.png'
import { DetailRow } from '../common/types'

const detailRows: DetailRow[] = [
  {
    icon: calendarImage,
    title: 'Saturday, December 25, 2024',
    content1: 'Doors open at 3PM',
    content2: 'Start promptly at 3:30PM'
  },
  {
    icon: locationImage,
    title: 'The Westin Resort & Spa, Cancun',
    content1: 'Km 20.5, Blvd. Kukulcan, Zona Hotelera',
    content2: '77500 Cancún, Q.R., Mexico'
  },
  {
    icon: attireImage,
    title: 'Attire',
    content1: 'Black Tie',
    content2: 'What black tie is'
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
