import React, { Component } from 'react';
import s from './BtnsAction.module.css';
import { ReactComponent as Arrow } from '../img/arrow.svg';

export default class BtnAction extends Component {
  render() {
    return (
      <div className={s.buttons}>
        <button type="button" className={s.prevBtn}>
          <p className={s.btnText}>Previous question</p>
          <Arrow className={s.prevArrow} />
        </button>
        <button type="button" className={s.nextBtn}>
          <p className={s.btnText}>Next question</p>
          <Arrow className={s.nextArrow} />
        </button>
      </div>
    );
  }
}
