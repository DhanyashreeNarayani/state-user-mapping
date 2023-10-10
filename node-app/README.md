# State and User - app_backend

Backend application- created with Nodejs, Postgres, Postgis

### Topics

- Installation
- APIS
- API Documentation
- Directory Structure

#### Installation

1. Ensure you have both [NodeJS][node] and [npm][npm] (or [yarn][yarn]) installed.
2. Ensure that you have globally installed [nodemon][nodemon] and [cross-env][cross-env].
3. clone this repo or download the zip file and unzip it.
4. In a terminal, inside the project directory, type `npm install` or `yarn` for yarn users.
5. To run the project type `node src/app.js` on your terminal.

#### APIS

1. Get states List
2. Get users in a state by stateID

#### API Documentation

```
.
+-- documentation
    +-- openapi.yaml
```

#### Directory Structure

```
.
+-- documentation
+-- src
|   +-- scripts
|   +-- app.js
|   +-- services
|   |   +-- get-state.js
|   |   +-- state-to-user-mapper.js

```

[node]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/en/docs/install
[cross-env]: https://www.npmjs.com/package/cross-env
[nodemon]: https://www.npmjs.com/package/nodemon
