// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Containers
import HomeRouter from './Home/HomeRouter';
import ProfileRouter from './Profile/ProfileRouter';
import EmployeesRouter from './Employees/EmployeesRouter';

const AppNavigator: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeRouter />
      </Route>
      <Route path="/profile">
        <ProfileRouter />
      </Route>
      <Route path="/employees">
        <EmployeesRouter />
      </Route>
    </Switch>
  );
};

export default AppNavigator;
