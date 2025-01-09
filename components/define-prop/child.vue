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
const info = defineProp<Game>(undefined, true)
</script>

<template>
  <div>
    {{ info }}
  </div>
</template>

<style></style>
