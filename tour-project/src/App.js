import React from 'react';
import Loading from './loading';
import Tour from './tour';

const url = 'https://course-api.com/react-tours-project';

function App() {
  return (
    <>
      <Loading />
      <Tour />
      <h2>this is tour project</h2>
    </>
  );
}

export default App;
