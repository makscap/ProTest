import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import defaultAvatar from "../../images/default-avatar.png";
import SignOut from "../../images/sign-out.svg";
import { NavLink } from 'react-router-dom';
import styles from './UserInfo.module.css';


export default function UserMenu() {
  const dispatch = useDispatch();
  const name = 'Undefined';
  const avatar = defaultAvatar;
  const SignOutLogo = SignOut;

  return (
    <div className={styles.userMenuContainer}>
        <div>
          <NavLink
            to="/"
            exact
            className={styles.userLink}
            activeClassName={styles.userLinkActive}
          >
            Главная
          </NavLink>

          <NavLink
            to="/materials"
            exact
            className={styles.userLink}
            activeClassName={styles.userLinkActive}
          >
            Полезные материалы
          </NavLink>

          <NavLink
            to="/contacts"
            exact
            className={styles.userLink}
            activeClassName={styles.userLinkActive}
          >
            Контакты
          </NavLink>
        </div>

              <img src={avatar} alt="" width="30" className={styles.userMenuAvatar} />
              <span className={styles.userMenuName}>{name}</span>

      
        <div className={styles.userButtonLogOut}> 
              <button type="submit" className={styles.userButtonLogOut} onClick={() => dispatch(authOperations.logOut())}>
                   <img
                      src={SignOutLogo}
                      alt="Logo"
                      height="16"
                      width="16"
                   />
              </button>
        </div>
    </div>
    
  );
}
