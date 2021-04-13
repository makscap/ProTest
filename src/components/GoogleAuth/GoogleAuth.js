import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

import styles from './GoogleAuth.module.css';

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const googleLogIn = () => {
    window.location.href = 'http://protest-api.herokuapp.com/api/users/google';

    dispatch(authOperations.googleIn());
  };

  return (
    <button className={styles.button__google} onClick={googleLogIn}>
      <div className={styles.google_container}>
        <FcGoogle className={styles.google_icon} />
        Google
      </div>
    </button>
  );
};

export default GoogleAuth;
