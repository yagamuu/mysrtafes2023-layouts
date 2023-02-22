<script setup lang="ts">
import { useReplicant } from 'nodecg-vue-composable';
import { computed } from 'vue';
import type { RunData } from '@mysrtafes2023-layouts/types/schemas/speedcontrol';
import { StartSoon } from '@mysrtafes2023-layouts/types/schemas/startSoon';
import SetupInformation from './SetupInformation.vue';

interface Props {
  runData?: RunData
}

const props = defineProps<Props>();

const startSoon = useReplicant<StartSoon>(
  'startSoon',
  'mysrtafes2023-layouts',
);

const runners = computed(() => {
  if (!props.runData) {
    return '';
  }
  // eslint-disable-next-line max-len
  return props.runData.teams.flatMap((team) => team.players.flatMap((player) => player.name)).join(', ');
});

</script>

<template>
  <div class="next1">
    <div class="title">
      {{ props.runData?.game}}
    </div>
    <div class="category_runner">
      <span class="category">{{ props.runData?.category }}</span
      ><span class="runner">Runner - {{ runners }}</span>
    </div>
    <div class="description_part" :class="[startSoon?.data ? 'active' : '']">
      <div class="description_part_alert">
        <img src="../../images/Icon/speaker2.png" />まもなく開始します
      </div>
    </div>
    <SetupInformation/>
  </div>
</template>
