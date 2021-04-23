import React from 'react';
import styles from './ProfileMenu.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import SignOutImg from '../../../images/sign-out.svg';

function ProfileMenu({ isOpenProfileMenu, isOpenProfile, onClick, isLoggedIn, closeBurgerMenu }) {
  const name = useSelector(authSelectors.getUserEmail) || 'Error';
  const nameLetter = name[0].toUpperCase();
  const dispatch = useDispatch();

  return (
    <div className={styles.avatarAbdButton} >
          <div >
              <div className={styles.avatar}  onClick={onClick}>
        <span className={styles.avatarLabel}>{nameLetter}</span>

        {/* {!isOpen && (<></>)} */}

        {isOpenProfile && (
        <div className={styles.modalField}>
      <ul className={styles.modalList}>
        <li className={styles.listItem}>
          <NavLink
            to="/profile"
            activeClassName={styles.activeLink}
            className={styles.link}
            exact={true}
            onClick={closeBurgerMenu}
          >
            Profile
          </NavLink>
        </li>
        {/* <li className={styles.listItem}>
          <div onClick={() => dispatch(authOperations.logOut())}>
            <img src={SignOutImg} alt="signOutButton" width="16" height="16"></img>
          </div>
        </li> */}
      </ul>
    </div>              
        )}
      </div>
      </div>
    </div>
  );
}

export default ProfileMenu;