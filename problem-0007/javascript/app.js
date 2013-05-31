'use strict';

function isPrime(number) {
  var isFactorOfTwo = number % 2 === 0
    , i;

  if (isFactorOfTwo) {
    return false;
  }

  for(i = 3; i*i <= number; i+=2) {
    var isFactor = number % i == 0;
    if (isFactor) {
      return false;
    }
  }

  return true;
}

function findNthPrimeNumber(primeToStopAt) {
  var number = 3
    , primeList= [2];

  while (primeList.length < primeToStopAt) {
    if (isPrime(number)) {
      primeList.push(number);
    }

    number++;
  }

  return primeList.pop();
}

console.log(findNthPrimeNumber(10001));