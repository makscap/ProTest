import s from './BtnsAction.module.css';
import { ReactComponent as Arrow } from '../img/arrow.svg';
import { useTranslation } from 'react-i18next';
import FinishTestBtn from '../FinishTestBtn';

export default function BtnAction({
  updateNumber,
  testLength,
  numberQuestion,
  showResult,
  testNumber,
}) {
  const { t } = useTranslation();
  const handleQuestionChange = action => {
    if (action === 'next' && numberQuestion + 1 < testLength) {
      updateNumber(numberQuestion + 1);
    }
    if (action === 'prev' && numberQuestion !== 0) {
      updateNumber(numberQuestion - 1);
    }
  };

  return (
    <div className={s.buttons}>
      {numberQuestion !== 0 && (
        <button
          type="button"
          className={s.prevBtn}
          onClick={() => handleQuestionChange('prev')}
        >
          <p className={s.btnText}>{t('testing-previousBtn')}</p>
          <Arrow className={s.prevArrow} />
        </button>
      )}
      {testNumber + 1 === testLength && (
        <FinishTestBtn showResult={showResult} />
      )}
      {numberQuestion + 1 !== testLength && (
        <button
          type="button"
          className={s.nextBtn}
          onClick={() => handleQuestionChange('next')}
        >
          <p className={s.btnText}>{t('testing-nextBtn')}</p>
          <Arrow className={s.nextArrow} />
        </button>
      )}
    </div>
  );
}
