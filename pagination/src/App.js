import React from 'react';
import { useFetch } from './fetchData';

function App() {
  const { loading, data } = useFetch();

  return <main>app</main>;
}

export default App;
