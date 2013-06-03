function reverseString(stringToReverse) {
  'use strict';

  return stringToReverse.split('').reverse().join('');
}

function isPalindrome(value) {
  'use strict';

  return value.toString() === reverseString(value.toString());
}

function calculateLargestPalindrome(minValue, maxValue) {
  'use strict';

  var i;
  var isPalindromeAndIsLargerThanLastPalindrome;
  var j;
  var largestPalindrome = 0;
  var temp;

  for (i = minValue; i <= maxValue; i += 1) {
    for (j = minValue; j <= maxValue; j += 1) {
      temp = i * j;
      isPalindromeAndIsLargerThanLastPalindrome =
        isPalindrome(temp) && temp > largestPalindrome;

      if (isPalindromeAndIsLargerThanLastPalindrome) {
        largestPalindrome = temp;
      }
    }
  }

  return largestPalindrome;
}

console.log(calculateLargestPalindrome(100, 999));