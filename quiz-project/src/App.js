import React, { useContext, useEffect } from 'react';
import { AppContext } from './context';
import Loading from './loading';
import SetupForm from './setupForm';

function App() {
  const { correct, waiting, loading, question, error } = useContext(AppContext);

  if (waiting) return <SetupForm />;

  if (loading) return <Loading />;

  return (
    <main>
      <section className="quiz">
        <p className="correct-answer">This is correct index</p>
        <article className="container">
          <h2>Question</h2>
          <div className="btn-container">this is btn container</div>
        </article>
        <button className="next-question">Next question</button>
      </section>
    </main>
  );
}

export default App;
