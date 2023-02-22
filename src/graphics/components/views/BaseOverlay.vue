<script setup lang="ts">
import { computed } from 'vue';
import TheFooter from './TheFooter.vue';

interface Props {
  clipPath?: string
}

const props = defineProps<Props>();

const style = computed(() => {
  const clip = props.clipPath ? `polygon(${props.clipPath})` : '';

  return {
    clipPath: clip,
  };
});

</script>

<template>
  <div
    id="container"
    :style="style"
  >
    <slot/>
    <TheFooter/>
  </div>
</template>
