// JavaScript Fundamentals - Hour 2

// Exercise: Score Calculator
let score = 100;
console.log("Score:", score)
score += 50
console.log("After score += 50:",score)
score *= 2
console.log("After score *= 2:",score)
score -= 25
console.log("After score -= 25:",score)
score ++;
console.log("After score ++:",score)
score ++;
console.log("After score ++:",score)

///Exercise: Age Verification
const myAge = 20;

const compare = myAge >= 18;
console.log("Is 18 less than my age?:", compare)

const check = 100 >= 90;
console.log("Is 100 greater than 90?:", check)

console.log("Complex comparison:");
console.log(compare > check); 

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