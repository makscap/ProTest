import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './BurgerMenuList.module.css';
import SignOutImg from '../../../images/sign-out.svg';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { useTranslation } from 'react-i18next';

function BurgerMenuList({ isLoggedIn, closeBurgerMenu }) {
  const dispatch = useDispatch();
    const { t } = useTranslation();

  return isLoggedIn ? (
    <div className={s.modalField}>
      <ul className={s.modalList}>
        <li className={s.listItem}>
          <NavLink
            to="/"
            activeClassName={s.activeLink}
            className={s.link}
            exact={true}
            onClick={closeBurgerMenu}
          >
                      {t('header__menuHome')}
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink
            to="/materials"
            activeClassName={s.activeLink}
            className={s.link}
            onClick={closeBurgerMenu}
          >
                      {t('header__menuMaterials')}
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink
            to="/contacts"
            activeClassName={s.activeLink}
            className={s.link}
            onClick={closeBurgerMenu}
          >
                      {t('header__menuContacts')}
          </NavLink>
        </li>
        <li className={s.listItem}>
          <div onClick={() => dispatch(authOperations.logOut())}>
            <img src={SignOutImg} alt="signOutButton" width="16" height="16"></img>
          </div>
        </li>
      </ul>
    </div>)
    : (<div className={s.modalField}>
      <ul className={s.modalList}>
        <li className={s.listItem}>
          <NavLink
            to="/contacts"
            activeClassName={s.activeLink}
            className={s.link}
            onClick={closeBurgerMenu}
          >
                                  {t('header__menuContacts')}
          </NavLink>
        </li>
      </ul>
    </div>) ;
}

export default BurgerMenuList;