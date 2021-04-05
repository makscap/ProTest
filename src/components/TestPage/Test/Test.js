import s from './Test.module.css';

export default function Test({ test, testNumber, testLength }) {
  console.log(test);
  const { question, answers } = test;
  return (
    <div className={s.test}>
      <p className={s.number}>
        Question&nbsp;
        <span className={s.currentNumber}>{testNumber + 1}&nbsp;</span> /{' '}
        {testLength}
      </p>
      <p className={s.question}>{question}</p>
      <ul className={s.answers}>
        {answers.map((item, index) => (
          <li key={index} className={s.option}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
