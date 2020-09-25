import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const n1 = Big(numberOne);
  const n2 = Big(numberTwo);

  switch (operation) {
    case '+':
      return (n1.plus(n2)).toString();
    case '-':
      return (n1.minus(n2)).toString();
    case 'X':
      return (n1.times(n2)).toString();
    case '÷':
      if (n2.toString() === 0) {
        return 'Undefined';
      }
      return (n1.div(n2)).toString();
    case '%':
      return n2 === 0 ? 'Undefined' : n1.times(n2).div(100).toString();
    case '+/-':
      return n1.times(-1).toString();
    default:
      return 'Undefined';
  }
};

export default Operate;
