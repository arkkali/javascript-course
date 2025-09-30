'use strict';
// const obj = {
//   name: 'Object',

//   regularMethod: function () {
//     console.log('Regular:', this.name);
//   },



//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// obj.regularMethod();
// obj.arrowMethod();

// // Before running, predict the output:
// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod(); // Predict: ?
// quiz.arrowMethod(); // Predict: ?

// const timer = {
//   name: 'Timer',
//   // using the old ways
//   start: function () {
//     console.log(`${this.name} starting...`);

//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finsihed`);
//     }, 1000);
//   },
//   // Using arrow function
//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`);
//     });
//   },
// };

// timer.start();
// timer.startModern();

// const user = {
//   name: 'Alice',
//   hobbies: ['reading', 'coding', 'gaming'],

//   // BROKEN: arrow function loses `this`
//   printHobbiesBad: () => {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name is undefined!
//     });
//   },

//   // FIXED: regular function preserves `this`
//   printHobbiesGood() {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name works!
//     });
//   },
// };

// // user.printHobbiesBad();
// user.printHobbiesGood();

const functionTypes = {
  regularFunction: function () {
    console.log('Arguemtns length', arguments.length);
    console.log(`First argument:`, arguments[0]);
  },

  arrowFunction: () => {
    console.log(arguments);
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg', args[0]);
  },
};

functionTypes.regularFunction('Hello', 'world');
// functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');