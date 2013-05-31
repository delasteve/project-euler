'use strict';

function calculateSumOfMultiplesOfThreeAndFive(maxValue) {
  var sum = 0
    , currentValue;

  for(currentValue = 1; currentValue < maxValue; currentValue++) {
    var multipleOfThreeOrFive = currentValue % 3 === 0 || currentValue % 5 === 0;

    if(multipleOfThreeOrFive) {
      sum += currentValue;
    }
  }

  return sum;
}

console.log(calculateSumOfMultiplesOfThreeAndFive(1000));
