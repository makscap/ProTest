import React from 'react';
import s from '../Useful-info.module.css';
function Resources({ id, name, url }) {
  return (
    <>
      <a className={s.linkResource} href={url}>
        {id}
        <span>. </span>
        {name}
      </a>
    </>
  );
}
export default Resources;
