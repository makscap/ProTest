import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { authSelectors } from '../redux/auth';
import Navigation from './Navigation';
import Logo from './Logo';
import BurgerMenuList from './BurgerMenuList';
import ToggleIconMenu from './ToggleIconMenu';
import s from './Statefull.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [isOpen, setOpen] = useState(false);

  // При клике на иконку - меню октрывается/закрывается
  const handleIcon = () => {
    setOpen(!isOpen);
  };

  // При клике на ссылку - меню закрывается
  const closeBurgerMenu = () => {
    setOpen(false);
  };

  // При клике на ссылку - разлогиниваемся и идем на публичный роут
  const LogOut = () => {
    // function logout
    setOpen(false);
  };

  return (
    <header className={s.header}>
      <Logo />
      <Navigation isLoggedIn={isLoggedIn} />
      {isOpen && (
        <BurgerMenuList
          onClick={LogOut}
          isLoggedIn={isLoggedIn}
          closeBurgerMenu={closeBurgerMenu}
        />
      )}
      <ToggleIconMenu
        isOpen={isOpen}
        isLoggedIn={isLoggedIn}
        onClick={handleIcon}
      />
    </header>
  );
}
