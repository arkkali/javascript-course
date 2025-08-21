//Exercise 1: Status Messages
// 1. Login status
const isLoggedIn = true;
let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";
console.log(welcomeMessage);

// 2. Price with discount
const isPremium = false;
let price = isPremium ? 100 * 0.8 : 100;
console.log(price);
