import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './BurgerMenuList.module.css';
import SignOutImg from '../../../images/sign-out.svg';

function BurgerMenuList({ onClick, isLoggedIn, closeBurgerMenu }) {

//   return isLoggedIn ? (
//     <div className={s.modalField}>
//       <ul className={s.modalList}>
//         <li className={s.listItem}>
//           <NavLink
//             to="/"
//             activeClassName={s.activeLink}
//             className={s.link}
//             exact={true}
//             onClick={closeBurgerMenu}
//           >
//             Home
//           </NavLink>
//         </li>
//         <li className={s.listItem}>
//           <NavLink
//             to="/materials"
//             activeClassName={s.activeLink}
//             className={s.link}
//             onClick={closeBurgerMenu}
//           >
//             Materials
//           </NavLink>
//         </li>
//         <li className={s.listItem}>
//           <NavLink
//             to="/contacts"
//             activeClassName={s.activeLink}
//             className={s.link}
//             onClick={closeBurgerMenu}
//           >
//             Contacts
//           </NavLink>
//         </li>
//         <li className={s.listItem}>
//           <div onClick={onClick}>
//             <img src={SignOutImg} alt="signOutButton" width="16" height="16"></img>
//           </div>
//         </li>
//       </ul>
//     </div>
//   ) : (
//     <div className={s.modal}>
//       <ul className={s.modalList}>
//         <li className={s.listItem}>
//           <NavLink to="/contacts" className={s.link} onClick={closeBurgerMenu}>
//             Contacts
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );

  return (
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
          <div onClick={onClick}>
            <img src={SignOutImg} alt="signOutButton" width="16" height="16"></img>
          </div>
        </li>
      </ul>
    </div>
  ) ;
    
}

export default BurgerMenuList;