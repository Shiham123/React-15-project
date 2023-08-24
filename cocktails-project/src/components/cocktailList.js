import React, { useContext } from 'react';
import { AppContext } from '../context';
import Loading from './loading';

const CocktailList = () => {
  const { loading, cocktails } = useContext(AppContext);

  if (loading) {
    return <Loading />;
  }

  return <div></div>;
};

export default CocktailList;
