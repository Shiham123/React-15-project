import React from 'react';
import SingleQuestion from './question';

const Questions = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </div>
  );
};

export default Questions;
