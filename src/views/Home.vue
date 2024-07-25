<template>
  <!-- This is for larger screens (laptops) -->
  <div class="gt-sm">
    <div style="height: 93vh; display: flex">
      <img alt="Main Photo" src="@/assets/duck.jpg" class="main-photo" />
      <div style="overflow-y: scroll; width: 100vh">
        <header-typography id="home-lg" msg="J & P" />
        <q-separator color="black" inset />
        <header-typography id="details-lg" msg="Wedding Details" />
        <card-items :card-infos="cardInfos" />
        <header-typography id="story-lg" msg="Our Story" />
        <div style="padding: 5em">Hello</div>
        <header-typography id="schedule-lg" msg="Schedule" />
        <div class="q-px-lg q-py-md">
          <q-timeline color="primary">
            <!-- <q-timeline-entry heading> Schedule </q-timeline-entry> -->

            <q-timeline-entry title="Doors Open" subtitle="3:00 PM" />
            <q-timeline-entry title="Ceremony" subtitle="3:30 PM">
              <div>Cocktail hour and reception to follow.</div>
            </q-timeline-entry>
            <q-timeline-entry title="Doors Close" subtitle="10:00 PM" />
          </q-timeline>
        </div>
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
    <!-- TODO: center and expand the photo on mobile screens -->
    <div id="home-sm" class="text-center">
      <img alt="Main Photo" src="@/assets/duck.jpg" class="main-photo" />
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
import { CardInfo } from '../common/types'

const cardInfos: CardInfo[] = [
  {
    // Specify icon using ligature (textual name) - https://developers.google.com/fonts/docs/material_icons#icon_font_for_the_web
    icon: 'event',
    content: '01/01/2025'
  },
  {
    icon: 'place',
    content: 'Chicago, IL'
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
  height: 93vh;
  width: 100vh;
}
</style>
