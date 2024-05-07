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
            <a v-scroll-to="'#home'" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a v-scroll-to="'#details'" href="#">Details</a>
          </li>
          <li class="nav-item">
            <a v-scroll-to="'#story'" href="#">Story</a>
          </li>
          <li class="nav-item">
            <a v-scroll-to="'#schedule'" href="#">Schedule</a>
          </li>
          <li class="nav-item">
            <a v-scroll-to="'#travel'" href="#">Travel</a>
          </li>
          <li class="nav-item">
            <a v-scroll-to="'#accomodations'" href="#">Accomodations</a>
          </li>
          <li class="nav-item">
            <a v-scroll-to="'#gallery'" href="#">Gallery</a>
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
