<script setup lang="ts">
import { useReplicant } from 'nodecg-vue-composable';
import { computed } from 'vue';
import type { RunDataActiveRun } from '@mysrtafes2023-layouts/types/schemas/speedcontrol';

interface Props {
  runType: string
}

const props = defineProps<Props>();

const runDataActiveRun = useReplicant<RunDataActiveRun>(
  'runDataActiveRun',
  'nodecg-speedcontrol',
);

const runTitle = computed(() => runDataActiveRun?.data?.game ?? '');

const runCategory = computed(() => runDataActiveRun?.data?.category ?? '');

const runSystem = computed(() => runDataActiveRun?.data?.system ?? '');

const runRelease = computed(() => runDataActiveRun?.data?.release ?? '');

const dividerUrl = new URL(
  `/src/graphics/images/${props.runType}/divider.png`,
  import.meta.url,
).href;

</script>

<template>
  <div class="titleWrap">
    <p class="title">
      {{runTitle}}
    </p>
    <img :src="dividerUrl" />
    <p class="category">
      <span class="categoryDetail">{{ runCategory }}</span>
      <span class="categoryHard">{{ runSystem }} - {{ runRelease }}</span>
    </p>
  </div>
</template>
