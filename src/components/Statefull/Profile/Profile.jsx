// import React from 'react';
import s from './Profile.module.css';
import defImg from '../../../images/default-avatar.png'
import { authOperations, authSelectors } from '../../redux/auth';
// import ProfileMenu from '../ProfileMenu/ProfileMenu';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Profile() {
  const name = useSelector(authSelectors.getUserName) || '-';
  const email = useSelector(authSelectors.getUserEmail) || '-';
  const confirm =  useSelector(authSelectors.getUserConfirm) || '-';
  const token = useSelector(authSelectors.getUserToken) || '-';  


  return (
    <div className={s.mainBlock}>
          <div className={s.block}>
      <div>
          <img src={defImg} alt='avatar' className={s.avatar}></img>
          <button>Загрузить...</button>
      </div>
      <div>
        <h4 className={s.topicTheme}>Profile:</h4>
        <ul className={s.ulBox}>
          <li className={s.item}>
            Name: {name}
          </li>
          <li className={s.item}>
            E-mail: {email}
          </li>
            <li className={confirm ? s.itemTrue : s.itemFalse}>
            Your E-mail {confirm ? 'has' : `hasn't`} been confirmed.
          </li>
        </ul>
      </div>
    </div>
</div>
  )
}