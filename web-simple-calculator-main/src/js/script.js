class Calculator {
  // Default values
  constructor() {
    this._num1 = 0;
    this._num2 = 0;
    this._operation = 'add';
  }

  // Setters and Getters
  set num1(value) {
    this._num1 = value;
  }

  get num1() {
    return this._num1;
  }

  set num2(value) {
    this._num2 = value;
  }

  get num2() {
    return this._num2;
  }

  set operation(value) {
    this._operation = value;
  }

  get operation() {
    return this._operation;
  }

  calculate() {
    let result;
    switch (this._operation) {
      case 'add':
        result = this._num1 + this._num2;
        break;
      case 'subtract':
        result = this._num1 - this._num2;
        break;
      case 'multiply':
        result = this._num1 * this._num2;
        break;
      case 'divide':
        result = this._num2 !== 0 ? this._num1 / this._num2 : 'Error: Division by zero';
        break;
      default:
        result = 'Uhh idk fam 🗿';
    }
    // check if result is empty or undefined
    if (result === '' || result === undefined) {
      return 'Uhh idk fam 🗿';
    } else if (result === 0) {
      return `It's a number between negative one and one, guess what? It's 0!`;
    } else if (result === 'Error: Division by zero') {
      return `Error: Mikir kids, masa dibagi 0 :\/`;
    }
    return `${result} 👍`;
  }
}

// "The calculator" brain starts here
const calc = new Calculator();

// Get DOM elements from HTML
const num1Input = document.getElementById('number1');
const num2Input = document.getElementById('number2');
const operationSelect = document.getElementById('operation');
const calculateBtn = document.getElementById('calculateBtn');
const resultP = document.getElementById('result');

// Add event listener to the "calculate" button
calculateBtn.addEventListener('click', () => {
  // Set values from user inputs
  calc.num1 = parseFloat(num1Input.value) || 0;
  calc.num2 = parseFloat(num2Input.value) || 0;
  calc.operation = operationSelect.value;

  // Calculate and display da result
  const result = calc.calculate();
  resultP.textContent = result;
});