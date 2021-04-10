import s from './FinishTestBtn.module.css';

export default function FinishTestBtn({ showResult }) {
  const finishTest = () => {
    const result = window.confirm(
      'Вы действительно хотите закончить выполнения теста и получить результаты?',
    );
    if (!result) return;
    showResult();
  };

  return (
    <button type="button" className={s.finishBtn} onClick={finishTest}>
      Finish test
    </button>
  );
}
