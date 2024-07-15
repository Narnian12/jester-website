<template>
  <nav class="bg-dark fixed-top">
    <div class="q-pa-md">
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
  </nav>
</template>

<script setup lang="ts">
const scrollTo = (id: string) => {
  const yOffset = -75
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
