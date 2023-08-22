import React, { useContext } from 'react';
import logo from './img/logo.svg';
import { AppContext } from './context';

const Navbar = () => {
  const data = useContext(AppContext);
  return <div>Navbar</div>;
};

export default Navbar;
