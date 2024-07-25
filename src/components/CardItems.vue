<!-- This component is primarily used for wedding details -->
<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <template v-for="cardInfo in cardInfos" :key="cardInfo">
      <q-card class="my-card">
        <q-card-section horizontal class="my-card-section">
          <span class="material-icons material-icons-override">{{ cardInfo.icon }}</span>
          <div>
            <h5>{{ cardInfo.content }}</h5>
          </div>
        </q-card-section>
      </q-card>
    </template>
  </div>
</template>

<script lang="ts">
import type { CardInfo } from '../common/types'
// Use PropType for custom object types
import type { PropType } from 'vue'

export default {
  name: 'CardItems'
}
</script>

<script setup lang="ts">
defineProps({
  cardInfos: {
    type: Object as PropType<CardInfo[]>,
    default() {
      return []
    }
  }
})
</script>

<style lang="scss" scoped>
.my-card {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 250px;
  text-align: center;
}

.my-card-section {
  padding: 10px 5px;
  display: flex;
  justify-content: center;
  vertical-align: middle;
}

.material-icons-override {
  font-size: 24px;
  padding-right: 10px;
}
</style>
