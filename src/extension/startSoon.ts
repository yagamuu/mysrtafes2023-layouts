import { Checklist } from '@mysrtafes2023-layouts/types/schemas/speedcontrol/Checklist';
import { get as nodecg } from './util/nodecg';
import { checklistReplicant, startSoonReplicant, runDataActiveRunReplicant } from './util/replicants';

checklistReplicant.on('change', (newVal: Checklist) => {
  if (newVal.every((checkbox) => checkbox.complete)) {
    startSoonReplicant.value = true;
  }
});

runDataActiveRunReplicant.on('change', () => {
  startSoonReplicant.value = false;
});

const changeStartSoon = (value: boolean): void => {
  startSoonReplicant.value = value;

  nodecg().log.info('Change Start Soon');
};

nodecg().listenFor('changeStartSoon', (data, ack) => {
  changeStartSoon(data.value);

  if (ack && !ack.handled) {
    ack(null);
  }
});
