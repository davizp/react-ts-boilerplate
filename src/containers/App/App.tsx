import React from 'react';
import Header from './components/Header/Header';
import classes from './App.module.scss';
import MainRoutes from './AppRoutes';
import Menu from './components/Menu/Menu';

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <Menu />
      <MainRoutes />
    </div>
  );
};

export default App;
