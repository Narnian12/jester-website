<template>
  <!-- This is for larger screens (laptops) -->
  <div class="gt-sm">
    <div style="height: 85vh; display: flex">
      <img alt="Main Photo" src="@/assets/duck.jpg" class="main-photo" style="width: 65vh" />
      <div style="overflow-y: scroll">
        <header-typography id="home-lg" msg="J & P" />
        <q-separator color="black" inset />
        <header-typography id="details-lg" msg="Wedding Details" />
        <card-items :card-infos="cardInfos" />
        <header-typography id="story-lg" msg="Our Story" />
        <div style="padding: 5em">Hello</div>
        <header-typography id="schedule-lg" msg="Schedule" />
        <div style="padding: 5em">Hello</div>
        <q-separator color="black" inset />
        <header-typography id="travel-lg" msg="Travel Information" />
        <div style="padding: 5em">O'HAre plane or amtrak water powered steam train</div>
        <q-separator color="black" inset />
        <header-typography id="accomodations-lg" msg="Accomodations" />
        <div style="padding: 5em">Hello</div>
        <q-separator color="black" inset />
        <header-typography id="gallery-lg" msg="Gallery" />
      </div>
    </div>
  </div>
  <!-- This is for smaller screens (phones) -->
  <div class="lt-md">
    <!-- TODO: center and expand the photo on mobile screens... double check this-->
    <div id="home-sm" class="text-center">
      <div style="height: 45vh; display: flex; justify-content: center; align-items: center">
        <img alt="Main Photo" src="@/assets/duck.jpg" class="main-photo" />
      </div>
    </div>
    <!-- TODO: center all the text -->
    <header-typography msg="J & P" />
    <q-separator color="black" inset />
    <header-typography id="details-sm" msg="Wedding Details" />
    <!-- TODO: the cards somehow are in front of the menu so when scrolling looks weird... -->
    <card-items :card-infos="cardInfos" />
    <header-typography id="story-sm" msg="Our Story" />
    <div style="padding: 5em">Hello</div>
    <header-typography id="schedule-sm" msg="Schedule" />
    <div style="padding: 5em">Hello</div>
    <q-separator color="black" inset />
    <header-typography id="travel-sm" msg="Travel Information" />
    <div style="padding: 5em">O'HAre plane or amtrak water powered steam train</div>
    <q-separator color="black" inset />
    <!-- TODO: what do we do when the text is too big and goes past the screen?
     Should we wrap or reduce the font size? -->
    <header-typography id="accomodations-sm" msg="Accomodations" />
    <div style="padding: 5em">Hello</div>
    <q-separator color="black" inset />
    <header-typography id="gallery-sm" msg="Gallery" />
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

<style lang="scss" scoped>
img.main-photo {
  height: 85vh;
  width: 100%;
  display: block;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 960px) {
  .lt-md {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .lt-md .main-photo {
    width: 100%; /* Ensure the image takes full width */
    height: auto; /* Keep the aspect ratio */
  }

  .lt-md .text-center {
    width: 100%;
    text-align: center;
  }

  .lt-md header-typography {
    width: 100%;
    text-align: center;
    font-size: 1.5em; /* Make header font smaller */
  }

  .lt-md header-typography.header-lg {
    font-size: 0.75em; /* Make header font smaller for larger screens */
  }

  .lt-md .regular-text {
    font-size: 0.9em; /* Make regular text font bigger */
  }
}

@media (min-width: 961px) {
  header-typography {
    font-size: 2em; /* Adjust as needed for larger screens */
  }

  .regular-text {
    font-size: 1.5em; /* Adjust as needed for larger screens */
  }
}
</style>
