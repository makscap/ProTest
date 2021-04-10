import React from 'react';
import { FcGoogle } from 'react-icons/fc';
// import { useDispatch } from 'react-redux';

import styles from './GoogleAuth.module.css';

const GoogleAuth = () => {
  // const dispatch = useDispatch();

  const handleGoogleAuth = e => {
    e.preventDefault();
    console.log('Кликаем для авторизации Google');
  };

  return (
    <label>
      <button
        type="button"
        className={styles.button__google}
        onClick={handleGoogleAuth}
      >
        <div className={styles.google_container}>
          <FcGoogle className={styles.google_icon} />
          Google
        </div>
      </button>
    </label>
  );
};

export default GoogleAuth;
