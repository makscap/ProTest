import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/contacts"
        exact
        className={styles.authLink}
        activeClassName={styles.authActiveLink}
      >
        Контакты
      </NavLink>
    </div>
  );
}
