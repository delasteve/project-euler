function isPrime(number) {
  'use strict';

  var i;
  var isFactor;
  var isFactorOfTwo = number % 2 === 0;

  if (isFactorOfTwo) {
    return false;
  }

  for (i = 3; i * i <= number; i += 2) {
    isFactor = number % i === 0;

    if (isFactor) {
      return false;
    }
  }

  return true;
}

function findNthPrimeNumber(primeToStopAt) {
  'use strict';

  var number = 3;
  var primeList = [2];

  while (primeList.length < primeToStopAt) {
    if (isPrime(number)) {
      primeList.push(number);
    }

    number += 1;
  }

  return primeList.pop();
}

console.log(findNthPrimeNumber(10001));