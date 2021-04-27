import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';
import { useTranslation } from 'react-i18next';

export default function AuthNav() {
  const { t } = useTranslation();

  return (
    <div>
      <NavLink
        to="/contacts"
        exact
        className={styles.authLink}
        activeClassName={styles.authActiveLink}
      >
        {t('header__menuHome')}
      </NavLink>
    </div>
  );
}
