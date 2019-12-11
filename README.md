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
11. [CSS Modules](https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/getCSSModuleLocalIdent.js)
12. [Mini CSS Extract Plugin (Extracts CSS into separate files)](https://github.com/webpack-contrib/mini-css-extract-plugin)
13. [CSS Modules](https://github.com/css-modules/css-modules)
14. [PostCSS Normalize](https://github.com/csstools/postcss-normalize)
15. [Optimize Css Assets Webpack Plugin (minimize the CSS)](https://github.com/NMFR/optimize-css-assets-webpack-plugin)
16. [Html Webpack Plugin (Launch a Web Server)](https://webpack.js.org/plugins/html-webpack-plugin/)
17. [Terser Webpack Plugin (Minifies JavaScript)](https://github.com/webpack-contrib/terser-webpack-plugin)
18. [React App Polyfill (for Promise, fetch, Object assign, Symbol, Array.from,)](https://github.com/GMOD/jbrowse-create-react-app/tree/master/packages/react-app-polyfill)
19. [Plug and Play Webpack Plugin (Faster instalation without `node_modules`)](https://github.com/arcanis/pnp-webpack-plugin)
20. [Webpack Manifest Plugin(Create a manifest file with: files, entrypoints)](https://github.com/danethurber/webpack-manifest-plugin)
21. [Watch Missing Node Modules Plugin (Avoid restarting webpack when you install a npm module)](https://www.npmjs.com/package/react-dev-utils)
22. [Case Sensitive Paths Plugin (helps you avoid case sensitive typos)](https://github.com/Urthen/case-sensitive-paths-webpack-plugin)
23. [Workbox Webpack Plugin (Cache Assets using service worker)](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)
24. [Module Scope Plugin (Prevent you use files outside src folder)](https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/ModuleScopePlugin.js)
25. [Module Not Found Plugin (error helper)](https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/ModuleNotFoundPlugin.js)
26. [Typescript Type Checking](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)
27. [Typescript Formatter]()
28. [Typescript](https://github.com/Microsoft/TypeScript)




### Get Started Immediately

You **don’t** need to install or configure tools like Webpack or Babel.<br>
They are preconfigured and hidden so that you can focus on the code.


--------------

## Folder Structure

### General Overview

```
root
├── public
├── src
│   │
│   ├── components
│   │   ├── Loader
│   │      ├── __tests__
│   │      ├── Loader.tsx
│   │      └── Loader.scss
│   │   ├── Footer
│   │      ├── __tests__
│   │      ├── Footer.tsx
│   │      └── Footer.scss
│   │   ├── Header
│   │
│   ├── containers
│   │   ├── Profile
│   │      ├── __tests__
│   │      ├── Profile.scss
│   │      ├── Profile.tsx
│   │      ├── ProfileRouter.tsx
│   │      ├── components
│   │         ├── ChangeUsernamePassword
│   │             ├── __tests__
│   │             ├── ChangeUsernamePassword.tsx
│   │             ├── ChangeUsernamePassword.scss
│   │
│   │         ├── GuestInformation
│   │             ├── __tests__
│   │             ├── GuestInformation.tsx
│   │             └── GuestInformation.scss
│   │
│   │         ├── Feedback
│   │             ├── __tests__
│   │             ├── Feedback.tsx
│   │             └── Feedback.scss
│   │
│   │         ├── EmergencyContact
│   │             ├── __tests__
│   │             ├── EmergencyContact.tsx
│   │             └── EmergencyContact.scss
│   │
│   │      ├── actions
│   │      ├── reducer
│   │      ├── services
│   │      └── model
│   │   ├── Rewards
│   │   ├── Trips
│   │   ├── Favorites
│   │   ├── Preferences
│   │   ├── Payment
│   │   ├── Extras
│   │   ├── Contact
│   │   ├── Notifications
│   │
│   ├── store
│   │    └── index.ts
|   └──
├── package.json
└── .gitignore
```

--------------

## <a name="scss"></a>Install SCSS

```sh
yarn add node-sass
```


## How to use [CSS Modules](https://github.com/css-modules/css-modules)

Create a file with extension `MyComponent.modules.scss`

```scss
// MyComponent.modules.scss

.myComponent {
  /* Styles goes here */
}
```



```tsx
// MyComponent.tsx

import React from 'react';
import classes from './MyComponent.module.scss';

const MyComponent: React.FC = () => {
  return (
    <div className={classes.myComponent}>
      <h2>My Component.</h2>
    </div>
  );
}

export default MyComponent;

```


--------------
## <a name="create-react-app"></a>Installing Enzyme

To get started with enzyme, you can simply install it with yarn as a dev dependency:

```bash
  yarn add enzyme enzyme-adapter-react-16 @types/enzyme @types/enzyme-adapter-react-16 -D
```

### Enzyme Configuration
You need to create a new file at `my-app\src\setupTests.js`:

```sh
mkdir my-app/src/setupTests.js
cd my-app/src/setupTests.js
```

```ts
// my-app/src/setupTests.js

import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Tells Enzyme that we are going to use React 16
configure({ adapter: new Adapter() });
```

--------------
## <a name="redux"></a>Setup Redux
In order to install redux and use it with react we need to do the following:


### Folder Structure
```
src
  containers
    |_Employees
      |_ reducers
        |_ employees.ts
        |_ index.ts (imported at /my-app/src/store/rootReducer)
      |_ sagas
        |_ employees.ts
        |_ index.ts (imported at /my-app/src/store/rootSaga)
      |_ actions
        |_ types (redux types y typescript types)
        |_ index.ts
  store
    |_ reducers (rootReducer) (import all reducers from /src/containers/*/reducers/index.ts)
    |_ sagas (import all watchers from /src/containers/*/reducers/index.ts)
    setupStore.js
```

### Step 1: Install Packages

Notes: We don't need to insta @types/redux since Redux provides its own type definitions.


Let's install the following packages:
- Redux
- React Redux
- Redux Saga

We need to install typescript @types for:
- React Redux

You will need to install an extension for Chrome (optional):
- [Chrome Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

```sh
# Packages
yarn add redux react-redux redux-saga -D

# TS Types
yarn add @types/react-redux

# Redux DevTools
yarn add redux-devtools react-redux -D

```

### Step : Create a Redux Actions

### Step : Create a Redux Reducer

Let's create the root reducer:
```sh
cd /my-app/src/

mkdir reducers

touch index.ts
```

This is the main root reducer:
```ts
// PATH: /my-app/src/store/reducers/index.ts

import { combineReducers } from 'redux';

// Example: MyContainerComponentReducer
import { MyContainerComponentReducer } from '../containers/MyContainerComponent/reducer';

const rootReducer = combineReducers({
  MyContainerComponentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

```

Any other else will be added in the containers

```ts
// PATH: /my-app/src/containers/MyContainerComponent/index.ts

import { SUCCESS_EMPLOYEES, EmployeesActionTypes } from '../actions/types';
import { Employees } from '../types/Employee';

const initialState: Employees[] = [];
  
const reducer = (state = initialState, action: EmployeesActionTypes): Employees[] => {
    switch (action.type) {
       case SUCCESS_EMPLOYEES:

         return [
            ...action.employees,
         ];
       default:
          return state;
     }
  };
  
  export default reducer;
  
```

### Step : Create the Redux Store

Create a new folder at:

```sh
mkdir /my-app/src/store
cd /my-app/src/store/

touch setupStore.ts
touch index.ts
```


```ts
// PATH: /my-app/src/store/setupStore.ts

```

```ts
// PATH: /my-app/src/store/index.ts

```

### Step : Bind Redux and React
```sh
mkdir /my-app/src/containers/Root/
cd /my-app/src/containers/Root/

touch /my-app/src/containers/Root/Root.tsx
```

```tsx

// PATH: /my-app/src/containers/Root/Root.ts

import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App/App'

interface IProps {
    store: any
};

const Root = ({ store } : IProps) => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

export default Root;

```


## <a name="redux-saga"></a>Setup Redux-Saga

---------------

## Adding React Router

```sh
yarn add react-router-dom
```

```ts
<Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>

```

---------------

## Eslint

[Eslint Configuration](https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js)


---------------

## Install Prettier

[Using Prettier with VS Code and Create React App - Technical Credit 💸 - Medium](https://medium.com/technical-credit/using-prettier-with-vs-code-and-create-react-app-67c2449b9d08)

### Step 1: Install Prettier and the ESLint Plugin
There you go:
```sh
yarn add --dev --exact prettier
yarn add --dev eslint-plugin-prettier

# Only works with git
yarn add husky lint-staged
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

### Optional if you are using git

Husky uses git pre-commit hook to run prettier when you add files.
```json
// ./package.json

"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
    "prettier --single-quote --write",
    "git add"
  ]
},
"prettier": {
  "singleQuote": true
}
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








