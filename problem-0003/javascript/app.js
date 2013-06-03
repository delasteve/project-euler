function calculateLargestPrimeFactor(primeValue) {
  'use strict';

  var counter = 2;
  var largestFactor = 0;
  var newNumber = primeValue;

  while (counter * counter <= newNumber) {
    if (newNumber % counter === 0) {
      newNumber /= counter;
      largestFactor = counter;
    } else {
      counter += 1;
    }
  }

  if (newNumber > largestFactor) {
    largestFactor = newNumber;
  }

  return largestFactor;
}

console.log(calculateLargestPrimeFactor(600851475143));