const removeFromArray = function (array, ...target) {
  console.log(target);

  return array.filter((x) => !target.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
