import React from 'react';
import styles from './Navigation.module.css';
import UserInfo from '../UserInfo/UserInfo';
import AuthNav from '../AuthNav/AuthNav';

const Navigation = ({ isLoggedIn }) => {
  return (
    <nav className={styles.navContainer}>
      {isLoggedIn ? <AuthNav /> : <UserInfo />}
      {/* {isLoggedIn ? <UserInfo /> : <AuthNav />} */}
    </nav>
  );
};

export default Navigation;
