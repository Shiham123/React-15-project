import React, { Fragment, useState } from 'react';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
    } catch (error) {
      setError(true);
      console.log(error.message);
    }
  };
  return (
    <Fragment>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
            className={`${error ? 'error' : null}`}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>List goes here</h4>
      </section>
    </Fragment>
  );
}

export default App;
