<script lang="ts" setup>
interface Game {
  id: number
  rtp: number
  name: string
  picUrl: string
  greatVictory: string
  isHot: boolean
  favorite: boolean
  gameMaintain: boolean
  brandName: string
  keyword: string
}
defineProps<{
  info: Game
}>()
</script>

<template>
  <div>
    {{ info }}
  </div>
</template>

<style></style>
