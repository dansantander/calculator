import React from 'react';
import './App.css';
import Big from 'big.js';
import PropTypes from 'prop-types';

const testBig = new Big('4.321e+4');
const bigMsg = `New Big('4.321e+4') is: ${testBig}`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Initial Text :)<br/>
          {bigMsg}
        </p>
      </header>
    </div>
  );
}

export default App;
