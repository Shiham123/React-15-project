import React, { Fragment, useContext } from 'react';
import logo from './img/logo.svg';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useContext(AppContext);

  const displaySubmenu = (event) => {
    const page = event.target.textContent;

    const tempBtn = event.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (event) => {
    if (!event.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  return (
    <Fragment>
      <nav className="nav" onMouseOver={handleSubmenu}>
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
                products
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                developers
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                company
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
