import React from 'react';
import logoPhoto from "../../images/logo.png";
import styles from './Logo.module.css';

const Logo = () => {
  const logo = logoPhoto;

  return (
            <img
              src={logo}
              alt="Logo"
              className={styles.logo}
              height="28"
              width="129"
            />
  );
};

export default Logo;