import s from './Test.module.css';

export default function Test({
  question,
  testNumber,
  testLength,
  userСhoice,
  setUserСhoice,
}) {
  const addAnswer = e => {
    setUserСhoice({ ...userСhoice, [testNumber]: e.target.value });
  };

  const { question: textQuestion, answers } = question;
  return (
    <div className={s.test}>
      <p className={s.number}>
        Question&nbsp;
        <span className={s.currentNumber}>{testNumber + 1}&nbsp;</span> /{' '}
        {testLength}
      </p>
      <p className={s.question}>{textQuestion}</p>
      <form className={s.answers}>
        {answers.map((item, index) => (
          <label key={index} className={s.option}>
            <input
              type="radio"
              name="answer"
              value={item}
              onChange={addAnswer}
              checked={userСhoice[testNumber] === item}
              className={s.input}
            />

            <span className={s.item}> {item}</span>
          </label>
        ))}
      </form>
    </div>
  );
}
