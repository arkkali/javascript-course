// JavaScript Fundamentals - Hour 3
//Exercise 1: Personal Introduction

// Create variables for:
const myName = "Len"; // Your name
const myAge = 20; // Your age
const myJob = "IT Student"; // Your job/student status
const currentYear = 2025;

const me = "I'm " + myName + ", a " + myAge + " year old " + myJob + "!"
console.log(me)


//Exercise 2: Math in Templates
const myyAge = 20;
const result = `Born in ${currentYear - myyAge}, 10*5 = ${10 * 5}, Adult: ${myAge >= 18}`;
console.log(result);


// Exercise 1: Grade Calculator
const testScore = 90; // Change this to test different scores
if (testScore >= 90) {
  console.log("Excellent! Grade A");
} else if (testScore >= 80) {
  console.log("Good job! Grade B");
} else if (testScore >= 70) {
  console.log("Not bad! Grade C");
} else if (testScore >= 60) {
  console.log("You passed! Grade D");
} else {
  console.log("You failed! Study harder");
}


// Exercise 2: Age Verification
const userAge = 15; // Change this to test

if (userAge >= 18) {
  console.log("Welcome! You can access all content");
} else if (userAge >= 13) {
  console.log("Welcome! Restricted content only");
} else {
  console.log("Sorry, you're too young");
}


// Exercise: Truth Detector
const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];
for (let val of values) {
  console.log("Value:", val);
  console.log("Boolean:", Boolean(val));
  if (val) {
    console.log("Truthy!");
  } else {
    console.log("Falsy!");
  }
  console.log("-----------------");
}


// Coding Challenge #2: BMI Comparison
// Reuse your BMI calculation from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);

// Compare BMIs with if/else and use template literals
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else if (BMIJohn > BMIMark) {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
} else {
  console.log(`Wow! Mark and John have the same BMI (${BMIMark})`);
}

