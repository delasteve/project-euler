function calculateSumOfEvenFibonacci(maxValue) {
  'use strict';

  var first = 1;
  var multipleOfTwo;
  var second = 2;
  var sum = 0;
  var temp;

  while (second < maxValue) {
    multipleOfTwo = second % 2 === 0;

    if (multipleOfTwo) {
      sum += second;
    }

    temp = second;
    second += first;
    first = temp;
  }

  return sum;
}

console.log(calculateSumOfEvenFibonacci(4000000));