/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


Time: O(N) Space: O(N)


After looking at solution this can be done in O(1) time. An array of 26 characters (alphabet) and you iterate through the 
string counting the upping the count in each index and using charCode. 

*/

const isAnagram = (s, t) => {
  if (s === t && s.length !== t.length) {
    return false;
  }

  const sCharMap = new Map();

  for (let character of s) {
    if (sCharMap.has(character)) {
      sCharMap.set(character, sCharMap.get(character) + 1);
    } else {
      sCharMap.set(character, 1);
    }
  }
  for (let character of t) {
    if (sCharMap.has(character)) {
      const count = sCharMap.get(character);
      const newCount = count - 1;
      if (newCount < 0) {
        return false;
      }
      sCharMap.set(character, newCount);
    } else {
      return false;
    }
  }

  for (let [key, value] of sCharMap.entries()) {
    if (value > 0) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('car', 'rat'));
console.log(isAnagram('ratt', 'rat'));
