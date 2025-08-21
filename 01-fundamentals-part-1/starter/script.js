// JavaScript Fundamentals - Hour 4

// Exercise 1: Conversion Detective
console.log("5" + 2); // "52"  (string concatenation)
console.log("5" - 2); // 3    (string converted to number)
console.log("5" * 2); // 10   (string converted to number)
console.log("5" / 2); // 2.5  (string converted to number)

// Convert explicitly
const userAge = "25"; 
const userScore = 95;

console.log(Number(userAge)); // 25 (as number)
console.log(String(userScore)); // "95" (as string)



// Exercise 2: Fix the Bug
const num1 = Number(prompt("First number:")); // convert to number
const num2 = Number(prompt("Second number:")); // convert to number
const sum = num1 + num2;
console.log(`Sum: ${sum}`);



// Exercise 1: Equality Detective
console.log(5 === "5");  
console.log(5 == "5");    
console.log(true === 1);  
console.log(true == 1);  
console.log(false === 0);
console.log(false == 0);  



// Exercise 2: Fix the Login System
const username = prompt("Username:");
const password = prompt("Password:");

// Fix: use strict equality (===)
if (username === "admin" && password === "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}



// Exercise 1: Club Entry System
const age = 20; 
const hasID = false; 
const isVIP = true; 

if ((age >= 21 && hasID) || isVIP) {
  console.log("Welcome to the club!");
} else {
  console.log("Sorry, you cannot enter");
}



// Exercise 2: Weather Advisor
const temperature = 50; // Celsius
const isRaining = false;
const isWindy = true;

if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
  console.log("Perfect day!");
} else if (temperature >= 15 && temperature <= 35 && !isRaining) {
  console.log("Good day!");
} else {
  console.log("Stay inside!");
}



//Exercise 1: Status Messages
// 1. Login status
const isLoggedIn = true;
let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";
console.log(welcomeMessage);

// 2. Price with discount
const isPremium = false;
let price = isPremium ? 100 * 0.8 : 100;
console.log(price);



//Exercise 2: Smart Responses
const score = 85;
const weather = "sunny";
const battery = 15; // percentage

// 1. Score
console.log(`Your score: ${score} (${score >= 60 ? "Passed" : "Failed"})`);

// 2. Weather
console.log(`Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`);

// 3. Battery
console.log(`Battery: ${battery}% (${battery < 20 ? "Low battery warning" : "Battery OK"})`);




// Coding Challenge #4
const bill = 275; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);