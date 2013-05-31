'use strict';

function calculateSmallestDivisibleNumber(maxValue) {
  var valueFound = false
    , smallestNumber = maxValue;

  while (!valueFound) {
    var isNotDivisible = true
      , i;

    for (i = 1; i <= maxValue; i++) {
      var isNotEvenRemainder = smallestNumber % i !== 0;

      if (isNotEvenRemainder) {
        isNotDivisible = false;
        break;
      }
    }

    if (!isNotDivisible) {
      smallestNumber++;
    } else {
      valueFound = true;
    }
  }

  return smallestNumber;
}

console.log(calculateSmallestDivisibleNumber(20));