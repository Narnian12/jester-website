<template>
  <!-- This is for larger screens (laptops) -->
  <div class="gt-sm large-screen q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-card-section>
          <header-typography id="home-lg" msg="J & P" />
          <div class="separator"></div>
          <header-typography id="details-lg" msg="Save the Date" />
          <detail-container />
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
  <!-- This is for smaller screens (phones) -->
  <div class="lt-md small-screen">
    <img alt="Main Photo" src="@/assets/buckingham-fount.jpg" class="main-photo-mobile" />
    <header-typography msg="J & P" />
    <div class="separator"></div>
    <header-typography id="details-sm" msg="Save the Date" />
    <detail-container />
  </div>
</template>

<script lang="ts">
import DetailContainer from '@/components/DetailContainer.vue'
import HeaderTypography from '@/components/HeaderTypography.vue'

export default {
  name: 'Home',
  components: {
    DetailContainer,
    HeaderTypography
  }
}
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 800px;
  margin: auto;
}

.large-screen {
  height: 100vh;
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

img.main-photo-mobile {
  height: auto;
  width: 100%;
}
</style>
