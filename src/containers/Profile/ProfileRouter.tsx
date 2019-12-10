// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Inner Containers
import Profile from '../Profile/Profile';

const AppNavigator: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/profile/hi">
        Hi!
      </Route>
    </Switch>
  );
}

export default AppNavigator;


