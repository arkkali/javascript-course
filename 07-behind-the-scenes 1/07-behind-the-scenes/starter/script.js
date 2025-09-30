'use strict';
// const functionTypes = {
//   regularFunction: function () {
//     console.log('Arguments length:', arguments.length);
//     console.log('First argument:', arguments[0]);
//   },

//   arrowFunction: () => {
//     console.log(arguments);
//     console.log('Arrow function called');
//   },

//   modernFunction: (...args) => {
//     console.log('Args length', args.length);
//     console.log('First arg:', args[0]);
//   },
// };

// functionTypes.regularFunction('hello', 'world');
// // functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');

// let age = 30;

// let oldage = age;

// age = 31;

// console.log('age', age);
// console.log('oldAge', oldage);

// const me = { name: 'Aiken', age: 25 };

// const friend = me;

// friend.name = 'JohnDoe';
// friend.age = 23;

// console.log('me:', me);
// console.log('friend:', friend);

// const original = {
//   name: 'Alice',
//   age: 28,
//   hobbies: ['reading', 'coding'],
// };

// const shallowCopy = { ...original };

// shallowCopy.name = 'Bob';

// console.log('original name:', original.name);
// console.log('copy name:', shallowCopy.name);

// shallowCopy.hobbies.push('gaming');

// console.log(original.hobbies);
// console.log(shallowCopy.hobbies);

const deepOriginal = {
  name: 'Charlie',
  age: 32,
  // nested object
  address: { city: 'Paris', country: 'France' },
  //nested array
  hobbies: ['travel', 'photography'],
};


const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Lex';

console.log(deepOriginal);
console.log(deepCopy);