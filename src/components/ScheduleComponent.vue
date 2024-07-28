<template>
  <div class="q-px-lg q-py-md">
    <q-timeline color="primary">
      <template v-for="scheduleInfo in scheduleInfos" :key="scheduleInfo">
        <q-timeline-entry :title="scheduleInfo.event" :subtitle="scheduleInfo.time">
          <div v-if="scheduleInfo.additional">
            {{ scheduleInfo.additional }}
          </div>
        </q-timeline-entry>
      </template>
    </q-timeline>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { ScheduleInfo } from '@/common/types'

export default {
  name: 'ScheduleComponent'
}
</script>

<script setup lang="ts">
defineProps({
  scheduleInfos: {
    type: Object as PropType<ScheduleInfo[]>,
    default() {
      return []
    }
  }
})
</script>
