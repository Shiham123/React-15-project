import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from './context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useContext(AppContext);

  const [columns, setColumns] = useState('col-2');
  const container = useRef(null);

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns('col-3');
    }

    if (links.length === 4) {
      setColumns('col-4');
    }
  }, [location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <p key={index} href={url}>
              {icon}
              {label}
            </p>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
