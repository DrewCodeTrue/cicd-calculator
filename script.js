const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentNumber = '';
let previousNumber = '';
let operation = '';

function handleButtonPress(event) {
    const button = event.target;
    const value = button.textContent;

    if (!isNaN(value)) {
        currentNumber += value;
        display.value = currentNumber;
    }

    if (['+', '-', '*', '/'].includes(value)) {
        operation = value;
        previousNumber = currentNumber;
        currentNumber = '';
    }

    if (value === '=') {
        const result = calculateResult(previousNumber,currentNumber);
        display.value = result;
        currentNumber = result.toString();
        previousNumber = '';
        operation = '';
    }

    if (value === 'C') {
        currentNumber = '';
        previousNumber = '';
        operation = '';
        display.value = '';
    }

    if (value === '←') {
        currentNumber = currentNumber.slice(0, -1);
        display.value = currentNumber;
    }
}

function calculateResult(previousNum, currentNum) {
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

buttons.forEach(button => button.addEventListener('click', handleButtonPress));

// for tests
// module.exports({calculateResult});
// export {calculateResult}