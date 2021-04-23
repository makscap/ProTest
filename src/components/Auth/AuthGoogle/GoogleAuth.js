import React from 'react';

import { GoogleLogin } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/auth';

import styles from './GoogleAuth.module.css';

export default function GoogleAuth() {
  const dispatch = useDispatch();

  const handleLogin = async googleData => {
    const token = googleData?.tokenId;
    dispatch(authOperations.googleIn({ token }));
  };
  return (
    <GoogleLogin
      clientId="155122661191-v5r1kdk24ck9v66sl6br39btn872euqd.apps.googleusercontent.com"
      render={renderProps => (
        <div
          className={styles.button__google}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          variant="contained"
        >
          <div className={styles.google_container}>
            <FcGoogle className={styles.google_icon} />
            Google
          </div>
        </div>
      )}
      onSuccess={handleLogin}
      onFailure={handleLogin}
      className={styles.button__google}
      cookiePolicy={'single_host_origin'}
    />
  );
}
