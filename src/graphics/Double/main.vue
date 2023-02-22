<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import TimerAndEstimate from '../components/TimerAndEstimate.vue';
import RunnerNameplate from '../components/RunnerNameplate.vue';
import GameInfo from '../components/GameInfo.vue';
import { Box, calculateClipPath } from '../util/clipPathCalculator';

useHead({ title: 'Double' });

const leftGamePosition = computed<Box[]>(() => {
  const x = 0;
  const y = 216;
  const width = 958;
  const height = 539;
  return [[x, x + width, y, y + height]];
});

const rightGamePosition = computed<Box[]>(() => {
  const x = 962;
  const y = 216;
  const width = 958;
  const height = 539;
  return [[x, x + width, y, y + height]];
});

// eslint-disable-next-line max-len
const clipPath = computed(() => calculateClipPath([...leftGamePosition.value, ...rightGamePosition.value]));

</script>

<template>
  <BaseOverlay :clip-path="clipPath">
    <img src="../images/double/logo.png" class="logo" />
      <GameInfo run-type="double"/>
      <div class="discordBox"/>
      <div class="discordBox_underLine"/>
      <TimerAndEstimate/>
      <RunnerNameplate class="player1" :index="0"/>
      <RunnerNameplate class="player2" :index="1"/>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/common.css');
  @import url('../css/double.css');
</style>
