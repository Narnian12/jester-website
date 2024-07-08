<template>
  <div class="container">
    <div id="home" class="text-center">
      <img alt="Main Photo" src="@/assets/duck.jpg" class="main-photo" />
    </div>
    <header-typography msg="J & P" />
    <header-typography id="details" msg="Wedding Details" />
    <card-items :card-infos="cardInfos" />
    <header-typography id="story" msg="Our Story" />
    <div style="padding: 5em">Hello</div>
    <header-typography id="schedule" msg="Schedule" />
    <div style="padding: 5em">Hello</div>
    <header-typography id="travel" msg="Travel Information" />
    <div style="padding: 5em">Hello</div>
    <header-typography id="accomodations" msg="Accomodations" />
    <div style="padding: 5em">Hello</div>
    <header-typography id="gallery" msg="Gallery" />
  </div>
</template>

<script lang="ts">
import { CardInfo } from '../common/types'

const cardInfos: CardInfo[] = [
  {
    title: 'When',
    content: 'Someday'
  },
  {
    title: 'Where',
    content: 'Cancun'
  },
  {
    title: 'How',
    content: 'Plane'
  }
]

export default {
  name: 'Home'
}
</script>

<script setup lang="ts">
// eslint-disable-next-line import/first
import CardItems from '@/components/CardItems.vue'
// eslint-disable-next-line import/first
import HeaderTypography from '@/components/HeaderTypography.vue'
</script>

<style lang="scss" scoped>
img.main-photo {
  height: auto;
  width: 100%;
  display: block;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
