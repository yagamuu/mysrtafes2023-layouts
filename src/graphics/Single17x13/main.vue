<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import TimerAndEstimate from '../components/TimerAndEstimate.vue';
import GameInfo from '../components/GameInfo.vue';
import { Box, calculateClipPath } from '../util/clipPathCalculator';

useHead({ title: 'Single17x13' });

const gamePosition = (): Box[] => {
  const x = 573;
  const y = 0;
  const width = 1347;
  const height = 1030;
  return [[x, x + width, y, y + height]];
};

const clipPath = computed(() => calculateClipPath(gamePosition()));

</script>

<template>
  <BaseOverlay :clip-path="clipPath">
    <img src="../images/single17x13/logo.png" class="logo" />
      <GameInfo run-type="single17x13"/>
      <div class="discordBox"></div>
      <TimerAndEstimate/>
      <div class="player_display"/>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/common.css');
  @import url('../css/single17x13.css');
</style>
