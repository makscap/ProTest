import React, { Component } from 'react';
import s from './TestName.module.css';

export default class TestName extends Component {
  render() {
    let testName = '';
    console.log(this.props);

    if (this.props.testName === 'theory') {
      testName = '[ Testing theory_ ]';
    }

    if (this.props.testName === 'technical') {
      testName = '[ QA technical training_ ]';
    }
    return <div className={s.testName}>{testName}</div>;
  }
}
