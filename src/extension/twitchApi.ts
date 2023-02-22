/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */
import type { Configschema } from '@mysrtafes2023-layouts/types/schemas/configschema';
import needle, { BodyData, NeedleHttpVerbs, NeedleResponse } from 'needle';
import { get as nodecg } from './util/nodecg';
import { externalTwitchAPIData } from './util/replicants';

const config = nodecg().bundleConfig as Configschema;

if (!externalTwitchAPIData.value) {
  externalTwitchAPIData.value = {
    accessToken: config.twitch.externalAccessToken,
    refreshToken: config.twitch.externalRefreshToken,
  };
}

/**
 * Refreshes the Twitch API access token, called whenever that is needed.
 */
async function refreshToken(): Promise<void> {
  try {
    nodecg().log.info('[Twitch] Attempting to refresh access token');
    const resp = await needle(
      'post',
      'https://id.twitch.tv/oauth2/token',
      {
        grant_type: 'refresh_token',
        refresh_token: encodeURI(externalTwitchAPIData.value.refreshToken as string),
        client_id: config.twitch.clientID,
        client_secret: config.twitch.clientSecret,
      },
    );
    if (resp.statusCode !== 200) {
      throw new Error(JSON.stringify(resp.body));
      // Do we need to retry here?
    }
    nodecg().log.info('[Twitch] Successfully refreshed access token');
    externalTwitchAPIData.value.accessToken = resp.body.access_token;
    externalTwitchAPIData.value.refreshToken = resp.body.refresh_token;
  } catch (err) {
    nodecg().log.warn('[Twitch] Error refreshing access token, you need to relogin');
    nodecg().log.debug('[Twitch] Error refreshing access token:', err);
    throw err;
  }
}

/**
 * Make a request to Twitch API.
 */
async function request(
  method: NeedleHttpVerbs,
  endpoint: string,
  data: BodyData = null,
  newAPI = false,
): Promise<NeedleResponse> {
  const ep = `/${newAPI ? 'helix' : 'kraken'}${endpoint}`;
  try {
    nodecg().log.debug(`[Twitch] API ${method.toUpperCase()} request processing on ${ep}`);
    let retry = false;
    let attempts = 0;
    let resp;

    do {
      retry = false;
      attempts += 1;
      resp = await needle(
        method,
        `https://api.twitch.tv${ep}`,
        data,
        {
          headers: {
            Accept: !newAPI ? 'application/vnd.twitchtv.v5+json' : '',
            'Content-Type': 'application/json',
            Authorization: `${newAPI ? 'Bearer' : 'OAuth'} ${externalTwitchAPIData.value.accessToken}`,
            'Client-ID': config.twitch.externalClientID,
          },
        },
      );
      if (resp.statusCode === 401 && attempts <= 1) {
        nodecg().log.debug(
          `[Twitch] API ${method.toUpperCase()} request `
          + `resulted in ${resp.statusCode} on ${ep}:`,
          JSON.stringify(resp.body),
        );
        await refreshToken();
        retry = true;
        // Can a 401 mean something else?
      } else if (![200, 204].includes(resp.statusCode as number)) {
        throw new Error(JSON.stringify(resp.body));
        // Do we need to retry here?
      }
    } while (retry);
    nodecg().log.debug(`[Twitch] API ${method.toUpperCase()} request successful on ${ep}`);
    return resp;
  } catch (err) {
    nodecg().log.debug(`[Twitch] API ${method.toUpperCase()} request error on ${ep}:`, err);
    throw err;
  }
}

/**
 * Attempts to update the title/game on the set channel.
 */
async function updateChannelInfo(
  channelID?: string,
  title?: string,
  gameId?: string,
): Promise<boolean> {
  try {
    const resp = await request(
      'patch',
      `/channels?broadcaster_id=${channelID}`,
      {
        title: title?.slice(0, 140),
        game_id: gameId || '',
      },
      true,
    );
    if (resp.statusCode !== 204) {
      throw new Error(JSON.stringify(resp.body));
    }

    nodecg().log.info('[Twitch] Successfully updated channel information');
  } catch (err) {
    nodecg().log.warn('[Twitch] Error updating channel information');
    nodecg().log.debug('[Twitch] Error updating channel information:', err);
    throw err;
  }

  return false;
}

nodecg().listenFor('twitchExternalMetadata', 'nodecg-speedcontrol', (data, ack) => {
  updateChannelInfo(data.channelID, data.title, data.gameID);

  if (ack && !ack.handled) {
    ack(null);
  }
});
