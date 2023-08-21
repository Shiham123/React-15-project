import React, { Fragment, useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    if (linksRef.current) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;

      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = '0px';
      }
    }
  }, [showLinks]);

  return (
    <Fragment>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="Logo" />
            <button
              className="nav-toggle"
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            >
              <FaBars />
            </button>
          </div>
          {showLinks && (
            <div className="links-container" ref={linksContainerRef}>
              <ul className="links" ref={linksRef}>
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id} href={url}>
                      {text}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          <ul className="social-icons">
            {social.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id} href={url}>
                  {icon}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
