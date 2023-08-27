import React, { useEffect, useState } from 'react';
import { useFetch } from './fetchData';

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page, data]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className="underline"></div>
        <div className="followers">
          <div className="container">
            {followers.map((follower) => console.log(follower))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
