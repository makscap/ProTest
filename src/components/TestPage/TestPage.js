import { useLocation } from 'react-router-dom';
import TestName from './TestName';
import FinishTestBtn from './FinishTestBtn';
import BtnsAction from './BtnsAction';
import Test from './Test';
import s from './TestPage.module.css';

export default function TestPage() {
  const location = useLocation();

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <TestName testName={location.state.test} />
        <FinishTestBtn />
      </div>
      <div>
        <Test testName={location.state.test} />
      </div>
      <div>
        <BtnsAction />
      </div>
    </div>
  );
}
