import React, { useContext } from 'react';
import { AppContext } from '../context';
import Loading from './loading';
import Cocktail from './cocktail';

const CocktailList = () => {
  const { loading, cocktails } = useContext(AppContext);

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h2 className="section-title">No cocktails match your search</h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
