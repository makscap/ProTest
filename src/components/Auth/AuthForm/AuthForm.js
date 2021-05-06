import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import {useTranslation } from 'react-i18next';
import GoogleAuth from '../AuthGoogle';
import styles from './AuthForm.module.css';

export default function AuthForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation()

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
    <div className={styles.Form_container}>
      <form>
        <p className={styles.header}>
          {t('login-google-description')}
        </p>
        <GoogleAuth />
        <p className={styles.header}>
          {t('login-google-description-form')}
        </p>
        <label className={styles.form_label}>
          <input
            type="text"
            name="email"
            required
            value={email}
            autoComplete="off"
            onChange={handleChange}
            className={styles.input_item}
          />
          <span className={styles.plaseholder}>
            {t('login-google-email')}
          </span>
        </label>
        <label className={styles.form_label}>
          <input
            type="password"
            name="password"
            value={password}
            required
            autoComplete="off"
            onChange={handleChange}
            className={styles.input_item}
          />
          <span className={styles.plaseholder}>
            {t('login-google-password')}
          </span>
        </label>
        <span className={styles.warning_message}>
          {t('login-form-validate')}
        </span>
        <div className={styles.button_container}>
          <button onClick={handleLogin} className={styles.button}>
            {t('login-signIn')}
          </button>
          <button onClick={handleRegister} className={styles.button}>
            {t('login-signUp')}
          </button>
        </div>
      </form>
    </div>
  );
}
