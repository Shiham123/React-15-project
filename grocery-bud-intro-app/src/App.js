import React, { Fragment, useState } from 'react';
import List from './list';
import Alert from './alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter a value');
    } else if (name && editing) {
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  return (
    <Fragment>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert && <Alert {...alert} removeAlert={showAlert} />}
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
              {editing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>

        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list} />
            <button className="clear-btn">Clear items</button>
          </div>
        )}
      </section>
    </Fragment>
  );
}

export default App;
