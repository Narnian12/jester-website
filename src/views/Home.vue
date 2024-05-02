<template>
  <div class="container">
    <div class="text-center">
      <img alt="Vue logo" src="@/assets/logo.png" class="text-center" />
    </div>
    <header-typography msg="J & P" />
    <card-items :card-infos="cardInfos" />
    <header-typography msg="Our Story" />
  </div>
</template>

<script lang="ts">
import { CardInfo } from '../common/types'

const cardInfos: CardInfo[] = [
  {
    title: 'When',
    content: 'May 15, 2025'
  },
  {
    title: 'Where',
    content: 'Cancun'
  },
  {
    title: 'How',
    content: 'Plane'
  }
]

export default {
  name: 'Home'
}
</script>

<script setup lang="ts">
// eslint-disable-next-line import/first
import CardItems from '@/components/CardItems.vue'
// eslint-disable-next-line import/first
import HeaderTypography from '@/components/HeaderTypography.vue'
</script>
