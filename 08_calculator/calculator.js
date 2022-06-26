const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function (array) {
  product = array[0];
  for (let i = 1; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

const power = function (n1, n2) {
  return n1 ** n2;
};

const factorial = function (n1) {
  let num = 1;
  for (let i = 2; i <= n1; i++) {
    num = num * i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
