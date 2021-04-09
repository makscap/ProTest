import s from './FinishTestBtn.module.css';

export default function FinishTestBtn() {
  const finishTest = () => {
    const result = window.confirm(
      'Вы действительно хотите закончить выполнения теста и получить результаты?',
    );
    if (!result) return;
  };

  return (
    <button type="button" className={s.finishBtn} onClick={finishTest}>
      Finish test
    </button>
  );
}
