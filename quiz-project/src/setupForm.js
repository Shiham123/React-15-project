import React, { useContext } from 'react';
import { AppContext } from './context';

const SetupForm = () => {
  const { handleSubmit, handleChange, quiz, error } = useContext(AppContext);
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Setup quiz</h2>
          {/* Amount */}

          <div className="form-control">
            <label htmlFor="amount">Number of Question</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.value}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>

          {/* Category */}

          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports">Sports</option>
              <option value="history">history</option>
              <option value="politics">Politics</option>
            </select>
          </div>

          {/* difficulty */}

          <div className="form-control">
            <label htmlFor="difficulty">Select Difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              can't generate questions, please try different options
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            Start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
