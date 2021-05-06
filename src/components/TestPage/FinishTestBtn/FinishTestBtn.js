import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import s from './FinishTestBtn.module.css';
import {Trans } from 'react-i18next';

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
          <Trans i18nKey="testing-finishBtn"></Trans>
    </button>

    {showModal && (
      <Modal onClose={this.toggleModal}>
       <div className={s.modalText}>
         <h2 className={s.title}><Trans i18nKey="modal-title"></Trans></h2>
         <h3 className={s.text}><Trans i18nKey="modal-text"></Trans></h3>
         <NavLink to="/" >
         <button type="button" className={s.button}><Trans i18nKey="modal-exitBtn"></Trans></button>
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

