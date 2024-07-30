<template>
  <div class="column no-wrap content-center">
    <template v-for="detailRow in detailRows" :key="detailRow">
      <q-card class="card-layout self-center">
        <q-card-section class="card-content">
          <span class="material-icons material-icons-override">{{ detailRow.icon }}</span>
          <div class="text-container">
            <div class="text-top">{{ detailRow.title }}</div>
            <div class="text-bottom">{{ detailRow.content1 }}</div>
            <div class="text-bottom">{{ detailRow.content2 }}</div>
          </div>
        </q-card-section>
      </q-card>
    </template>
  </div>
</template>

<script lang="ts">
import type { DetailRow } from '../common/types'
// Use PropType for custom object types
import type { PropType } from 'vue'

export default {
  name: 'DetailRowView'
}
</script>

<script setup lang="ts">
defineProps({
  detailRows: {
    type: Object as PropType<DetailRow[]>,
    default() {
      return []
    }
  }
})
</script>

<style lang="scss" scoped>
.card-layout {
  overflow: auto;
  height: auto;
  width: 100%;
  border: none;
  box-shadow: none;
  padding: 10px;
  background-color: transparent;
}

.card-content {
  display: flex;
  align-items: center;
}

.text-container {
  display: flex;
  flex-direction: column; // Stack text vertically
}

.text-top {
  color: $secondary;
  font-family: $body-font;
  font-size: 18px;
}

.text-bottom {
  color: $secondary;
  font-family: $body-font;
  font-size: 14px;
}

.material-icons-override {
  @media (min-width: 1024px) {
    margin-right: 50px;
    font-size: 32px;
  }
  @media (max-width: 1024px) {
    margin-right: 20px;
    font-size: 24px;
  }
}
</style>
