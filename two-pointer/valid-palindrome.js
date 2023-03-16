/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.


*/

/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function (s) {
//   if (s === '') {
//     return true;
//   }

//   const lowerWithoutSpaceString = s.toLowerCase().replace(/[^a-z0-9]/gi, ''); // didn't know this right off hand....
//   // currently replaces all characters that are not a-z or 0-9 from the start of the string (^)
//   // g = global and matches all instances
//   // i = case insenstive

//   let left = 0;
//   let right = lowerWithoutSpaceString.length - 1;

//   while (left < right) {
//     const leftChar = lowerWithoutSpaceString.charAt(left);
//     const rightChar = lowerWithoutSpaceString.charAt(right);

//     if (leftChar !== rightChar) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// };

var isPalindrome = function (s) {
  if (s.length === 1) {
    return true;
  }

  const lowerWithoutSpaceString = s.toLowerCase();

  let left = 0;
  let right = lowerWithoutSpaceString.length - 1;

  while (left < right) {
    let leftChar = lowerWithoutSpaceString.charAt(left);
    let rightChar = lowerWithoutSpaceString.charAt(right);

    while (!isAlphaNumeric(leftChar.charCodeAt()) && left < right) {
      left++;
      leftChar = lowerWithoutSpaceString.charAt(left);
    }

    while (!isAlphaNumeric(rightChar.charCodeAt()) && right > left) {
      right--;
      rightChar = lowerWithoutSpaceString.charAt(right);
    }

    if (leftChar !== rightChar) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const isAlphaNumeric = (character) => {
  const firstAlphabet = 'a'.charCodeAt();
  const lastAlphabet = 'z'.charCodeAt();
  const firstNumber = '0'.charCodeAt();
  const lastNumber = '9'.charCodeAt();

  const isAlphabet = character >= firstAlphabet && character <= lastAlphabet;
  const isNumeric = character >= firstNumber && character <= lastNumber;
  return isAlphabet || isNumeric;
};
console.log(isPalindrome('a.'));

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));

// want to get a solution that doesn't use regex
