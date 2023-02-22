<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useReplicant } from 'nodecg-vue-composable';
import { ref, watchEffect } from 'vue';
import { StartSoon } from '@mysrtafes2023-layouts/types/schemas/startSoon';

// Set the title of this page.
useHead({ title: 'Start Soon' });

const startSoon = useReplicant<StartSoon>('startSoon', 'mysrtafes2023-layouts', {
  defaultValue: false,
});

const selected = ref(startSoon?.data);

watchEffect(() => {
  selected.value = startSoon?.data;
});

const toggleSwitch = () => {
  if (!startSoon) return;

  startSoon.data = selected.value;
  startSoon.save();
};

</script>

<template>
  <div class="q-pa-md">
    <q-toggle
      v-model="selected"
      label="開始前通知ON"
      @update:model-value="toggleSwitch"/>
  </div>
</template>
