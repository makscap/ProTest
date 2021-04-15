import React, { createContext, useContext } from 'react';

import { GoogleLogin } from 'react-google-login';
// import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authOperations, authSelectors } from '../redux/auth';

import styles from './GoogleAuth.module.css';

const AuthContext = createContext(false);

export default function GoogleAuth() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const handleLogin = async googleData => {
    const user = googleData?.profileObj;
    const token = googleData?.tokenId;
    try {
      // const response = await fetch(
      //   'https://protest-api.herokuapp.com/api/users/google',
      //   {
      //     method: 'POST',
      //     body: JSON.stringify({
      //       token: googleData.tokenId,
      //     }),
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   },
      // );
      dispatch(authOperations.googleIn({ user, token }));
      if (!isLoggedIn) {
        history.push('/auth');
      }
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <GoogleLogin
        clientId="814991395296-bn2u0ikjh0g5rkph9aqc8e58d5bnmelj.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
        className={styles.button__google}
      />

      <AuthContext.Provider
        value={{
          googleLogIn: handleLogin,
        }}
      />
    </>
  );
}

export const useAuth = () => useContext(AuthContext);
