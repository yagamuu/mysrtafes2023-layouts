/* eslint-disable max-len */

import type { SetupInformationArray, DisplaySound, StartSoon, ExternalTwitchAPIData } from '@mysrtafes2023-layouts/types/schemas';
import type { RunDataActiveRun, Checklist } from '@mysrtafes2023-layouts/types/schemas/speedcontrol';
import { get as nodecg } from './nodecg';

/**
 * This is where you can declare all your replicant to import easily into other files,
 * and to make sure they have any correct settings on startup.
 */

export const informationArrayReplicant = nodecg().Replicant<SetupInformationArray>('setupInformationArray', {
  defaultValue: [],
});

export const displaySoundReplicant = nodecg().Replicant<DisplaySound>('displaySound', {
  defaultValue: {
    playerId: '',
  },
});

export const startSoonReplicant = nodecg().Replicant<StartSoon>('startSoon', {
  defaultValue: false,
});

export const checklistReplicant = nodecg().Replicant<Checklist>('checklist', 'nodecg-speedcontrol');

export const runDataActiveRunReplicant = nodecg().Replicant<RunDataActiveRun>('runDataActiveRun', 'nodecg-speedcontrol');

export const externalTwitchAPIData = nodecg().Replicant<ExternalTwitchAPIData>('externalTwitchAPIData');
