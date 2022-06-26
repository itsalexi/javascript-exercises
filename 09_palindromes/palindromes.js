const palindromes = function (words) {
  processed = words.toLowerCase().replace(/[^a-z]/g, "");
  reversed = processed.split("").reverse().join("");
  if (processed == reversed) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
