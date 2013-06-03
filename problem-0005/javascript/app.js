function calculateSmallestDivisibleNumber(maxValue) {
  'use strict';

  var i;
  var isNotDivisible;
  var isNotEvenRemainder;
  var smallestNumber = maxValue;
  var valueFound = false;

  while (!valueFound) {
    isNotDivisible = true;

    for (i = 1; i <= maxValue; i += 1) {
      isNotEvenRemainder = smallestNumber % i !== 0;

      if (isNotEvenRemainder) {
        isNotDivisible = false;
        break;
      }
    }

    if (!isNotDivisible) {
      smallestNumber += 1;
    } else {
      valueFound = true;
    }
  }

  return smallestNumber;
}

console.log(calculateSmallestDivisibleNumber(20));