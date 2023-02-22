<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import TimerAndEstimate from '../components/TimerAndEstimate.vue';
import GameInfo from '../components/GameInfo.vue';
import { Box, calculateClipPath } from '../util/clipPathCalculator';

useHead({ title: 'SingleHD' });

const leftGamePosition = computed<Box[]>(() => {
  const x = 0;
  const y = 0;
  const width = 1292;
  const height = 776;
  return [[x, x + width, y, y + height]];
});

const rightGamePosition = computed<Box[]>(() => {
  const x = 1296;
  const y = 308;
  const width = 624;
  const height = 468;
  return [[x, x + width, y, y + height]];
});

// eslint-disable-next-line max-len
const clipPath = computed(() => calculateClipPath([...leftGamePosition.value, ...rightGamePosition.value]));

</script>

<template>
  <BaseOverlay :clip-path="clipPath">
    <img src="../images/single3ds/logo.png" class="logo" />
      <GameInfo run-type="single3ds"/>
      <div class="discordBox"/>
      <div class="discordBox_underLine"/>
      <TimerAndEstimate/>
      <div class="player_display1"></div>
      <div class="player_display2"></div>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/common.css');
  @import url('../css/single3ds.css');
</style>
