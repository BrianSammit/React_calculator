import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <Display />
      <ButtonPanel calculate={calculate} />
    </>
  );
}

export default App;
