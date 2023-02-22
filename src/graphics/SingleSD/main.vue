<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import TimerAndEstimate from '../components/TimerAndEstimate.vue';
import GameInfo from '../components/GameInfo.vue';
import { Box, calculateClipPath } from '../util/clipPathCalculator';

useHead({ title: 'SingleSD' });

const gamePosition = (): Box[] => {
  const x = 547;
  const y = 0;
  const width = 1373;
  const height = 1030;
  return [[x, x + width, y, y + height]];
};

const clipPath = computed(() => calculateClipPath(gamePosition()));

</script>

<template>
  <BaseOverlay :clip-path="clipPath">
    <img src="../images/single4x3/logo.png" class="logo" />
      <GameInfo run-type="single4x3"/>
      <div class="discordBox"></div>
      <TimerAndEstimate/>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/common.css');
  @import url('../css/single4x3.css');
</style>
