<script setup lang="ts">
import { useReplicant } from 'nodecg-vue-composable';
import { ref, computed, watchEffect } from 'vue';
import { RunDataActiveRun } from '@mysrtafes2023-layouts/types/schemas/speedcontrol/RunData';
import { DisplaySound } from '@mysrtafes2023-layouts/types/schemas/displaySound';

const runDataActiveRun = useReplicant<RunDataActiveRun>('runDataActiveRun', 'nodecg-speedcontrol');
const displaySound = useReplicant<DisplaySound>('displaySound', 'mysrtafes2023-layouts');

const selected = ref(displaySound?.data?.playerId || 'null');
const players = computed(() => {
  if (!runDataActiveRun?.data) {
    return [];
  }

  return runDataActiveRun?.data?.teams.flatMap((team) => team.players);
});

watchEffect(() => {
  selected.value = displaySound?.data?.playerId || '';
});

const changeDisplaySound = () => {
  if (!displaySound) return;

  displaySound.data = {
    playerId: selected.value,
  };
  displaySound.save();
};

</script>

<template>
  <div class="q-pa-md">
    <q-radio
      v-for="(player) in players"
      :label="player.name"
      :key="player.id"
      :val="player.id"
      v-model="selected"
      @update:model-value="changeDisplaySound" />
  </div>
</template>
