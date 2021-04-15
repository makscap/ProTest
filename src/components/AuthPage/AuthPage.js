import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import AuthForm from '../AuthForm/AuthForm';

import styles from './AuthPage.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function AuthPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleRegister = e => {
    e.preventDefault();

    dispatch(authOperations.register({ email, password }));

    setEmail('');
    setPassword('');
  };

  const handleLogin = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.page_container}>
      <ul className={styles.page_list}>
        <li>
          <div className={styles.page_content}>
            <h1 className={styles.page_title}>Pro Test</h1>
            <p className={styles.page_text}>
              <span className={styles.bold_items}>[</span> We will help you find
              weak points in knowledge so that you can strengthen it. We will
              show you what is relevant to know for a{' '}
              <span className={styles.bold_items}> QA Engineer</span> and will
              try to make the learning process more diverse_{' '}
              <span className={styles.bold_items}>]</span>
            </p>
          </div>
        </li>
        <li>
          <AuthForm
            email={email}
            password={password}
            handleLogin={handleLogin}
            handleRegister={handleRegister}
            handleChange={handleChange}
          />
        </li>
      </ul>
      <ToastContainer autoClose={5000} position="bottom-right" />
    </div>
  );
}
