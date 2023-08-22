import React, { Fragment, useContext } from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { AppContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext);
  return (
    <Fragment>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <img src={logo} alt="Logo" className="logo" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>

        <ul className="links">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id} href={url}>
                {text}
                {icon}
              </li>
            );
          })}
        </ul>

        <ul className="social-icons">
          {social.map((icons) => {
            const { id, url, icon } = icons;
            return (
              <li key={id} href={url}>
                {icon}
              </li>
            );
          })}
        </ul>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
