<template>
  <!-- This is for larger screens (laptops) -->
  <div class="gt-sm large-screen">
    <img alt="Main Photo" src="@/assets/buckingham-fount.jpg" class="main-photo-wide" />
    <div style="overflow-y: scroll; width: 100vh">
      <header-typography id="home-lg" msg="J & P" />
      <div class="separator"></div>
      <header-typography id="details-lg" msg="Wedding Details" />
      <detail-container />
      <div class="separator"></div>
      <header-typography id="travel-lg" msg="Travel Information" />
      <travel-container />
      <div class="separator"></div>
      <header-typography id="schedule-lg" msg="Schedule" />
      <schedule-container />
      <div class="separator"></div>
      <header-typography id="story-lg" msg="Our Story" />
      <story-container />
      <div class="separator"></div>
      <header-typography id="registry-lg" msg="Registry" />
      <registry-container />
      <div class="separator"></div>
      <header-typography id="gallery-lg" msg="Gallery" />
      <gallery-container />
      <div class="separator"></div>
      <header-typography id="contact-lg" msg="Contact" />
      <contact-container />
    </div>
  </div>
  <!-- This is for smaller screens (phones) -->
  <div class="lt-md small-screen">
    <img alt="Main Photo" src="@/assets/buckingham-fount.jpg" class="main-photo-mobile" />
    <header-typography msg="J & P" />
    <div class="separator"></div>
    <header-typography id="details-sm" msg="Wedding Details" />
    <detail-container />
    <div class="separator"></div>
    <header-typography id="travel-sm" msg="Travel Information" />
    <travel-container />
    <div class="separator"></div>
    <header-typography id="schedule-sm" msg="Schedule" />
    <schedule-container />
    <div class="separator"></div>
    <header-typography id="story-sm" msg="Our Story" />
    <story-container />
    <div class="separator"></div>
    <header-typography id="registry-sm" msg="Registry" />
    <registry-container />
    <div class="separator"></div>
    <!-- TODO: what do we do when the text is too big and goes past the screen?
     Should we wrap or reduce the font size? -->
    <header-typography id="gallery-sm" msg="Gallery" />
    <gallery-container />
    <div class="separator"></div>
    <header-typography id="contact-sm" msg="Contact" />
    <contact-container />
  </div>
</template>

<script lang="ts">
import ContactContainer from '@/components/ContactContainer.vue'
import DetailContainer from '@/components/DetailContainer.vue'
import GalleryContainer from '@/components/GalleryContainer.vue'
import HeaderTypography from '@/components/HeaderTypography.vue'
import RegistryContainer from '@/components/RegistryContainer.vue'
import ScheduleContainer from '@/components/ScheduleContainer.vue'
import StoryContainer from '@/components/StoryContainer.vue'
import TravelContainer from '@/components/TravelContainer.vue'

export default {
  name: 'Home',
  components: {
    ContactContainer,
    DetailContainer,
    GalleryContainer,
    HeaderTypography,
    RegistryContainer,
    ScheduleContainer,
    StoryContainer,
    TravelContainer
  }
}
</script>

<style lang="scss" scoped>
.large-screen {
  height: 93vh;
  display: flex;
}

.small-screen {
  display: flex;
  flex-direction: column;
}

.separator {
  width: 80%;
  background-color: $secondary;
  height: 1px;
  margin: 0 auto;
  opacity: 0.5;
}

img.main-photo-wide {
  height: 100%;
  width: 800px;
}

img.main-photo-mobile {
  height: auto;
  width: 100%;
}
</style>
