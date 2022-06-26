const leapYears = function (year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
};

// if YEAR is divisible by 4
//     if divisible by 100
//         check if its divisible by 400
//             = LEAP YEAR
//         else NOT LEAP YEAR
//     else not LEAP YEAR
// LEAP YEAR

// Do not edit below this line
module.exports = leapYears;
