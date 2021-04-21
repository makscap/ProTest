import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import s from './FinishTestBtn.module.css';

export default class FinishTestBtn extends Component {
state = {
  showModal: false,
}

toggleModal = () => {
  this.setState(state => ({
    showModal: !state.showModal,
  }));
};

render() {
  const { showModal } = this.state;

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
         <NavLink to="/" >
         <button type="button" className={s.button}>Exit</button>
         </NavLink>
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

