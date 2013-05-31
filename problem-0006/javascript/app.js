'use strict';

function calculateSumSquareDifference(valueToCalculate) {
  var sumSquareThenAdd = 0
    , sumNaturalNumbers = 0
    , sumAddThenSquare
    , difference
    , i;

  for (i = 1; i <= valueToCalculate; i++) {
    sumSquareThenAdd += Math.pow(i, 2);
    sumNaturalNumbers += i;
  }

  sumAddThenSquare = Math.pow(sumNaturalNumbers, 2);
  difference = sumAddThenSquare - sumSquareThenAdd;

  return difference;
}

console.log(calculateSumSquareDifference(100));