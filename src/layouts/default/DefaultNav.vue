<template>
  <nav class="bg-dark fixed-top">
    <div class="gt-sm">
      <q-toolbar class="bg-dark text-white shadow-2 rounded-borders">
        <q-btn flat label="Homepage" @click="scrollTo('home')" />
        <!-- <q-space /> -->
        <q-btn flat label="Details" @click="scrollTo('details')" />
        <q-btn flat label="Story" @click="scrollTo('story')" />
        <q-btn flat label="Schedule" @click="scrollTo('schedule')" />
        <q-btn flat label="Travel" @click="scrollTo('travel')" />
        <q-btn flat label="Accomodations" @click="scrollTo('accomodations')" />
        <q-btn flat label="Gallery" @click="scrollTo('gallery')" />
      </q-toolbar>
    </div>
    <div class="q-gutter-md lt-md">
      <q-btn color="secondary" label="Menu">
        <q-menu auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable @click="scrollTo('details')">
              <q-item-section>Details</q-item-section>
            </q-item>
            <q-item clickable @click="scrollTo('story')">
              <q-item-section>Story</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable @click="scrollTo('schedule')">
              <q-item-section>Schedule</q-item-section>
            </q-item>
            <q-item clickable @click="scrollTo('travel')">
              <q-item-section>Travel</q-item-section>
            </q-item>
            <q-item clickable @click="scrollTo('accomodations')">
              <q-item-section>Accomodations</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable @click="scrollTo('gallery')">
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
  const yOffset = -50
  const element = document.getElementById(id)
  const y = element!.getBoundingClientRect().top + window.scrollY + yOffset

  window.scrollTo({ top: y, behavior: 'smooth' })
}
</script>

<style lang="scss">
/* Sticky footer */
html {
  position: relative;
  min-height: 100%;
}

.nav-item {
  padding: 0em 0em 0em 0em;
}
</style>
