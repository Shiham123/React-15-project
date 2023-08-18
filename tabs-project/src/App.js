import React, { Fragment, useEffect, useState } from 'react';
import Loading from './loading';
import Jobs from './jobs';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading)
    return (
      <Fragment>
        <Loading />
      </Fragment>
    );

  return <Fragment>{jobs && <Jobs value={value} jobs={jobs} />}</Fragment>;
}

export default App;
