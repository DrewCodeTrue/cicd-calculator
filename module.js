const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentNumber = '';
let previousNumber = '';
let operation = '';

/**
 * function handleButtonPress
 * обработчик нажатия клавиш
 * @param {any} event - event.
 */

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
        const result = calculateResult(previousNumber, operation, currentNumber);
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

/**
 * function calculateResult
 * @param {number} previousNum - Первое число.
 * @param {string} operation - Знак операции.
 * @param {number} currentNum - Первое число.
 * @returns {number} Результат вычисления.
 */

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

buttons.forEach(button => button.addEventListener('click', handleButtonPress));

export {handleButtonPress, calculateResult}