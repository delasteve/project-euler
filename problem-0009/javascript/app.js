function isPythagorean(a, b, c) {
  'use strict';

  return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
}

function pythagoreanTriplet(valueForTripleToEqual) {
  'use strict';

  var a;
  var b;
  var c;

  for (a = 1; a < valueForTripleToEqual; a += 1) {
    for (b = a + 1; b < valueForTripleToEqual; b += 1) {
      c = valueForTripleToEqual - a - b;

      if (isPythagorean(a, b, c)) {
        return a * b * c;
      }
    }
  }

  return 0;
}

console.log(pythagoreanTriplet(1000));