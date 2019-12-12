import React from 'react';
import classes from './Menu.module.scss';

const Menu: React.FC = () => {
  return (
    <ul className={classes.menu}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/employees/">Employees</a>
      </li>
      <li>
        <a href="/profile/">Profile</a>
      </li>
    </ul>
  );
}

export default Menu;
