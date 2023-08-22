import React, { Fragment, useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';

const Home = () => {
  const { openSidebar, modalOpen } = useContext(AppContext);

  return (
    <Fragment>
      <main>
        <button className="sidebar-toggle" onClick={openSidebar}>
          <FaBars />
        </button>
        <button className="btn" onClick={modalOpen}>
          show-modal
        </button>
      </main>
    </Fragment>
  );
};

export default Home;
