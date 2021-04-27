import s from './SettingsContainer.module.css';
import React, { useState, useEffect } from 'react';

import i18n from '../../../i18n';

export default function SettingsContainer() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className={s.container}>
      {/* Переключатель языка */}
      <div className={s.itemTheme}>
        <button
          type="button"
          className={s.button}
          onClick={() => toggleLanguage()}
        >
          <span className={s.spanTag}>{language}</span>
        </button>
      </div>

      {/* Переключатель теми */}
      {/* <div> */}
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="448"
        viewBox="0 0 512 448"
        className={s.images}
      >
        <title></title>
        <g id="icomoon-ignore"></g>
        <path
          fill="#fff"
          d="M0 224c0-88.25 71.75-160 160-160h192c88.25 0 160 71.75 160 160s-71.75 160-160 160h-192c-88.25 0-160-71.75-160-160zM352 352c70.5 0 128-57.5 128-128s-57.5-128-128-128-128 57.5-128 128 57.5 128 128 128z"
        ></path>
      </svg>
    </div>
    // </div>
  );
}
