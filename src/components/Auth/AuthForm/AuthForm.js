import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import GoogleAuth from '../AuthGoogle';
import styles from './AuthForm.module.css';

export default function AuthForm() {
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
    <div className={styles.Form_container}>
      <form>
        <p className={styles.header}>
          You can use your Google Account to authorize:
        </p>
        <GoogleAuth />
        <p className={styles.header}>
          Or login to our app using e-mail and password:
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
          <span className={styles.plaseholder}>E-mail*</span>
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
          <span className={styles.plaseholder}>Password*</span>
        </label>
        <span className={styles.warning_message}>
          *This field cannot be empty
        </span>
        <div className={styles.button_container}>
          <button onClick={handleLogin} className={styles.button}>
            Sign in
          </button>
          <button onClick={handleRegister} className={styles.button}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
