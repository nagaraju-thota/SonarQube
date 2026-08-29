function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };

// app.js — add this without any matching test
function unusedRiskyFunction(x) {
  if (x > 10) {
    return x * 2;
  } else if (x < 0) {
    return x - 1;
  }
  return x;
}


// existing code above...

const password = "admin123";
let unusedVar = 42;

// rest of your existing app.js code