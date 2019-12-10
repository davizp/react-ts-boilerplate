import React from 'react';
// import classes from './Header.module.scss';
import classes from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={classes.appHeader}>
      <h1>Welcome to My App!</h1>
      <p>
        Edit <code>src/containers/App.tsx</code> and save to reload.
      </p>
    </header>
  );
}

export default Header;
