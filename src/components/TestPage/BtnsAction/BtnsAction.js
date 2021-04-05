import s from './BtnsAction.module.css';
import { ReactComponent as Arrow } from '../img/arrow.svg';

export default function BtnAction({
  updateNumber,
  testLength,
  numberQuestion,
}) {
  const handleQuestionChange = action => {
    if (action === 'next' && numberQuestion + 1 < testLength) {
      updateNumber(numberQuestion + 1);
    }
    if (action === 'prev' && numberQuestion !== 0) {
      updateNumber(numberQuestion - 1);
    }
  };
  console.log(testLength);
  console.log(numberQuestion);

  return (
    <div className={s.buttons}>
      <button
        type="button"
        className={s.prevBtn}
        disabled={numberQuestion === 0}
        onClick={() => handleQuestionChange('prev')}
      >
        <p className={s.btnText}>Previous question</p>
        <Arrow className={s.prevArrow} />
      </button>

      <button
        type="button"
        className={s.nextBtn}
        disabled={numberQuestion + 1 === testLength}
        onClick={() => handleQuestionChange('next')}
      >
        <p className={s.btnText}>Next question</p>
        <Arrow className={s.nextArrow} />
      </button>
    </div>
  );
}
