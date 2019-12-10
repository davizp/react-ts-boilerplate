import React from 'react';
import Header from './components/Header/Header';
import classes from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Header />
    </div>
  );
}

export default App;
