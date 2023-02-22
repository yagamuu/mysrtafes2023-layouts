<script setup lang="ts">
import { useReplicant } from 'nodecg-vue-composable';
import { SetupInformationArray } from '@mysrtafes2023-layouts/types/schemas/setupInformationArray';
import { SetupInformation } from '@mysrtafes2023-layouts/types/schemas/setupInformation';

// eslint-disable-next-line no-spaced-func
defineEmits<{
  (e: 'openModificationForm', value: SetupInformation): void
}>();

const setupInformationArray = useReplicant<SetupInformationArray>(
  'setupInformationArray',
  'mysrtafes2023-layouts',
);

const deleteInformation = (id: string) => {
  nodecg.sendMessage('deleteInformation', { id });
};

</script>

<template>
  <div>
    <q-card
      v-for="(setupInformation) in setupInformationArray?.data"
      :key="setupInformation?.id"
      class="my-card q-mt-md">
      <q-card-section>
        {{ setupInformation.text }}
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" size="md" label="Edit"
          @click="$emit('openModificationForm', setupInformation)"/>
        <q-btn color="negative" size="xs" label="Delete"
          @click="deleteInformation(setupInformation.id)"/>
        </q-card-actions>
    </q-card>
  </div>
</template>
