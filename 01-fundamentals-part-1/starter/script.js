// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// 1. Calculate BMIs
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

// 2. Create markHigherBMI variable
const markHigherBMI = BMIMark > BMIJohn;

// 3. Log results to console
console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);
console.log("Does Mark have a higher BMI?", markHigherBMI);