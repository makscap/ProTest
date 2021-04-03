import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import SignOut from "../../images/sign-out.svg";
import styles from './ButtonLogOut.module.css';


export default function ButtonLogOut() {
  const dispatch = useDispatch();
  const SignOutLogo = SignOut;

  return (

              <button type="submit" className={styles.userButtonLogOut} onClick={() => dispatch(authOperations.logOut())}>
                   <img
                      src={SignOutLogo}
                      alt="Logo"
                      height="16"
                      width="16"
                   />
              </button>

  );
}
