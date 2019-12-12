import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Menu.module.scss';

const Menu: React.FC = () => {
  return (
    <ul className={classes.menu}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/employees/">Employees</Link>
      </li>
      <li>
        <Link to="/profile/">Profile</Link>
      </li>
    </ul>
  );
}

export default Menu;
