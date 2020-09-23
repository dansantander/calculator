import Operate from './operate';

const Calculate = (calculator, buttonName) => {
  const { total, next, operation } = calculator;

  if (String(buttonName).match(/[0-9]/)) {
    if (operation) {
      return { total, next: next ? next + buttonName : buttonName, operation };
    }
    return { total: total ? total + buttonName : buttonName, next, operation };
  }

  if (buttonName === 'AC') {
    return { total: null, next: null, operation: null };
  }

  if (buttonName === '+/-') {
    return { total: total ? Operate(total, '-1', 'x') : null, next: next ? Operate(next, '-1', 'x') : null, operation };
  }

  if (buttonName === '.') {
    if (operation) {
      if (next) {
        return { total, next: next + buttonName, operation };
      }
      return { total, next: `0${buttonName}`, operation };
    }
    if (total) {
      return { total: total + buttonName, next, operation };
    }
    return { total: `0${buttonName}`, next, operation };
  }

  if (buttonName === '=') {
    return {
      total: next ? Operate(total, next, operation) : total,
      next: null,
      operation: null,
    };
  }

  if (operation) {
    return {
      total: Operate(total, next, operation),
      next: null,
      operation: Operate(total, next, operation) === 'Undefined' ? null : buttonName,
    };
  }

  return { total, next, operation };
};

export default Calculate;
