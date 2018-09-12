# Requirements
- Install [Node Version Manager](https://github.com/creationix/nvm)
- Install [yarn](https://yarnpkg.com/en/)

## Setup IDE

### VSCode

Install the folowing extentions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier JavaScript Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)
- [Babel ES6/ES7](https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring)
- [Jest](https://github.com/jest-community/vscode-jest)

## jetBrains

- Specify webpack configuration file to "fake" webpack config `config/webstomr.setup.js`
![fake webpack](https://i.stack.imgur.com/ztm1X.png)
- Setup [node](https://nodejs.org/en/) interpreter
- Enable [eslint](https://eslint.org/)
- Enable [flow](https://flow.org/)

### File structure
- `jsconfig.json` file is neaded for `VSCode`
- `config/webstomr.setup.js`file is needed for `jetBrains IDE`
- `.prettierrc` is needed for [prettier plugin](https://github.com/prettier/prettier)
- [FireBase](https://firebase.google.com) required files
  - `storage.rules`
  - `firebase.json`
  - `config/database.rules.json`
- `.vscode` direcotory ins needed for [VSCode](https://code.visualstudio.com/)
- `config/data.json` file is a database for [json-server](https://github.com/typicode/json-server)
- `.travis.yml` file is a configuration needed for [Travis](https://travis-ci.org/)
- `.postcssrc` file is needed to enable [css modules](https://github.com/css-modules/css-modules)
- `.flowconfig` is a configuration file for [flow](https://flow.org/)
- `.editorconfig` is as [plugin](https://editorconfig.org) fallback for thous who does not use prettier or eslint
- `.env` is a file for defining environment variables in project scope
- `wallaby.js` it is a configuration file for [wallaby](https://wallabyjs.com) test runner
