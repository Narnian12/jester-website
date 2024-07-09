<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand" @click="collapseNavbar">JesterTemplate</router-link>
      <button
        :class="['navbar-toggler', !navbarExpanded && 'collapsed']"
        type="button"
        aria-controls="navbarDefault"
        :aria-expanded="navbarExpanded"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarDefault" :class="['collapse navbar-collapse', navbarExpanded && 'show']">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <q-btn flat color="primary" @click="scrollTo('home')">Home</q-btn>
          </li>
          <li class="nav-item">
            <q-btn flat color="primary" @click="scrollTo('details')">Details</q-btn>
          </li>
          <li class="nav-item">
            <q-btn flat color="primary" @click="scrollTo('story')">Story</q-btn>
          </li>
          <li class="nav-item">
            <q-btn flat color="primary" @click="scrollTo('schedule')">Schedule</q-btn>
          </li>
          <li class="nav-item">
            <q-btn flat color="primary" @click="scrollTo('travel')">Travel</q-btn>
          </li>
          <li class="nav-item">
            <q-btn flat color="primary" @click="scrollTo('accomodations')">Accomodations</q-btn>
          </li>
          <li class="nav-item">
            <q-btn flat color="primary" @click="scrollTo('gallery')">Gallery</q-btn>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const navbarExpanded = ref(false)

const toggleNavbar = () => {
  navbarExpanded.value = !navbarExpanded.value
}

const collapseNavbar = () => {
  navbarExpanded.value = false
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id)

  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss">
/* Sticky footer */
html {
  position: relative;
  min-height: 100%;
}

.nav-item {
  padding: 0em 1em 0em 0em;
}
</style>
