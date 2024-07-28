<template>
  <nav class="nav-bar fixed-top">
    <div class="gt-sm">
      <q-toolbar class="nav-bar-component text-white">
        <q-btn label="Homepage" @click="scrollTo('home-lg')" />
        <q-space />
        <q-btn label="Details" @click="scrollTo('details-lg')" />
        <q-btn label="Travel" @click="scrollTo('travel-lg')" />
        <q-btn label="Schedule" @click="scrollTo('schedule-lg')" />
        <q-btn label="Story" @click="scrollTo('story-lg')" />
        <q-btn label="Registry" @click="scrollTo('registry-lg')" />
        <q-btn label="Gallery" @click="scrollTo('gallery-lg')" />
        <q-btn label="Contact" @click="scrollTo('contact-lg')" />
      </q-toolbar>
    </div>
    <div class="q-gutter-md lt-md">
      <q-btn color="$darker" label="Menu">
        <q-menu auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable @click="scrollTo('home-sm')">
              <q-item-section>Home</q-item-section>
            </q-item>
            <q-item clickable @click="scrollTo('details-sm')">
              <q-item-section>Details</q-item-section>
            </q-item>
            <q-item clickable @click="scrollTo('travel-sm')">
              <q-item-section>Travel</q-item-section>
            </q-item>
            <q-item clickable @click="scrollTo('schedule-sm')">
              <q-item-section>Schedule</q-item-section>
            </q-item>
            <q-item clickable @click="scrollTo('story-sm')">
              <q-item-section>Story</q-item-section>
            </q-item>
            <q-item clickable @click="scrollTo('registry-sm')">
              <q-item-section>Registry</q-item-section>
            </q-item>
            <q-item clickable @click="scrollTo('gallery-sm')">
              <q-item-section>Gallery</q-item-section>
            </q-item>
            <q-item clickable @click="scrollTo('contact-sm')">
              <q-item-section>Contact</q-item-section>
            </q-item>
            <q-separator />
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </nav>
</template>

<script setup lang="ts">
const scrollTo = (id: string) => {
  const element = document.getElementById(id)

  element!.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss">
.nav-bar {
  background-color: $darker;
}

.nav-bar-component {
  background-color: transparent;
  box-shadow: none;
  font-family: $body-font;
}
</style>
