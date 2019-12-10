import React from 'react';
import Header from './components/Header/Header';
import classes from './App.css';

const App: React.FC = () => {
  return (
    <div className={[classes.app, classes.cssmodule-test]}>
      <Header />
    </div>
  );
}

export default App;
