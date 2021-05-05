import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import s from './FinishTestBtn.module.css';

export default class FinishTestBtn extends Component {
state = {
  showModal: false,
  showResult: false,
}

toggleModal = () => {
  this.setState(state => ({
    showModal: !state.showModal,
  }));
};

finishTest = () => {
  this.setState(state => ({
    showResult: !state.showResult,
  }));
};

render() {
  const { showModal, showResult } = this.state;

  return (
    <div>
    <button type="button" className={s.finishBtn} onClick={this.toggleModal}>
      Finish test
    </button>

    {showModal && (
      <Modal onClose={this.toggleModal}>
       <div className={s.modalText}>
         <h2 className={s.title}>Are you sure you want to finish the test?</h2>
         <h3 className={s.text}>Your result will be lost</h3>
         <div className={s.modalButtons}>
         <NavLink to="/" >
         <button type="button" className={s.button}>Exit</button>
         </NavLink>
         <NavLink to="/results" onClick={showResult}>
         <button type="button" className={s.buttonResult}>Show result</button>
         </NavLink>
         </div>
       </div>
      </Modal>
    )}

</div>
  );
    }
}

  // const finishTest = () => {
    
  //   if (!result) return;
  //   showResult();
  // };

  // return (
  //   <button type="button" className={s.finishBtn} onClick={toggleModal}>
  //     Finish test
  //   </button>
  // );

