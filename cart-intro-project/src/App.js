import React, { Fragment, useContext } from 'react';
import Navbar from './navbar';
import CartContainer from './cartContainer';
import { AppContext } from './context';

const App = () => {
  const { loading } = useContext(AppContext);
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Fragment>
      <Navbar />
      <CartContainer />
    </Fragment>
  );
};

export default App;
