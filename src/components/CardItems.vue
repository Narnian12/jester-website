<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <template v-for="cardInfo in cardInfos" :key="cardInfo">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">{{ cardInfo.title }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ cardInfo.content }}
        </q-card-section>
      </q-card>
    </template>
  </div>
</template>

<script lang="ts">
// Card info - https://quasar.dev/vue-components/card

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

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
