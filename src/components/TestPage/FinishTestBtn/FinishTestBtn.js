import { useHistory } from 'react-router-dom';
import s from './FinishTestBtn.module.css';

export default function FinishTestBtn() {
  const history = useHistory();

  const finishTest = () => {
    const result = window.confirm(
      'Вы действительно хотите закончить выполнения теста и получить результаты?',
    );
    if (!result) return;

    history.push('/result');
  };

  return (
    <button type="button" className={s.finishBtn} onClick={finishTest}>
      Finish test
    </button>
  );
}
