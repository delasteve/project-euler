'use strict';

function euler(maxValue) {
  var sum = 0
    , first = 1
    , second = 2;

  while (second < maxValue) {
    var multipleOfTwo = second % 2 === 0
      , temp;

    if (multipleOfTwo) {
      sum += second;
    }

    temp = second;
    second += first;
    first = temp;
  }

  return sum;
}

console.log(euler(4000000));