import React, { Fragment } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = (props) => {
  const { items, removeItem, editItem } = props;
  return (
    <Fragment>
      <div className="grocery-list">
        {items.map((item) => {
          const { id, title } = item;
          return (
            <article key={id} className="grocery-item">
              <p className="title">{title}</p>
              <div className="btn-container">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => {
                    editItem(id);
                  }}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => {
                    removeItem(id);
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </Fragment>
  );
};

export default List;
