import React, { Fragment, useState } from 'react';
import List from './list';
import Alert from './alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditId, setIsEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter a value');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === isEditId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setIsEditId(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'item is added');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, 'danger', 'all item cleared');
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setIsEditId(id);
    setName(specificItem.title);
  };

  return (
    <Fragment>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert && <Alert {...alert} removeAlert={showAlert} list={list} />}
          <h3>Grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="type"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>

        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={clearList}>
              Clear items
            </button>
          </div>
        )}
      </section>
    </Fragment>
  );
}

export default App;
