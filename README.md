# Project Setup

This is a documentation that will help you with the setup of a project from scratch, throught this document you will find several instructions of how to setup different packages that you will need to install to get started.

## Overview
1. [Install Create React App](#create-react-app)
2. [Install Enzyme](#enzyme)
3. 

## <a name="create-react-app"></a>Install Create React App

Instation using typescript:

```sh
npx create-react-app my-app --template typescript
```

Regular installation:

```sh
npx create-react-app my-app
```
_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg' width='600' alt='npm start'>
</p>

### Eject the project configuration
Since we are goint to add some extra packages we need to eject the project\'s configuration by executing the following command:

```sh
yarn eject
```

### What is inside Create React App?

1. [React](https://reactjs.org/docs/getting-started.html)
2. [Webpack](https://webpack.js.org/guides/installation/)
4. [Babel](https://babeljs.io/en/setup)
5. [Jest](<https://jestjs.io/docs/en/getting-started>)
6. [PostCSS](https://github.com/postcss/postcss-loader)
7. [Dotenv (Environment variables)](https://github.com/bkeepers/dotenv)
8. [Eslint](<https://webpack.js.org/loaders/eslint-loader/>)
9. [Semver (Semantic versioner)](https://github.com/npm/node-semver)
10. [CSS Loader](https://webpack.js.org/loaders/css-loader/)
11. [Mini CSS Extract Plugin (Extracts CSS into separate files)](https://github.com/webpack-contrib/mini-css-extract-plugin)
12. [Optimize Css Assets Webpack Plugin (minimize the CSS)](https://github.com/NMFR/optimize-css-assets-webpack-plugin)
13. [Html Webpack Plugin (Launch a Web Server)](https://webpack.js.org/plugins/html-webpack-plugin/)
14. [Terser Webpack Plugin (Minifies JavaScript)](https://github.com/webpack-contrib/terser-webpack-plugin)
15. [React App Polyfill (for Promise, fetch, Object assign, Symbol, Array.from,)](https://github.com/GMOD/jbrowse-create-react-app/tree/master/packages/react-app-polyfill)
16. [Plug and Play Webpack Plugin (Faster instalation without node_modules)](https://github.com/arcanis/pnp-webpack-plugin)
17. [Webpack Manifest Plugin(Create a manifest file with: files, entrypoints)](https://github.com/danethurber/webpack-manifest-plugin)
18. [Typescript (optional)](https://github.com/Microsoft/TypeScript)


### Get Started Immediately

You **don’t** need to install or configure tools like Webpack or Babel.<br>
They are preconfigured and hidden so that you can focus on the code.



## <a name="create-react-app"></a>Installing Enzyme

To get started with enzyme, you can simply install it with yarn as a dev dependency:

```bash
  yarn add enzyme enzyme-adapter-react-16 -D
```

### Enzyme Configuration
You need to create a new file at `my-app\src\setupTests.js`

```js
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Tells Enzyme that we are going to use React 16
configure({ adapter: new Adapter() });

```
If you use Typescript:

```ts
import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

```

## Eslint

[Eslint Configuration](https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js)




## Install Prettier

[Using Prettier with VS Code and Create React App - Technical Credit 💸 - Medium](https://medium.com/technical-credit/using-prettier-with-vs-code-and-create-react-app-67c2449b9d08)

### Step 1: Install Prettier and the ESLint Plugin
There you go:
```sh
yarn add --dev --exact prettier
yarn add --dev eslint-plugin-prettier
```

### Step 2: Install the Prettier and ESLint VS Code Extensions

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Step 3: Create the Prettier and ESLint Configuration files


Create an .eslintrc file with the following contents:

```json
{
  "extends": "react-app",
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```


### Step 4: Apply your own rules

If you are not happy with the default Prettier configuration then you can create a .prettierrc file with your own options, for example:

```json
{
  "singleQuote": true,
  "trailingComma": "es5"
}

```

### Step 5: Apply Prettier Formatting on Save (Optional)
You most likely want to apply the Prettier formatting whenever you save your files. To do so, add the following to your Visual Studio Code [Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings):

```json
"editor.formatOnSave": true
```


[Configuration File · Prettier](https://prettier.io/docs/en/configuration.html)
```json
{
  scripts: {
    "prettier": "node ./scripts/prettier/index.js write-changed",
    "prettier-all": "node ./scripts/prettier/index.js write"
  },
  devDependencies: {
    "prettier": "1.13.7",
    "rollup-plugin-prettier": "^0.3.0"
  }
}
```

-----------------------
TODO: Delete this section

### Prettier React Configuration
You need to create a new file at `my-app\.prettierrc.js`
const esNextPaths = [
  // Source files
  'src/*/*.js',
];

module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  printWidth: 80,
  parser: 'babylon',

  overrides: [
    {
      files: esNextPaths,
      options: {
        trailingComma: 'all',
      },
    },
  ],
};




packages/react-devtools-core/dist
packages/react-devtools-extensions/chrome/build
packages/react-devtools-extensions/firefox/build

-----------------------




## Implement Webpack Performance Budgets

[Setting performance budgets with webpack](https://web.dev/codelab-setting-performance-budgets-with-webpack/)

[Performance budgets 101](https://web.dev/performance-budgets-101/)

```json
performance: {
  maxAssetSize: 300000,
  maxEntrypointSize: 300000,
  hints: 'warning',
},
```

## Setup Redux

## Setup Redux-Saga

## Setup Docker

### Step 1: Download Docker
### Step 2: Create an account
### Step 3: Install Docker Globally

## Setup DockerFile
First we need to go to a series of steps before we get started.

### Step 1: Create Dockerfile
```dockerfile
FROM node:alpine as builder
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html

```

### Step 2: Create Dockerfile.dev
```dockerfile
FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "run", "start"]
```

### Step 3: Create `docker-compose.yml`

```yml
version: '3'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports: 
      - "3000:3000"
    volumes:
      - /app/node_modules
      - .:/app
  tests:
    build:
      context: .
      dockerfile: Dockerfile.dev
    volumes:
      - /app/node_modules
      - .:/app
    command: ["npm", "run", "test"]
```

## Adding Docker Scripts in the `package.json`
```json
scripts: {
  "docker:run": "docker run -it --rm my-app",
  "docker:build": "docker build -t my-app .",
  "docker:dev": "docker-compose up",
}
```

## Install CSS modules (scss)

Styling Components
- Inline styles
    - Radium
    - Styled-components
- CSS-modules
    - classes se pueden repetir
- import SCSS file por componente


## CSS Config


### Add Grid 24 cols

### Add Fonts

### Add Typography

### Add Icons

### Normalize

### Basics CSS file (Rems)

### Combine Media Queries (TODO: check the webpack plugin)

### Add CSS helper file
Breaking Points:
  1200px  - Desktop
  768px - Tablet
  320px   - Mobile

### CSS Linter
TODO: Check [StylelintWebpackPlugin](https://webpack.js.org/plugins/stylelint-webpack-plugin/) and Prettier








