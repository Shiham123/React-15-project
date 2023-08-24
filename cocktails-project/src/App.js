import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Navbar from './components/navbar';
import About from './pages/about';
import Error from './pages/error';
import SingleCocktails from './pages/SingleCocktail';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/single" element={<SingleCocktails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
