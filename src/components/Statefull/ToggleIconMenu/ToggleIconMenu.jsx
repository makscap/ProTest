import React from 'react';
import styles from './ToggleIconMenu.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

function ToggleIconMenu({ isOpen, onClick, isLoggedIn }) {
  const name = useSelector(authSelectors.getUserEmail) || 'Error';

  return (
    <div className={styles.avatarAbdButton}>
      {isLoggedIn
        && <div className={styles.avatar}>
        <span className={styles.avatarLabel}>{name[0]}</span>
      </div>}

    <div >
      <div className={styles.toggleField} onClick={onClick}>
        {!isOpen && (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 15H17.5V13.3333H2.5V15ZM2.5 10.8333H17.5V9.16667H2.5V10.8333ZM2.5 5V6.66667H17.5V5H2.5Z" fill="black" />
        </svg>
        )}

        {isOpen && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5832 1.94413L14.0557 0.416626L7.99984 6.47246L1.944 0.416626L0.416504 1.94413L6.47234 7.99996L0.416504 14.0558L1.944 15.5833L7.99984 9.52746L14.0557 15.5833L15.5832 14.0558L9.52733 7.99996L15.5832 1.94413Z" fill="black"/>
        </svg>           
        )}
      </div>
      </div>
    </div>
  );
}

export default ToggleIconMenu;