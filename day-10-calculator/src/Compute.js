export function evaluate(firstNum, secondNum, operator) {
  const first = Number(firstNum);
  const second = Number(secondNum);

  const operators = {
    '+': first + second,
    '-': second - first,
    '/': first / second,
    '*': first * second,
    null: first,
  };

  return operators[operator];
}

export function isOperator(input) {
  switch (input) {
    case '+':
      // code block
      return true;
    case '-':
      // code block
      return true;
    case '*':
      // code block
      return true;
    case '/':
      // code block
      return true;
    default:
      // code block
      return false;
  }
}

export function isNumeric(input) {
  if (typeof input != 'string') return false; // we only process strings!
  return (
    !isNaN(input) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(input))
  ); // ...and ensure strings of whitespace fail
}

export function isOutputTooLong(input) {
  return input.length >= 11 ? true : false;
}
