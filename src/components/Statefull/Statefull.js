import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserInfo from "../UserInfo/UserInfo";
import AuthNav from "../AuthNav/AuthNav";
import { authSelectors } from "../redux/auth";
import s from './Statefull.module.css';
// import ButtonLogOut from '../ButtonLogOut/ButtonLogOut'

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserInfo /> : <AuthNav />}
      {/* {isLoggedIn ? <AuthNav /> : <UserInfo />} */}
    </header>
  );
}
