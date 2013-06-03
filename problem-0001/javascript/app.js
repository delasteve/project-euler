function calculateSumOfMultiplesOfThreeAndFive(maxValue) {
  'use strict';

  var currentValue;
  var sum = 0;

  for (currentValue = 1; currentValue < maxValue; currentValue += 1) {
    var multipleOfThreeOrFive =
      currentValue % 3 === 0 || currentValue % 5 === 0;

    if (multipleOfThreeOrFive) {
      sum += currentValue;
    }
  }

  return sum;
}

console.log(calculateSumOfMultiplesOfThreeAndFive(1000));
