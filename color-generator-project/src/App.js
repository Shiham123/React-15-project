import React, { Fragment, useState } from 'react';
import Values from 'values.js';
import SingleColor from './singleColor';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#121212').all(10));

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
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
        {list.map((color, index) => {
          const hex = color.hex;
          return (
            <SingleColor key={index} index={index} {...color} hexColor={hex} />
          );
        })}
      </section>
    </Fragment>
  );
}

export default App;
