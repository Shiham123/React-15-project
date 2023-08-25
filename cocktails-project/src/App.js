import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/home';
import About from './pages/about';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/error';
// import components
import Navbar from './components/navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
