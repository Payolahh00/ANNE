// This script creates a simple calculator that works with button clicks and keyboard input.

// Get the display element where the numbers and results will show.
const display = document.getElementById('display');

// Get all the button elements inside the .buttons div.
const buttons = document.querySelectorAll(".buttons button");

// This variable will hold the current mathematical expression as a string.
let expression = "";
  
// Function to update the display with the current expression or '0' if empty.
const updateDisplay = () => {
  display.textContent = expression || '0';
};

// Function to calculate the result of the expression using eval.
const calculate = () => {
  try {
    // Evaluate the expression and convert to string.
    expression = eval(expression).toString();
  } catch {
    // If there's an error (like invalid math), show "Error".
    expression = "Error";
  }
  // Update the display after calculation.
  updateDisplay();
};

// Add click event listeners to each button.
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Get the text content of the clicked button.
    const value = btn.textContent;

    // If it's the clear button 'C', reset the expression.
    if (value === "C") {
      expression = "";
    } else if (value === "=") {
      // If it's equals, calculate the result.
      calculate();
      return; // Stop here, don't add to expression.
    } else {
      // Otherwise, append the button's value to the expression.
      expression += value;
    }

    // Update the display after the action.
    updateDisplay();
  });
});

// Add keyboard support for typing numbers and operators.
document.addEventListener("keydown", e => {
  // If the key is a number or allowed operator/symbol.
  if ((e.key >= "0" && e.key <= "9") || "+-*/().".includes(e.key)) {
    // Add the key to the expression.
    expression += e.key;
    // Update display.
    updateDisplay();
  } else if (e.key === "Enter") {
    // If Enter is pressed, calculate.
    calculate();
  } else if (e.key === "Backspace") {
    // If Backspace, remove the last character.
    expression = expression.slice(0, -1);
    // Update display.
    updateDisplay();
  }
});