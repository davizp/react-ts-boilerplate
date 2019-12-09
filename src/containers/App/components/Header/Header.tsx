import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <h1>Welcome to My App!</h1>
      <p>
        Edit <code>src/containers/App.tsx</code> and save to reload.
      </p>
    </header>
  );
}

export default Header;
