import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/loading';
const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const SingleCocktails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) return <Loading />;

  if (!cocktail) return <div>Cocktail not found</div>;

  return <div>{id}</div>;
};

export default SingleCocktails;
