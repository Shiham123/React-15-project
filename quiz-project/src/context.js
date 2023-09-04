import React, { useState } from 'react';
import axios from 'axios';

const apiEndpoint = 'https://opentdb.com/api.php?';

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [correct, setCorrect] = useState(0);
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy',
  });

  const fetchQuestion = async (url) => {
    setLoading(true);
    setWaiting(false);

    const response = await axios(url).catch((error) => console.log(error));

    if (response) {
      const data = response.data.results;

      if (data.length > 0) {
        setQuestion(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };

  const handleChange = (event) => {
    const name = event.target.value;
    const value = event.target.value;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { amount, category, difficulty } = quiz;
    const url = `${apiEndpoint}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple}`;
    fetchQuestion(url);
  };

  return (
    <AppContext.Provider
      value={{
        correct,
        waiting,
        loading,
        question,
        error,
        quiz,
        handleSubmit,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
