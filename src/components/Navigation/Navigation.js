import React from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { authSelectors } from '../redux/auth';
import styles from './Navigation.module.css';
import Logo from '../Logo/Logo';

const Navigation = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={styles.navContainer}>
      <NavLink to="/" exact>
        <Logo />
      </NavLink>
    </nav>
  );
};

export default Navigation;
