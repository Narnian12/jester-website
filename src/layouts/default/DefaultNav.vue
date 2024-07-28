<template>
  <nav class="bg-dark fixed-top" style="z-index: 1">
    <div class="gt-sm">
      <q-toolbar class="bg-dark text-white shadow-2 rounded-borders">
        <q-btn label="Home" @click="scrollTo('home-lg')" />
        <q-space />
        <q-btn label="Details" @click="scrollTo('details-lg')" />
        <q-btn label="Schedule" @click="scrollTo('schedule-lg')" />
        <q-btn label="Story" @click="scrollTo('story-lg')" />
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
            <q-item clickable @click="scrollTo('schedule-sm')">
              <q-item-section>Schedule</q-item-section>
            </q-item>
            <q-item clickable @click="scrollTo('story-sm')">
              <q-item-section>Story</q-item-section>
            </q-item>
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
