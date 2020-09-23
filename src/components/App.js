import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import Calculate from '../logic/calculate';

function App() {
  return (
    <div className="calculator">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
