#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+): Add two numbers
 * - Subtraction (-): Subtract one number from another
 * - Multiplication (*): Multiply two numbers
 * - Division (/): Divide one number by another
 * 
 * Usage: node calculator.js <number1> <operator> <number2>
 * Example: node calculator.js 10 + 5
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

function calculator(num1, operator, num2) {
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid input: Both arguments must be numbers');
  }

  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error(`Unknown operator: ${operator}. Supported operators are: +, -, *, /`);
  }
}

module.exports = { add, subtract, multiply, divide, calculator };

if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('Supported operators: + (addition), - (subtraction), * (multiplication), / (division)');
    console.error('Examples:');
    console.error('  node calculator.js 10 + 5');
    console.error('  node calculator.js 20 - 8');
    console.error('  node calculator.js 6 "*" 7');
    console.error('  node calculator.js 100 / 4');
    process.exit(1);
  }

  try {
    const result = calculator(args[0], args[1], args[2]);
    console.log(`${args[0]} ${args[1]} ${args[2]} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
