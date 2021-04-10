# Sanr API JS Wrapper | **wip**

# Documentation

- [Installation](#Installation)
- [Usage](#Usage)

# Installation

You can either use `npm ` or `yarn ` to install it:

```
npm i --save sanr-api-js
```

```
yarn add sanr-api-js
```

# Usage

```js
// ES Modules syntax
import Sanr from 'sanr-api-js';

// require syntax
const Sanr = require("sanr-api-js").default;

const sanr = new Sanr({
  token: "YOUR_TOKEN",
  refreshToken: "YOUR_REFRESH_TOKEN"
});
```
