import React from 'react';
import Resources from './UsefulInfoItem/Resources';
import Literature from './UsefulInfoItem/Literature';
import s from './Useful-info.module.css';

function UsefulInfo({ literature, resources }) {
  return (
    <div className={s.section}>
      <div className={s.literature}>
        <h2 className={s.backlink}> Useful literature</h2>
        <ol className={s.usefulInfo}>
          {literature.map(({ id, name, url }) => (
            <li className={s.materials} key={id}>
              <Literature id={id} name={name} url={url} />
            </li>
          ))}
        </ol>
      </div>
      <div className={s.resources}>
        <h2 className={s.backlink}> Useful resources</h2>
        <ol className={s.usefulInfo}>
          {resources.map(({ id, name, url }) => (
            <li className={s.materials} key={id}>
              <Resources id={id} name={name} url={url} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default UsefulInfo;
