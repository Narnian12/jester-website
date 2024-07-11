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
    <div style="padding: 5em">O'HAre plane or amtrak water powered steam train</div>
    <header-typography id="accomodations" msg="Accomodations" />
    <div style="padding: 5em">Hello</div>
    <header-typography id="gallery" msg="Gallery" />
  </div>
</template>

<script lang="ts">
import calendarImage from '@/assets/icons/calendar.png'
import howImage from '@/assets/icons/transportation.png'
import locationImage from '@/assets/icons/location.png'
import { CardInfo } from '../common/types'

const cardInfos: CardInfo[] = [
  {
    icon: calendarImage,
    title: 'When',
    content: 'Someday'
  },
  {
    icon: locationImage,
    title: 'Where',
    content: 'Cancun'
  },
  {
    icon: howImage,
    title: 'How',
    content: 'Plane flight'
  }
]

export default {
  name: 'Home'
}
</script>
<!-- Download the Calendar Icon: Go to the Flaticon site, search for the calendar -->
<!-- icon you like, and download it. If the icons are provided under a free license-->
<!-- they usually require attribution, and you should provide it somewhere appropriate in your app-->

<script setup lang="ts">
// eslint-disable-next-line import/first
import CardItems from '@/components/CardItems.vue'
// eslint-disable-next-line import/first
import HeaderTypography from '@/components/HeaderTypography.vue'
</script>
cx
<style lang="scss" scoped>
img.main-photo {
  height: auto;
  width: 100%;
  display: block;
  max-width: 99%;
  margin-left: auto;
  margin-right: auto;
}
</style>
