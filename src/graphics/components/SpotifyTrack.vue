<script setup lang="ts">
import { useReplicant } from 'nodecg-vue-composable';
import { computed } from 'vue';
import type { SpotifyPlayingTrack } from '@mysrtafes2023-layouts/types/schemas/nodecgSpotifyWidget';

const spotifyPlayingTrack = useReplicant<SpotifyPlayingTrack>(
  'spotifyPlayingTrack',
  'nodecg-spotify-widget',
);

const trackName = computed(() => spotifyPlayingTrack?.data?.name || '');

const artists = computed(() => spotifyPlayingTrack?.data?.artists.join(', ') || '');
</script>

<template>
  <div class="bgm">♪ {{ trackName }} - {{ artists }}</div>
</template>
