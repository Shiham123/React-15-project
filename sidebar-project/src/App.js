import React, { Fragment } from 'react';
import Home from './home';
import Modal from './modal';
import Sidebar from './sidebar';

function App() {
  return (
    <Fragment>
      <Home />
      <Modal />
      <Sidebar />
    </Fragment>
  );
}

export default App;
