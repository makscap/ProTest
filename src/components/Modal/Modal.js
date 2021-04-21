import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeydown);
  }

  // handleClick = e => {
  //   e.preventDefault();
  //   this.props.onClose();
  // }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.modalBackdrop} onClick={this.handleBackdropClick}>
        <div className={s.modalContent}>
          {this.props.children}
          <button
            type="button"
            data-action="close-modal"
            className={s.close}
            onClick={() => {
              this.props.onClose();
            }}
          ></button>
        </div>
      </div>,
      modalRoot,
    );
  }
}
