import React, { useContext } from 'react';
import CartContainer from './cartContainer';
import Navbar from './navbar';
import { AppContext } from './context';

function App() {
  const { loading } = useContext(AppContext);
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
