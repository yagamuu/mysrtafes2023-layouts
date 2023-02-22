"use strict";
/* eslint-disable max-len */
Object.defineProperty(exports, "__esModule", { value: true });
exports.externalTwitchAPIData = exports.runDataActiveRunReplicant = exports.checklistReplicant = exports.startSoonReplicant = exports.displaySoundReplicant = exports.informationArrayReplicant = void 0;
const nodecg_1 = require("./nodecg");
/**
 * This is where you can declare all your replicant to import easily into other files,
 * and to make sure they have any correct settings on startup.
 */
exports.informationArrayReplicant = (0, nodecg_1.get)().Replicant('setupInformationArray', {
    defaultValue: [],
});
exports.displaySoundReplicant = (0, nodecg_1.get)().Replicant('displaySound', {
    defaultValue: {
        playerId: '',
    },
});
exports.startSoonReplicant = (0, nodecg_1.get)().Replicant('startSoon', {
    defaultValue: false,
});
exports.checklistReplicant = (0, nodecg_1.get)().Replicant('checklist', 'nodecg-speedcontrol');
exports.runDataActiveRunReplicant = (0, nodecg_1.get)().Replicant('runDataActiveRun', 'nodecg-speedcontrol');
exports.externalTwitchAPIData = (0, nodecg_1.get)().Replicant('externalTwitchAPIData');
