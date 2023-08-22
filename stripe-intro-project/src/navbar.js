import React, { Fragment, useContext } from 'react';
import logo from './img/logo.svg';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useContext(AppContext);
  const displaySubmenu = (event) => {
    openSubmenu();
  };

  return (
    <Fragment>
      <nav className="nav">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="logo" />
            <button className="btn toggle-btn" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                product
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Developer
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Company
              </button>
            </li>
          </ul>
          <button className="btn signIn-btn">Sign In</button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
