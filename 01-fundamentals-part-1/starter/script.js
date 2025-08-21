// Exercise 2: Fix the Login System

const username = prompt("Username:");
const password = prompt("Password:");

// Fix: use strict equality (===)
if (username === "admin" && password === "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}