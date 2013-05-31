'use strict';

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
};

function isPalindrome(value) {
  return value.toString() === value.toString().reverse()
}

function palindrome(minValue, maxValue) {
  var largestPalindrome = 0
    , i
    , j;

  for (i = minValue; i <= maxValue; i++) {
    for (j = minValue; j <= maxValue; j++) {
      var temp = i * j
        , isPalindromeAndIsLargerThanLastPalindrome = isPalindrome(temp) && temp > largestPalindrome;

      if (isPalindromeAndIsLargerThanLastPalindrome) {
        largestPalindrome = temp;
      }
    }
  }

  return largestPalindrome;
}

console.log(palindrome(100, 999));