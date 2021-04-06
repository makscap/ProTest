import React, { Component } from 'react';
import s from './TestName.module.css';

export default class TestName extends Component {
  render() {
        return <div className={s.testName}>{`[ ${this.props.testName}_ ]`}</div>;
  }
}

