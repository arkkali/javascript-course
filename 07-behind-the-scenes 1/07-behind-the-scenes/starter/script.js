'use strict';
// const functionTypes = {
//   regularFunction: function () {
//     console.log('Arguemtns length', arguments.length);
//     console.log(`First argument:`, arguments[0]);
//   },

//   arrowFunction: () => {
//     console.log(arguments);
//     console.log('Arrow function called');
//   },

//   modernFunction: (...args) => {
//     console.log('Args length:', args.length);
//     console.log('First arg', args[0]);
//   },
// };

// functionTypes.regularFunction('Hello', 'world');
// // functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');

// // Primitive
// let age = 30;

// // we copy the primitive, making independent copy
// let oldAge = age;

// age = 31;

// console.log('age', age);

// console.log('oldAge:', oldAge);

// // OBJECT HEAP
// //objects are stored in heap, variables hold references
// const me = { name: 'Jonas', age: 30 };

// const friend = me;

// friend.age = 27;

// console.log('me', me);
// console.log('Friend', friend);

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Sarah', age: 25 };

const updatedPerson = changeAge(originalPerson, 30);

console.log('Same object?:', originalPerson === updatedPerson);

// SOLUTION TO MAKE  A COPY
const original = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'codings'],
};

const shallowCopy = { ...original };

shallowCopy.name = 'Bob';

console.log('original name:', original.name);
console.log('Shallow name:', shallowCopy.name);

shallowCopy.hobbies.push('gaming');

console.log('original hobbies:', original.hobbies);
console.log('Shallow hobbies:', shallowCopy.hobbies);

/// Deep copy
const deepOriginal = {
  name: 'Charlie',
  age: 32,
  address: { city: 'Paris', country: 'France' },
  hobbies: ['travel', 'photography'],
};
const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Lex';

console.log('Original address', deepOriginal.address);
console.log('Copy address:', deepCopy.address);

console.log('original hobbies:', deepOriginal.hobbies);
console.log('Copy hobbies:', deepCopy.hobbies);

console.log('original name:', deepOriginal.name);
console.log('copy name:', deepCopy.name);