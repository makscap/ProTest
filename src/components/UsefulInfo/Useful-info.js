import React, { Component } from 'react';

import s from './Useful-info.module.css';

export default class UsefulInfo extends Component {
  render() {
    return (
      <div className={s.section}>
        <h2 className={s.backlink}> Useful literature</h2>
        <ol className={s.usefulInfo}>
          <li className={s.materials}>Testing dot.com Savin.</li>
          <li className={s.materials}>
            A mental hospital in the hands of <br></br>
            patients.
          </li>
          <li className={s.materials}>Scrum. J. Sutherland.</li>
        </ol>
        <h2 className={s.backlink}> Useful resources</h2>
        <ol className={s.usefulInfo}>
          <li className={s.materials}>
            <a href="https://www.google.com/search?q=dou.ua&rlz=1C1CHBD_ruUA794UA794&oq=dou&aqs=chrome.1.69i57j35i39j0l4j0i433j0l3.5280j0j15&sourceid=chrome&ie=UTF-8">
              dou.ua
            </a>
          </li>
          <li className={s.materials}>
            <a href="https://habr.com/ru/">Habr</a>
          </li>
          <li className={s.materials}>
            <a href="https://www.facebook.com/qafest/">facebook.com/QA</a>
          </li>
          <li className={s.materials}>
            <a href="https://goit.ua/?lang=uk">goit.ua</a>
          </li>
        </ol>
      </div>
    );
  }
}
