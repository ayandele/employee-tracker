// Function to validate a non-empty string input
function validateStringInput(input) {
return input !== '';
}

// Function to validate a numeric input
function validateNumericInput(input) {
return !isNaN(parseFloat(input)) && isFinite(input);
}

// Function to validate an integer input
function validateIntegerInput(input) {
return Number.isInteger(Number(input));
}

// Export the validation functions
module.exports = {
validateStringInput,
validateNumericInput,
validateIntegerInput,
};
