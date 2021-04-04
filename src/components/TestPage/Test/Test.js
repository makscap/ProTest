import React, { Component } from 'react';
import s from './Test.module.css';

export default class Test extends Component {
  render() {
    return (
      <div className={s.test}>
        <p className={s.number}>
          Question&nbsp;<span className={s.currentNumber}>3&nbsp;</span> / 12
        </p>
        <p className={s.question}>What is regression testing?</p>
        <ul className={s.answers}>
          <li className={s.option}>
            This is testing of the main functionality of the application
          </li>
          <li className={s.option}>Testing a single function</li>
          <li className={s.option}>Requirements testing</li>
          <li className={s.option}>
            Tests on already tested areas of the application
          </li>
          <li className={s.option}>
            One of the types of testing aimed at checking the conformity of the
            functional requirements of the software to its real characteristics
          </li>
          <li className={s.defaultOption}>I don’t know</li>
        </ul>
      </div>
    );
  }
}
