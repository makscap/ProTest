import React from 'react';
import s from '../Useful-info.module.css';
function Literature({ id, name, url }) {
  return (
    <>
      <a className={s.linkLiterature} href={url}>
        {id}
        <span>. </span>
        {name}
      </a>
    </>
  );
}
export default Literature;
