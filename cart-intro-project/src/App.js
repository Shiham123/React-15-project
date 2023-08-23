import React, { Fragment } from 'react';
import Navbar from './navbar';
import CartContainer from './cartContainer';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <CartContainer />
    </Fragment>
  );
};

export default App;
