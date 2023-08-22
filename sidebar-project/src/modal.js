import React, { Fragment } from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
  return (
    <Fragment>
      <div className="modal-overlay">
        <div className="modal-container">
          <h3>Modal content</h3>
          <button className="close-modal-btn">
            <FaTimes />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
