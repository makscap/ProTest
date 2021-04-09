import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      {/* <NavLink
        to="/materials"
        exact
        className={styles.authLink}
        activeClassName={styles.authActiveLink}
      >
        Materials
      </NavLink> */}
      <NavLink
        to="/contacts"
        exact
        className={styles.authLink}
        activeClassName={styles.authActiveLink}
      >
        Contacts
      </NavLink>
    </div>
  );
}
