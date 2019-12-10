// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Inner Containers
import Home from '../Home/Home';

const AppNavigator: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default AppNavigator;


