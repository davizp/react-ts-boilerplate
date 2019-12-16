// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Inner Containers
import Employees from '../Employees/Employees';

const AppNavigator: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/employees">
        <Employees />
      </Route>
    </Switch>
  );
};

export default AppNavigator;
