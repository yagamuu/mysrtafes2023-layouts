<script setup lang="ts">
import { useReplicant } from 'nodecg-vue-composable';
import { computed } from 'vue';
import type { RunDataActiveRun, Timer } from '@mysrtafes2023-layouts/types/schemas/speedcontrol';
import * as util from '@mysrtafes2023-layouts/graphics/util/format';
import { DisplaySound } from '@mysrtafes2023-layouts/types/schemas/displaySound';

interface Props {
  index: number
}

const props = defineProps<Props>();

const runDataActiveRun = useReplicant<RunDataActiveRun>(
  'runDataActiveRun',
  'nodecg-speedcontrol',
);

const timer = useReplicant<Timer>(
  'timer',
  'nodecg-speedcontrol',
);

const displaySound = useReplicant<DisplaySound>('displaySound', 'mysrtafes2023-layouts');

const name = computed(() => {
  if (!runDataActiveRun?.data || !runDataActiveRun?.data.teams[props.index]) {
    return '';
  }
  return runDataActiveRun?.data.teams[props.index].players[0].name;
});

const finishTime = computed(() => {
  if (!runDataActiveRun?.data || !runDataActiveRun?.data.teams[props.index]) {
    return '';
  }
  const teamId = runDataActiveRun?.data.teams[props.index].id;
  if (!timer?.data?.teamFinishTimes[teamId]) {
    return '';
  }
  const finish = timer?.data?.teamFinishTimes[teamId];
  if (finish.state === 'forfeit') {
    return 'リタイア';
  }
  if (finish.state === 'completed') {
    return util.formatSeconds(Math.trunc(finish.milliseconds / 1000));
  }
  return '';
});

const isActive = computed(() => {
  if (!runDataActiveRun?.data || !runDataActiveRun?.data.teams[props.index]) {
    return false;
  }
  return runDataActiveRun?.data.teams[props.index].players[0].id
    === displaySound?.data?.playerId;
});

</script>

<template>
  <div :class="{ clear: finishTime }">
    <div class="player_display"></div>
    <div class="player_name">
      {{ name }}
      <div class="bgmOn" :class="{ active: isActive }"></div>
    </div>
    <div class="player_time">
      <img src="../images/Icon/flag-rounded.png" />{{ finishTime }}
    </div>
  </div>
</template>
