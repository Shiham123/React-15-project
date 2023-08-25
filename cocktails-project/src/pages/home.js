import React from 'react';
import SearchForm from '../components/searchForm';
import CocktailList from '../components/cocktailList';

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
