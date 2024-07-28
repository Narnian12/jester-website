<template>
  <div class="container section-container">
    <schedule-view :schedule-infos="scheduleInfos" />
  </div>
</template>

<script lang="ts">
import ScheduleView from '../views/ScheduleView.vue'
import { ScheduleInfo } from '@/common/types'

const scheduleInfos: ScheduleInfo[] = [
  {
    event: 'Doors Open',
    time: '3:00 PM'
  },
  {
    event: 'Ceremony',
    time: '3:30 PM',
    additional: 'Cocktail hour and reception to follow.'
  },
  {
    event: 'Doors Close',
    time: '10:00 PM'
  }
]

export default {
  name: 'ScheduleContainer',
  components: {
    ScheduleView
  },
  data() {
    return {
      scheduleInfos
    }
  }
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
