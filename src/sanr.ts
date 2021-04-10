import { SanrResponse, Signal, Competition, Worldstate, Issuer } from './types';
import { api } from './helpers';
const fetch = require('node-fetch');
const sanr_api_prefix = "https://sanr-api.production.internal.santiment.net/api/v1/";

/**
 * The Sanr API Wrapper Class
 */
class Sanr {
  creds: { token: string, refreshToken: string };
  defaultOptions: {
    headers: {
      Authorization: string
    }
  }

  /**
   * Creates a new Sanr API Wrapper instance
   * if no token is provided it will look for the ENV Variable SANR_TOKEN
   * @param {String} token
   * @param {String} refreshToken
   */
  constructor({
    token,
    refreshToken
  }: {
    token: string | undefined;
    refreshToken: string | undefined;
  }) {
    if (!refreshToken || !token)
      throw new Error('You need to provide the token and refreshToken to use the API');
    this.creds = {
      token: token,
      refreshToken: refreshToken
    };
    this.defaultOptions = {
      headers: {
        'Authorization': "Bearer " + token,
      },
    }
  }

  // POST /api/v1/auth/refresh 
  async refreshAccessToken() {
    const response = await fetch(sanr_api_prefix + "auth/refresh", {
      method: 'post',
      body: JSON.stringify({
        "refreshToken": this.creds.refreshToken
      }),
      headers: {'Content-Type': 'application/json'}
    })
    const data = await response.json()
    console.log("username: " + data.username)
    console.log("address: " + data.address)
    console.log(this.defaultOptions.headers);
    this.defaultOptions.headers = {
      'Authorization': "Bearer " + data.accessToken
    }
    console.log(this.defaultOptions.headers);
  }

  /**
   * Gets all PageIds from the user
   */
  getSignals() {
    const endpoint = sanr_api_prefix + "leaderboards/forecasts?filter=status:open&sort=signalOpenDate:ASC,id:ASC&skip=0&take=2  "
    return api<SanrResponse<Signal>>(endpoint, this.defaultOptions)
  }

  //api/v1/competitions
  getCompetitions() {
    const endpoint = sanr_api_prefix + "competitions"
    return api<SanrResponse<Competition>>(endpoint)
  }

  /**
   * Get a competition by id
   * 
   * Endpoint: api/v1/competitions/19/issuers?skip=0&take=10&sort=avgProfitability:desc
   * @param {string} id
   */
  getCompetition(id: string) {
    const endpoint = sanr_api_prefix + "competitions/" + id + "/issuers" + "?skip=0&take=10&sort=avgProfitability:desc"
    return api<SanrResponse<Issuer>>(endpoint)
  }

  getWorldstate() {
    const endpoint = sanr_api_prefix + "worldstate"
    return api<Worldstate>(endpoint)
  }
}
export default Sanr;
