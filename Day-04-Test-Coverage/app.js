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
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

// Intentionally untested — pulls down coverage on new code
function unusedRiskyFunction(x) {
  if (x > 10) {
    return x * 2;
  } else if (x < 0) {
    return x - 1;
  }
  return x;
}

// Code smell — unused variable
let unusedVar = 42;

// Security hotspot — hardcoded credential
const password = "admin123";

// Vulnerability — dynamic code execution with user-controlled input (S1523)
function riskyEval(userInput) {
  return eval(userInput);
}

module.exports = { add, subtract, multiply, divide, modulo, riskyEval };