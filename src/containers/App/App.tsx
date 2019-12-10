import React from 'react';
import Header from './components/Header/Header';
import classes from './App.module.scss';
import MainRoutes from '../MainRoutes';

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <MainRoutes />
    </div>
  );
}

export default App;
