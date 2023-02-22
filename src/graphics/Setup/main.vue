<script setup lang="ts">
import { useHead } from '@vueuse/head';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import SpotifyTrack from '../components/SpotifyTrack.vue';
import SetupSchedule from '../components/SetupSchedule/SetupSchedule.vue';

useHead({ title: 'Setup' });

</script>

<template>
  <BaseOverlay>
    <div class="next_container"/>
    <img src="../images/setup/logo.png" class="logo" />
      <div class="rectangle"></div>
      <SetupSchedule/>
      <SpotifyTrack/>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/common.css');
  @import url('../css/setup.css');
</style>
