<script setup lang="ts">
import { ref } from 'vue'
import Child from './child.vue'
import Good from './good.vue'

const foo = ref({
  id: 1,
  rtp: 1,
  name: 'foo',
  picUrl: 'foo',
  greatVictory: 'foo',
  isHot: true,
  favorite: true,
  gameMaintain: true,
  brandName: 'foo',
  keyword: 'foo'
})
const all = ref('')
</script>

<template>
  <Child :info="foo"  />
  <Good :info="foo" />
</template>
