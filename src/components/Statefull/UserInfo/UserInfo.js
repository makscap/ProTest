import SignOutLogo from '../../../images/sign-out.svg';
import { NavLink, Link } from 'react-router-dom';
import styles from './UserInfo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserEmail) || 'Error';
  const nameUser = name.split('@')[0];
  const nameLetter = name[0].toUpperCase();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [isOpenProfile, setOpenProfile] = useState(false);
  const { t } = useTranslation();

  // При клике на иконку - меню октрывается/закрывается
  const handleIcon = () => {
    setOpenProfile(!isOpenProfile);
  };

  return (
    <div className={styles.userMenuContainer}>
      <div>
        <NavLink
          to="/"
          exact
          className={styles.userLink}
          activeClassName={styles.userLinkActive}
        >
          {t('header__menuHome')}
        </NavLink>

        <NavLink
          to="/materials"
          exact
          className={styles.userLink}
          activeClassName={styles.userLinkActive}
        >
          {t('header__menuMaterials')}
        </NavLink>

        <NavLink
          to="/contacts"
          exact
          className={styles.userLink}
          activeClassName={styles.userLinkActive}
        >
          {t('header__menuContacts')}
        </NavLink>
      </div>

      {/* <div className={styles.avatar}>
        <span className={styles.avatarLabel}>{nameLetter}</span>
      </div> */}

      <ProfileMenu isOpenProfile={isOpenProfile} onClick={handleIcon} />
      {/* <div className={styles.avatar} onClick={handleIcon}></div> */}

      {/* {isOpen && (
        <div className={styles.modalField}>
          <ul className={styles.modalList}>
            <li className={styles.listItem}>
              <NavLink
                to="/"
                activeClassName={styles.activeLink}
                className={styles.link}
                exact={true}
                onClick={closeBurgerMenu}
              >
                Profile
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <div onClick={() => dispatch(authOperations.logOut())}>
                <img
                  src={SignOutImg}
                  alt="signOutButton"
                  width="16"
                  height="16"
                ></img>
              </div>
            </li>
          </ul>
        </div>
      )} */}

      <span className={styles.userMenuName}>{nameUser}</span>

      <Link
        to="/auth"
        className={styles.LogOutBox}
        onClick={() => dispatch(authOperations.logOut())}
      >
        <img src={SignOutLogo} alt="SignOutLogo" height="16" width="16" />
      </Link>
    </div>
  );
}
