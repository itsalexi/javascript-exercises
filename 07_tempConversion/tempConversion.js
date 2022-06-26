const ftoc = function (temp) {
  result = (temp - 32) * (5 / 9);
  return +result.toFixed(1);
};

const ctof = function (temp) {
  result = temp * (9 / 5) + 32;
  return +result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
