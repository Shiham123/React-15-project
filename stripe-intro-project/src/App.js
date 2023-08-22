import React, { Fragment } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Hero from './hero';
import Submenu from './submenu';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </Fragment>
  );
}

export default App;
