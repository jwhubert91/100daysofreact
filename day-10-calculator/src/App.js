import React from 'react';
import Calculator from './Calculator';
import { isNumeric, isOperator, isOutputTooLong, evaluate } from './Compute';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      output: '0',
    };
    this.firstNum = '0';
    this.secondNum = null;
    this.operator = null;
    this.handleInput = this.handleInput.bind(this);
    this.clearCalc = this.clearCalc.bind(this);
  }

  clearCalc() {
    this.firstNum = '0';
    this.secondNum = null;
    this.operator = null;
    this.setState({ output: '0' });
  }

  handleInput(e) {
    const { value } = e.target;
    const firstNum = this.firstNum;
    const secondNum = this.secondNum;
    const operator = this.operator;

    // if operator
    if (isOperator(value)) {
      if (this.secondNum) {
        // performing arithmetic on result
        const firstResult = evaluate(firstNum, secondNum, operator);
        this.firstNum = firstResult;
        this.secondNum = null;
        this.setState({ output: firstResult });
        this.operator = value;
        return;
      } else {
        this.operator = value;
        return;
      }
    }
    // if equals then evaluate
    if (value === '=') {
      const returnValue = evaluate(firstNum, secondNum, operator);
      this.setState({
        output: String(returnValue),
      });
      this.firstNum = '0';
      this.operator = null;
      this.secondNum = null;
      return;
    }
    // if percent then evaluate
    if (value === '%') {
    }
    // if clear then clear both numbers and operator
    if (value === 'clear') {
      this.clearCalc();
      return;
    }
    // check if input is number or decimal
    if (isNumeric(value) || value === '.') {
      // if output is too long do nothing
      if (isOutputTooLong(this.state.output)) return;
      if (operator === null) {
        // firstNum
        this.firstNum = firstNum === '0' ? value : firstNum + value;
        this.setState({ output: this.firstNum });
      } else {
        // secondNum
        this.secondNum = secondNum === null ? value : firstNum + value;
        this.setState({ output: this.secondNum });
      }
      return;
    }
    // if delete then remove last number
    if (value === 'delete') {
      if (operator) {
        // modify second num
        this.secondNum = secondNum.slice(0, -1);
        this.setState({ output: this.secondNum });
      } else {
        // modify first num
        this.firstNum = firstNum.slice(0, -1);
        this.setState({ output: this.firstNum });
      }
    }

    // if sign change sign
  }

  render() {
    return (
      <div className='App'>
        <Calculator data={this.state} buttonHandler={this.handleInput} />
      </div>
    );
  }
}

export default App;
