import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = Big(numberOne || '0');
  const numTwo = Big(numberTwo || '0');
  const minusOne = Big(-1);

  switch (operation) {
    case '+':
      return numOne.plus(numTwo).toNumber();
    case '-':
      return numOne.minus(numTwo).toNumber();
    case 'X':
      return numOne.times(numTwo).toNumber();
    case '÷':
      if (numberTwo === '0') {
        return 'Cannot divide by 0';
      }
      return numOne.div(numTwo).toNumber();
    case '%':
      return numOne.times(Big(0.01)).toNumber();
    case '+/-':
      return numOne.times(minusOne).toNumber();
    default:
      return -1;
  }
};

export default operate;
