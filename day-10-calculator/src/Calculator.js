import React from 'react';

function Calculator(props) {
  const { data, buttonHandler } = props;
  return (
    <div className='calculator-container'>
      <div className='output-container'>
        <span>{data.output}</span>
      </div>
      <div className='inputs-container'>
        {/* row 1 */}
        <button className='btn-gray' value='clear' onClick={buttonHandler}>
          C
        </button>
        <button className='btn-gray' value='sign' onClick={buttonHandler}>
          +/-
        </button>
        <button className='btn-gray' value='%' onClick={buttonHandler}>
          %
        </button>
        <button className='btn-orange' value='/' onClick={buttonHandler}>
          /
        </button>
        {/* row 2 */}
        <button value='7' onClick={buttonHandler}>
          7
        </button>
        <button value='8' onClick={buttonHandler}>
          8
        </button>
        <button value='9' onClick={buttonHandler}>
          9
        </button>
        <button className='btn-orange' value='*' onClick={buttonHandler}>
          X
        </button>
        {/* row 3 */}
        <button value='4' onClick={buttonHandler}>
          4
        </button>
        <button value='5' onClick={buttonHandler}>
          5
        </button>
        <button value='6' onClick={buttonHandler}>
          6
        </button>
        <button className='btn-orange' value='-' onClick={buttonHandler}>
          -
        </button>
        {/* row 4 */}
        <button value='3' onClick={buttonHandler}>
          3
        </button>
        <button value='2' onClick={buttonHandler}>
          2
        </button>
        <button value='1' onClick={buttonHandler}>
          1
        </button>
        <button className='btn-orange' value='+' onClick={buttonHandler}>
          +
        </button>
        {/* row 5 */}
        <button className='btn-bottom-left' value='0' onClick={buttonHandler}>
          0
        </button>
        <button value='.' onClick={buttonHandler}>
          .
        </button>
        <button value='delete' onClick={buttonHandler}>
          del
        </button>
        <button
          className='btn-redorange btn-bottom-right'
          value='='
          onClick={buttonHandler}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
