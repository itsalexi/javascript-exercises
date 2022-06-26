const fibonacci = function (nth) {
  num = parseInt(nth);
  if (num < 0) return "OOPS";

  const goldenRatio = 1.618034;
  return Math.floor(
    (goldenRatio ** num - (1 - goldenRatio) ** num) / Math.sqrt(5)
  );
};

// Do not edit below this line
module.exports = fibonacci;
