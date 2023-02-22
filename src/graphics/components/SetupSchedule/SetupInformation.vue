<script setup lang="ts">
import { useReplicant } from 'nodecg-vue-composable';
import { ref } from 'vue';
import { SetupInformationArray } from '@mysrtafes2023-layouts/types/schemas/setupInformationArray';

const displaySetupInformation = ref(0);

const setupInformationArray = useReplicant<SetupInformationArray>(
  'setupInformationArray',
  'mysrtafes2023-layouts',
);

setInterval(() => {
  const length = setupInformationArray?.data?.length || 0;
  displaySetupInformation.value = (displaySetupInformation.value + 1) % length;
}, 30000);

</script>

<template>
  <div class="category_description">
    <span
      v-for="(information, index) in setupInformationArray?.data"
      :key="information.id"
      :class="[index === displaySetupInformation ? 'active' : '']">
      {{ information.text }}
    </span>
  </div>
</template>
