import React, { useContext } from 'react';
import phoneImg from './img/phone.svg';
import { AppContext } from './context';

const Hero = () => {
  const data = useContext(AppContext);
  return <div>Hero</div>;
};

export default Hero;
