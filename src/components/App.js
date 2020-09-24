import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    console.log(this.state);
  }

  render() {
  //  const { next, total } = this.state;

    return(
      <div className='calculator'>
        <Display />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
}

export default App;
