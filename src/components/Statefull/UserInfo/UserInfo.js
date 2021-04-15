import SignOutLogo from '../../../images/sign-out.svg';
import { NavLink, Link } from 'react-router-dom';
import styles from './UserInfo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserEmail) || 'Error';
  const nameUser = name.split('@')[0];
  const nameLetter = name[0].toUpperCase();

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

      <div className={styles.avatar}>
        <span className={styles.avatarLabel}>{nameLetter}</span>
      </div>

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
