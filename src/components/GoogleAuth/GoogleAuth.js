import React from 'react';
import { FcGoogle } from 'react-icons/fc';

import styles from './GoogleAuth.module.css';

const GoogleAuth = () => {
  return (
    <a href="http://protest-api.herokuapp.com/api/users/google">
      <div className={styles.google_container}>
        <FcGoogle className={styles.google_icon} />
        Google
      </div>
    </a>
  );
};

export default GoogleAuth;
