import React from 'react';
import Review from './review';

const App = () => {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>our review</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </div>
    </main>
  );
};

export default App;
