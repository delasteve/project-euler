function calculateSumSquareDifference(valueToCalculate) {
  'use strict';

  var difference;
  var i;
  var sumSquareThenAdd = 0;
  var sumNaturalNumbers = 0;
  var sumAddThenSquare;

  for (i = 1; i <= valueToCalculate; i += 1) {
    sumSquareThenAdd += Math.pow(i, 2);
    sumNaturalNumbers += i;
  }

  sumAddThenSquare = Math.pow(sumNaturalNumbers, 2);
  difference = sumAddThenSquare - sumSquareThenAdd;

  return difference;
}

console.log(calculateSumSquareDifference(100));