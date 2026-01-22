// const add = function(num1, num2) {
//   return num1 + num2;
// };

const add = (num1, num2) => num1 + num2;

// const subtract = function(num1, num2) {
//   return num1 - num2;
// };

const subtract = (num1, num2) => num1 - num2;

// const sum = arr => {
//   let total = 0;

//   for (let num of arr) {
//     total += num;
//   }

//   return total;
// }

const sum = arr => arr.reduce((total, num) => total + num, 0);

// const multiply = arr => {
//   let total = 1;

//   for (let num of arr) {
//     total *= num;
//   }

//   return total;
// }

const multiply = arr => arr.reduce((total, num) => total * num, 1);

// const power = function(base, exponent) {
// 	return base ** exponent;
// };

const power = (base, exponent) => base ** exponent;

const factorial = num => {
  let total = 1;

  for (let i = 1; i <= num; i++) {
    total *= i;
  }

  return total;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
