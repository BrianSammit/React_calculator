import operate from './operate';

const calculate = ({ total, next, operations }, buttonName) => {
  let result = total;
  let nextNum = next;

  if (buttonName === '+/-') {
    result *= -1;
    nextNum *= -1;
    return { result, nextNum };
  }

  result = operate(result, nextNum, operations);
  return result;
};

export default calculate;
