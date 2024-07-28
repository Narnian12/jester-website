<template>
  <div class="container section-container">
    <div class="scheduling">
      <q-timeline layout="comfortable" color="secondary">
        <q-timeline-entry title="Doors Open" subtitle="3:00 PM" />
        <q-timeline-entry title="Ceremony" subtitle="3:30 PM">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicied do eiusmod te laborum.</div>
        </q-timeline-entry>
        <q-timeline-entry title="Cocktail Hour" subtitle="5:30 PM" />
        <q-timeline-entry title="Reception" subtitle="7:30 PM" />
        <q-timeline-entry title="Doors Close" subtitle="10:00 PM" />
      </q-timeline>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ScheduleContainer'
}
</script>

<style lang="scss" scoped>
.section-container {
  @include section-container();
}

.scheduling {
  font-family: $body-font;
  color: $secondary;
  padding: 10px;
}
</style>
