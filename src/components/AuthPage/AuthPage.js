// import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import AuthForm from '../AuthForm/AuthForm';

import styles from './AuthPage.module.css';

export default function AuthPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
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
              <b>[</b> We will help you find weak points <br /> in knowledge so
              that you can strengthen it.
              <br /> We will show you what is relevant to know <br />
              for a <b>QA Engineer</b> and will try to make the <br />
              learning process more diverse_ <b>]</b>
            </p>
          </div>
        </li>
        <li>
          <AuthForm
            name={name}
            email={email}
            password={password}
            handleLogin={handleLogin}
            handleRegister={handleRegister}
            handleChange={handleChange}
          />
        </li>
      </ul>
    </div>
  );
}
