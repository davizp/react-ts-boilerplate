// Dependencies
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// Containers
import HomeRouter from './Home/HomeRouter';
import ProfileRouter from './Profile/ProfileRouter';

const AppNavigator: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeRouter />
        </Route>
        <Route path="/profile">
          <ProfileRouter />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppNavigator;


