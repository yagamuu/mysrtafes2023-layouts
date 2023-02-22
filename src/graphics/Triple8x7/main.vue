<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import TimerAndEstimate from '../components/TimerAndEstimate.vue';
import RunnerNameplate from '../components/RunnerNameplate.vue';
import GameInfo from '../components/GameInfo.vue';
import { Box, calculateClipPath } from '../util/clipPathCalculator';

useHead({ title: 'Triple8x7' });

const player1GamePosition = computed<Box[]>(() => {
  const x = 4;
  const y = 96;
  const width = 638;
  const height = 557;
  return [[x, x + width, y, y + height]];
});

const player2GamePosition = computed<Box[]>(() => {
  const x = 642;
  const y = 96;
  const width = 638;
  const height = 557;
  return [[x, x + width, y, y + height]];
});

const player3GamePosition = computed<Box[]>(() => {
  const x = 1286;
  const y = 96;
  const width = 638;
  const height = 557;
  return [[x, x + width, y, y + height]];
});

// eslint-disable-next-line max-len
const clipPath = computed(() => calculateClipPath([...player1GamePosition.value, ...player2GamePosition.value, ...player3GamePosition.value]));

</script>

<template>
  <BaseOverlay :clip-path="clipPath">
    <img src="../images/triple8x7flat/logo.png" class="logo" />
      <GameInfo run-type="triple8x7flat"/>
      <div class="discordBox"/>
      <div class="discordBox_underLine"/>
      <TimerAndEstimate/>
      <RunnerNameplate class="player1" :index="0"/>
      <RunnerNameplate class="player2" :index="1"/>
      <RunnerNameplate class="player3" :index="2"/>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/common.css');
  @import url('../css/triple8x7flat.css');
</style>
