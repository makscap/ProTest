import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Trans, useTranslation } from 'react-i18next'

import AuthForm from '../AuthForm/AuthForm';
import AuthSuccess from '../AuthSuccess/AuthSuccess';

import styles from './AuthPage.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { authSelectors } from '../../redux/auth';

const AuthPage = () => {
  const isRegister = useSelector(authSelectors.getIsRegister);

  const { t } = useTranslation();

  return (
    <div className={styles.page_container}>
      <ul className={styles.page_list}>
        <li>
          <div className={styles.page_content}>
            <h1 className={styles.page_title}>Pro Test</h1>
             <p className={styles.page_text}>
             <Trans i18nKey="login-test-description" >
              .                <span className={styles.bold_items}>
                  [</span> We will help you find weak points in knowledge so that you can strengthen it.
                 We will show you what is relevant to know for a
                <span className={styles.bold_items}>QA Engineer
                </span> and will try to make the learning process more diverse_
                <span className={styles.bold_items}>]</span>
              </Trans>
            </p>
          </div>
        </li>
        <li>{!isRegister ? <AuthForm /> : <AuthSuccess />}</li>
      </ul>
      <ToastContainer autoClose={5000} position="bottom-right" />
    </div>
  );
};
export default AuthPage;
