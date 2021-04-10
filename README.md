# Sanr API JS Wrapper | **wip**

# Documentation

- [Installation](#Installation)
- [Usage](#Usage)

# Installation

You can either use `npm ` or `yarn ` to install it:

```
npm i --save @santiment-network/sanr-api-js
```

```
yarn add @santiment-network/sanr-api-js
```

# Usage

In Sanr Participant, but in API - Issuer
In Sanr Signal, but in API - Forecast

```js
// ES Modules syntax
import Sanr from 'sanr-api-js';

// require syntax
const Sanr = require("sanr-api-js").default;

const sanr = new Sanr({
  token: "YOUR_TOKEN",
  refreshToken: "YOUR_REFRESH_TOKEN"
});

// Use api here

;(async () => {
  await api.refreshAccessToken()
  // Get stats about amount of sanr competitions
  // or sanr participants
  const worldstate: Worldstate = await api.getWorldstate()
  console.log(worldstate)
  // Get all competitions
  const competitions = await api.getCompetitions()
  const latestCompetition = competitions.data[competitions.total - 1].id
  console.log(latestCompetition);
  const issuers: SanrResponse<Issuer> = await api.getCompetition(latestCompetition)
  console.log("Participants in latest competition: " + issuers.total)
  // Show all latest forecasts
  const signals = await api.getSignals()
  console.log(signals)
})()
```
