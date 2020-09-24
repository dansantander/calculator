import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const n1 = Big(numberOne);
  const n2 = Big(numberTwo);

  switch (operation) {
    case '+':
      return (n1.plus(n2));
    case '-':
      return (n1.minus(n2));
    case 'x':
      return (n1.times(n2));
    case '÷':
      if (n2 === 0) {
        return 'Undefined';
      }
      return (n1.div(n2));
    case '%':
      if (n2 === '0') {
        return 'Undefined';
      }
      return (n1.div(n2) / 100);
    case '+/-':
      return n1.times(-1);
    default:
      return 'Undefined';
  }
};

export default Operate;
