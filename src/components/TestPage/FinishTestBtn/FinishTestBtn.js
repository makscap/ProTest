import React, { Component } from 'react';
import s from './FinishTestBtn.module.css';

export default class FinishTestBtn extends Component {
  render() {
    return (
      <button type="button" className={s.finishBtn}>
        Finish test
      </button>
    );
  }
}
