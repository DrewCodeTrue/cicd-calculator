function calculateResult(previousNum, operation, currentNum) {
  const num1 = parseFloat(previousNum);
  const num2 = parseFloat(currentNum);
  let result;

  switch (operation) {
      case '+':
          result = num1 + num2;
          break;
      case '-':
          result = num1 - num2;
          break;
      case '*':
          result = num1 * num2;
          break;
      case '/':
          result = num1 / num2;
          break;
      default:
          result = 0;
  }

  return result;
}

module.exports = {calculateResult};