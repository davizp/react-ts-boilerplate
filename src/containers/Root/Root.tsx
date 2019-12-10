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