import GoogleAuth from '../GoogleAuth';
import styles from './AuthForm.module.css';

const AuthForm = props => {
  const { email, password, handleLogin, handleRegister, handleChange } = props;

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
};

export default AuthForm;
