import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Diagram from '../Diagram';
import catImg from './img/cat.png';

import s from './ResultPage.module.css';

export default function ResultPage() {
  const location = useLocation();
  const history = useHistory();
  const { result, totalQuestions, testName } = location.state;

  const tryAgain = () => {
    history.push({
      pathname: '/test',
      state: {
        testName,
      },
    });
  };

  const raiting = () => {
    const percentValue = result / (totalQuestions / 100);
    if (percentValue <= 50) {
      return {
        short: 'Very bad!',
        full: 'You need spend more time for learn materials.',
      };
    }

    if (percentValue > 50 && percentValue <= 80) {
      return {
        short: 'Not bad!',
        full: 'But you still need to learn some materials.',
      };
    }

    if (percentValue > 80) {
      return {
        short: 'Excellent',
        full: "You're awesome! Your result is very good.",
      };
    }
  };

  return (
    <div className={s.result}>
      <h1 className={s.resultHeading}>Results</h1>
      <p className={s.testName}>[ {testName}_]</p>
      <div className={s.horizontalLine}></div>
      <div className={s.diagram}>
        <Diagram rightAnswer={result} totalQuestions={totalQuestions} />
      </div>
      <div className={s.textResult}>
        <p>Correct answers - {result}</p>
        <p>Total questions - {totalQuestions}</p>
      </div>
      <div className={s.other}>
        <img src={catImg} alt="cat" className={s.cat} />
        <p className={s.shortResult}>{raiting().short}</p>
        <p className={s.fullResult}>{raiting().full}</p>
      </div>
      <div>
        <button className={s.tryAgain} onClick={tryAgain}>
          Try again
        </button>
      </div>
    </div>
  );
}
