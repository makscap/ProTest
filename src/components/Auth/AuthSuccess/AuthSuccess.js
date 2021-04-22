import styles from './AuthSuccess.module.css';

const AuthSuccess = () => {
  return (
    <div className={styles.div_container}>
      <h1 className={styles.div_title}>Verify your email address</h1>
      <h3 className={styles.div_sub_title}>
        <span className={styles.bold_items}>[</span> A verification link has
        been sent to your email account
        <span className={styles.bold_items}> ]</span>
      </h3>
      <p className={styles.div_text}>
        Please click on the link that has been sent to your email account to
        verify your email and complete registration.
      </p>
    </div>
  );
};
export default AuthSuccess;
