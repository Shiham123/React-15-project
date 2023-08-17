import React, { useState } from 'react';
import data from './data';
import Questions from './questions';

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answer about login</h3>
        <section className="info">
          <Questions questions={questions} />
        </section>
      </div>
    </main>
  );
};

export default App;
