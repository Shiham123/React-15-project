import React from 'react';
import CocktailList from '../components/cocktailList';
import SearchForm from '../components/searchForm';

export default function Home() {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
}
