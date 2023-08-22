import React, { Fragment, useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AppContext } from './context';

const Modal = () => {
  const { isModalOpen, modalClose } = useContext(AppContext);
  return (
    <Fragment>
      <div
        className={`${
          isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <div className="modal-container">
          <h3>Modal content</h3>
          <button className="close-modal-btn" onClick={modalClose}>
            <FaTimes />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
