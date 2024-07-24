<template>
  <nav class="bg-dark fixed-top">
    <div class="gt-sm">
      <q-toolbar class="bg-dark text-white shadow-2 rounded-borders">
        <q-btn label="Homepage" @click="scrollTo('home-lg')" />
        <q-space />
        <q-btn label="Details" @click="scrollTo('details-lg')" />
        <q-btn label="Story" @click="scrollTo('story-lg')" />
        <q-btn label="Schedule" @click="scrollTo('schedule-lg')" />
        <q-btn label="Travel" @click="scrollTo('travel-lg')" />
        <q-btn label="Accomodations" @click="scrollTo('accomodations-lg')" />
        <q-btn label="Gallery" @click="scrollTo('gallery-lg')" />
      </q-toolbar>
    </div>
    <div class="q-gutter-md lt-md">
      <q-btn color="secondary" label="Menu">
        <q-menu auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable @click="scrollTo('home-sm')">
              <q-item-section>Home</q-item-section>
            </q-item>
            <q-item clickable @click="scrollTo('details-sm')">
              <q-item-section>Details</q-item-section>
            </q-item>
            <q-item clickable @click="scrollTo('story-sm')">
              <q-item-section>Story</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable @click="scrollTo('schedule-sm')">
              <q-item-section>Schedule</q-item-section>
            </q-item>
            <q-item clickable @click="scrollTo('travel-sm')">
              <q-item-section>Travel</q-item-section>
            </q-item>
            <q-item clickable @click="scrollTo('accomodations-sm')">
              <q-item-section>Accomodations</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable @click="scrollTo('gallery-sm')">
              <q-item-section>Gallery</q-item-section>
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
/* Sticky footer */
nav {
  z-index: 9999;
}
html {
  position: relative;
  min-height: 100%;
  z-index: 9999;
}
</style>
