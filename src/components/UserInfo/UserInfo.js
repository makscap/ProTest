import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import SignOut from "../../images/sign-out.svg";
import { NavLink } from 'react-router-dom';
import styles from './UserInfo.module.css';
import {Avatar, Divider} from '@material-ui/core'
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  divider: {
    marginRight: '20px',
    backgroundColor: '#D7D7D7',
  },
  avatar: {
    backgroundColor: '#FFFFFF',
    color: '#555555',
    boxShadow: '0px 1px 1px rgba(18, 29, 46, 0.1)',
    width: '30px',
    height: '30px',
    fontSize: '14px',
    marginLeft: '18px',
    marginRight: '6px',
  }
}));

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = 'Group10';
  const SignOutLogo = SignOut;
  const classes = useStyles();

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

      <Avatar className={classes.avatar}>{name[0]}</Avatar>



      <span className={styles.userMenuName}>{name}</span>

      <Divider orientation="vertical" flexItem className={classes.divider}/>

      <div className={styles.userButtonLogOut}>
           <NavLink
              to="/auth"
              exact
              className={styles.userButtonLogOut}
              onClick={() => dispatch(authOperations.logOut())}>
                <img
                  src={SignOutLogo}
                  alt="Logo"
                  height="16"
                  width="16"
                   />
           </NavLink>
        </div>
    </div>
    
  );
}
