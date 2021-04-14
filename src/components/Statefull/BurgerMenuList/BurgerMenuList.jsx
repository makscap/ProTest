import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './BurgerMenuList.module.css';
import SignOutImg from '../../../images/sign-out.svg';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

function BurgerMenuList({ isLoggedIn, closeBurgerMenu }) {
  const dispatch = useDispatch();

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
            Home
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink
            to="/materials"
            activeClassName={s.activeLink}
            className={s.link}
            onClick={closeBurgerMenu}
          >
            Materials
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink
            to="/contacts"
            activeClassName={s.activeLink}
            className={s.link}
            onClick={closeBurgerMenu}
          >
            Contacts
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
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>) ;
}

export default BurgerMenuList;