function calculateLargestPrimeFactor(primeValue) {
  var newNumber = primeValue
    , counter = 2
    , largestFactor = 0;

  while(counter * counter <= newNumber) {
    if (newNumber % counter === 0) {
      newNumber /= counter;
      largestFactor = counter;
    } else {
      counter++;
    }
  }

  if (newNumber > largestFactor) {
    largestFactor = newNumber;
  }

  return largestFactor;
}

console.log(calculateLargestPrimeFactor(600851475143));