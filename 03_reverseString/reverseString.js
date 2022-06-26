const reverseString = function (word) {
  letters = word.split("");
  console.log(letters);
  letters.reverse();
  console.log(letters);
  return letters.join("");
};

// Do not edit below this line
module.exports = reverseString;
