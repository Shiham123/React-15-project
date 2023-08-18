import React, { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [personIndex, setPersonIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (personIndex < 0) {
      setPersonIndex(lastIndex);
    }
    if (personIndex > lastIndex) {
      setPersonIndex(0);
    }
  }, [personIndex, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setPersonIndex(personIndex + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [personIndex]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, index) => {
          const { id, image, title, quote, name } = person;
          let position = 'nextSlide';

          if (personIndex === index) {
            position = 'activeSlide';
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length)
          ) {
            position = 'lastSlide';
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            setPersonIndex(personIndex - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            setPersonIndex(personIndex + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
