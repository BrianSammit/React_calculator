import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '',
      next: '',
      operation: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const result = calculate(this.state, buttonName);
    this.setState(() => result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <div className="calc">
          <h2>Let’s do some math!</h2>
          <div className="calculator">
            <Display total={total} next={next} operation={operation} />
            <ButtonPanel clickHandler={this.handleClick} />
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
