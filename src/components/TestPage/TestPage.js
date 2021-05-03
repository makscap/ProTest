import axios from 'axios';
import Spiner from '../Spiner/Spiner.js';
import { useLocation, useHistory } from 'react-router-dom';

import { useState } from 'react';
import TestName from './TestName';
import FinishTestBtn from './FinishTestBtn';
import BtnsAction from './BtnsAction';
import Test from './Test';
import s from './TestPage.module.css';
import technicalTest from './util/technicalTest.json';

export default function TestPage() {
  const history = useHistory();
  const location = useLocation();

  const [testNumber, setTestNumber] = useState(0);
  const [allQuestion, setAllQuestion] = useState(null);
  const [userСhoice, setUserСhoice] = useState({});

  const showResult = async () => {
    const userAnswers = [];

    for (const questionId in userСhoice) {
      userAnswers.push({
        questionId: Number(questionId),
        answer: userСhoice[questionId],
      });
    }

    const answersObject = {
      answers: userAnswers,
    };

    const url =
      location.state.testName === 'QA technical training'
        ? '/qa-test/tech-results'
        : '/qa-test/theory-results';

    console.log(url);

    console.log(answersObject);

    const result = await axios.post(url, answersObject);
    console.log(result.data.data);

    history.push({
      pathname: '/results',
      state: {
        testName: location.state.testName,
        result: result.data.data,
        totalQuestions: technicalTest.length,
      },
    });
  };

  if (
    location.state.testName === 'QA technical training' &&
    allQuestion === null
  ) {
    axios
      .get('/qa-test/tech')
      .then(data => data.data.data.techQuestions)
      .then(setAllQuestion);
  }

  if (location.state.testName === 'Testing theory' && allQuestion === null) {
    axios
      .get('/qa-test/theory')
      .then(data => data.data.data.theoryQuestions)
      .then(setAllQuestion);
  }

  if (allQuestion === null) {
    return <Spiner />;
  }

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <TestName testName={location.state.testName} />
        <FinishTestBtn showResult={showResult} />
      </div>
      <div>
        <Test
          question={allQuestion[testNumber]}
          testNumber={testNumber}
          testLength={allQuestion.length}
          userСhoice={userСhoice}
          setUserСhoice={setUserСhoice}
        />
      </div>
      <div>
        <BtnsAction
          updateNumber={setTestNumber}
          testLength={allQuestion.length}
          numberQuestion={testNumber}
        />
      </div>
    </div>
  );
}
