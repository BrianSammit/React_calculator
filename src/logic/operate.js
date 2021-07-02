import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);
  let result = new Big();

  switch (operation) {
    case '+':
      result = numOne.plus(numTwo);
      break;
    case '-':
      result = numOne.minus(numTwo);
      break;
    case 'X':
      result = numOne.times(numTwo);
      break;
    case '÷':
      result = numOne.div(numTwo);
      break;
    case '%':
      result = numOne.times(Big(0.01));
      break;
    default:
      return `'Unknown operation '${operation}'`;
  }

  return result;
};

export default operate;
