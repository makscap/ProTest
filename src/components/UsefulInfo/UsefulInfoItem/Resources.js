import React from 'react';
import s from '../Useful-info.module.css';
function Resources({ id, name, url }) {
  return (
    <>
      <a className={s.linkResource} href={url} target="blank">
        {id}
        <span>. </span>
        {name}
      </a>
    </>
  );
}
export default Resources;
