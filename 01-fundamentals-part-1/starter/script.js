// Coding Challenge #4

const bill = 275; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);