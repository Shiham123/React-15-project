import React, { useContext } from 'react';
import { AppContext } from './context';

const Submenu = () => {
  const { isSubmenuOpen } = useContext(AppContext);
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}>
      Submenu
    </aside>
  );
};

export default Submenu;
