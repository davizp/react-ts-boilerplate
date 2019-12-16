import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from './containers/Root/Root';
import * as serviceWorker from './serviceWorker';
import setupStore from './store/setupStore';
// import 'react-app-polyfill/ie11';

const store = setupStore({});

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
