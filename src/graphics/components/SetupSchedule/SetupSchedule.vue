<script setup lang="ts">
import { useReplicant } from 'nodecg-vue-composable';
import { computed } from 'vue';
import type { RunDataActiveRunSurrounding, RunDataArray } from '@mysrtafes2023-layouts/types/schemas/speedcontrol';
import UpnextSchedule from './UpnextSchedule.vue';
import OndeckSchedule from './OndeckSchedule.vue';
import * as util from '../../util/format';

const runDataArray = useReplicant<RunDataArray>(
  'runDataArray',
  'nodecg-speedcontrol',
);

const runDataActiveRunSurrounding = useReplicant<RunDataActiveRunSurrounding>(
  'runDataActiveRunSurrounding',
  'nodecg-speedcontrol',
);

const speedcontrolActiveRunIndex = computed(() => {
  const activeRunIndex = runDataArray?.data?.findIndex(
    (runData) => runData.id === runDataActiveRunSurrounding?.data?.current,
  );
  return activeRunIndex;
});

const upcomingRuns = computed(() => {
  const index = speedcontrolActiveRunIndex.value || 0;
  return runDataArray?.data?.slice(index, index + 3);
});

const upnextRun = computed(() => upcomingRuns?.value?.[0]);

const ondeckRuns = computed(() => upcomingRuns.value?.slice(1));

const upcomingStartIn = computed(() => {
  if (!upcomingRuns.value || !upcomingRuns.value[1]) {
    return [];
  }

  const startInArray = [];
  const secondRunStartIn = (upcomingRuns.value[0].estimateS || 0)
    + (upcomingRuns.value[1].setupTimeS || 0);
  startInArray.push(util.formatSecondsToStartInTime(secondRunStartIn));

  if (!upcomingRuns.value[2]) {
    return startInArray;
  }
  const thirdRunStartIn = secondRunStartIn
    + (upcomingRuns.value[1].estimateS || 0) + (upcomingRuns.value[2].setupTimeS || 0);
  startInArray.push(util.formatSecondsToStartInTime(thirdRunStartIn));
  return startInArray;
});

</script>

<template>
  <div class="mokuji">
    <UpnextSchedule :run-data="upnextRun"/>
    <OndeckSchedule
      v-for="(run, index) in ondeckRuns"
      :key="run.id"
      :class="`next${index + 2}`"
      :run-data="run"
      :upcoming-start-in="upcomingStartIn[index]"
      :show-category-runner="index < 1"/>
  </div>
</template>
