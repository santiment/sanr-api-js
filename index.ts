import Sanr from './src/sanr'
import { Worldstate, SanrResponse, Issuer } from './src/types'
require('dotenv').config()

const creds = {
  token: process.env.SANR_TOKEN,
  refreshToken: process.env.SANR_REFRESH_TOKEN
}

const api = new Sanr(creds)

// Use api here

;(async () => {
  await api.refreshAccessToken()
  const worldstate: Worldstate = await api.getWorldstate()
  console.log(worldstate)
  const competitions = await api.getCompetitions()
  const latestCompetition = competitions.data[competitions.total - 1].id
  console.log(latestCompetition);
  const issuers: SanrResponse<Issuer> = await api.getCompetition(latestCompetition)
  console.log("Participants in latest competition: " + issuers.total)
  const signals = await api.getSignals()
  console.log(signals)
})()
