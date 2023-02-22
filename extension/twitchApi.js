"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const needle_1 = __importDefault(require("needle"));
const nodecg_1 = require("./util/nodecg");
const replicants_1 = require("./util/replicants");
const config = (0, nodecg_1.get)().bundleConfig;
if (!replicants_1.externalTwitchAPIData.value) {
    replicants_1.externalTwitchAPIData.value = {
        accessToken: config.twitch.externalAccessToken,
        refreshToken: config.twitch.externalRefreshToken,
    };
}
/**
 * Refreshes the Twitch API access token, called whenever that is needed.
 */
function refreshToken() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            (0, nodecg_1.get)().log.info('[Twitch] Attempting to refresh access token');
            const resp = yield (0, needle_1.default)('post', 'https://id.twitch.tv/oauth2/token', {
                grant_type: 'refresh_token',
                refresh_token: encodeURI(replicants_1.externalTwitchAPIData.value.refreshToken),
                client_id: config.twitch.clientID,
                client_secret: config.twitch.clientSecret,
            });
            if (resp.statusCode !== 200) {
                throw new Error(JSON.stringify(resp.body));
                // Do we need to retry here?
            }
            (0, nodecg_1.get)().log.info('[Twitch] Successfully refreshed access token');
            replicants_1.externalTwitchAPIData.value.accessToken = resp.body.access_token;
            replicants_1.externalTwitchAPIData.value.refreshToken = resp.body.refresh_token;
        }
        catch (err) {
            (0, nodecg_1.get)().log.warn('[Twitch] Error refreshing access token, you need to relogin');
            (0, nodecg_1.get)().log.debug('[Twitch] Error refreshing access token:', err);
            throw err;
        }
    });
}
/**
 * Make a request to Twitch API.
 */
function request(method, endpoint, data = null, newAPI = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const ep = `/${newAPI ? 'helix' : 'kraken'}${endpoint}`;
        try {
            (0, nodecg_1.get)().log.debug(`[Twitch] API ${method.toUpperCase()} request processing on ${ep}`);
            let retry = false;
            let attempts = 0;
            let resp;
            do {
                retry = false;
                attempts += 1;
                resp = yield (0, needle_1.default)(method, `https://api.twitch.tv${ep}`, data, {
                    headers: {
                        Accept: !newAPI ? 'application/vnd.twitchtv.v5+json' : '',
                        'Content-Type': 'application/json',
                        Authorization: `${newAPI ? 'Bearer' : 'OAuth'} ${replicants_1.externalTwitchAPIData.value.accessToken}`,
                        'Client-ID': config.twitch.externalClientID,
                    },
                });
                if (resp.statusCode === 401 && attempts <= 1) {
                    (0, nodecg_1.get)().log.debug(`[Twitch] API ${method.toUpperCase()} request `
                        + `resulted in ${resp.statusCode} on ${ep}:`, JSON.stringify(resp.body));
                    yield refreshToken();
                    retry = true;
                    // Can a 401 mean something else?
                }
                else if (![200, 204].includes(resp.statusCode)) {
                    throw new Error(JSON.stringify(resp.body));
                    // Do we need to retry here?
                }
            } while (retry);
            (0, nodecg_1.get)().log.debug(`[Twitch] API ${method.toUpperCase()} request successful on ${ep}`);
            return resp;
        }
        catch (err) {
            (0, nodecg_1.get)().log.debug(`[Twitch] API ${method.toUpperCase()} request error on ${ep}:`, err);
            throw err;
        }
    });
}
/**
 * Attempts to update the title/game on the set channel.
 */
function updateChannelInfo(channelID, title, gameId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resp = yield request('patch', `/channels?broadcaster_id=${channelID}`, {
                title: title === null || title === void 0 ? void 0 : title.slice(0, 140),
                game_id: gameId || '',
            }, true);
            if (resp.statusCode !== 204) {
                throw new Error(JSON.stringify(resp.body));
            }
            (0, nodecg_1.get)().log.info('[Twitch] Successfully updated channel information');
        }
        catch (err) {
            (0, nodecg_1.get)().log.warn('[Twitch] Error updating channel information');
            (0, nodecg_1.get)().log.debug('[Twitch] Error updating channel information:', err);
            throw err;
        }
        return false;
    });
}
(0, nodecg_1.get)().listenFor('twitchExternalMetadata', 'nodecg-speedcontrol', (data, ack) => {
    updateChannelInfo(data.channelID, data.title, data.gameID);
    if (ack && !ack.handled) {
        ack(null);
    }
});
