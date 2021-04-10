import React from 'react';
import logoImg from '../../../images/logo.png';
import styles from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to="/" exact>
      <img
        src={logoImg}
        alt="Logo"
        className={styles.logo}
        height="28"
        width="129"
      />
    </NavLink>
  );
};

export default Logo;
