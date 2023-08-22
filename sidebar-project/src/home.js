import React, { Fragment } from 'react';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  return (
    <Fragment>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">show-modal</button>
    </Fragment>
  );
};

export default Home;
