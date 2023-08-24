import React, { useContext } from 'react';
import { AppContext } from '../context';

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useContext(AppContext);
  return <div>SearchForm </div>;
};

export default SearchForm;
