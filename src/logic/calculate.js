import Big from 'big.js';
import Operate from './operate';

const calculate = (data, buttonName) => {
  function isNumber(item) {
    return /[0-9]+/.test(item);
  }

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && data.next === '0') {
      return {};
    }
    if (data.operation) {
      if (data.next) {
        return { next: data.next + buttonName };
      }
      return { next: buttonName };
    }
    if (data.next) {
      const next = data.next === '0' ? buttonName : data.next + buttonName;
      return {
        next,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '%') {
    if (data.operation && data.next) {
      const result = Operate(data.total, data.next, data.operation);
      return {
        total: Big(result).div(Big('100')).toString(),
        next: null,
        operation: null,
      };
    }
    if (data.next) {
      return {
        next: Big(data.next).div(Big('100')).toString(),
      };
    }
    return {};
  }

  if (buttonName === '.') {
    if (data.next) {
      if (data.next.includes('.')) {
        return {};
      }
      return { next: `${data.next}.` };
    }
    return { next: '0.' };
  }

  if (buttonName === '=') {
    if (data.next && data.operation) {
      return {
        total: Operate(data.total, data.next, data.operation),
        next: null,
        operation: null,
      };
    }
    return {};
  }

  if (buttonName === '+/-') {
    if (data.next) {
      return { next: (-1 * parseFloat(data.next)).toString() };
    }
    if (data.total) {
      return { total: (-1 * parseFloat(data.total)).toString() };
    }
    return {};
  }

  if (data.operation) {
    return {
      total: Operate(data.total, data.next, data.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (!data.next) {
    return { operation: buttonName };
  }

  return {
    total: data.next,
    next: null,
    operation: buttonName,
  };
};

export default calculate;
