import React, { useEffect, useState } from 'react';
import Loading from './loading';
import Tours from './tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours</h2>
          <button className="btn" onClick={fetchData}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  );
}

export default App;
