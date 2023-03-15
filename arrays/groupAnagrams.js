/**
 * 
 Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 * 
 * 
 * 
 * 
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length <= 1) {
    return [strs];
  }

  sortedMap = new Map();

  // loop through each string and sort
  // store the sort in a map and add the original string to that map
  // ['eat', 'tea']
  // ['e','a','t'] split => sort => ['a','e','t'] => join => aet: ['eat'];
  // ['t','e','a'] split => sort => ['a','e','t'] => join => aet: ['eat', 'tea'];

  for (let i = 0; i < strs.length; i++) {
    const sortedString = strs[i].split('').sort().join('');
    if (sortedMap.has(sortedString)) {
      const sortedArr = sortedMap.get(sortedString);
      sortedArr.push(strs[i]);
    } else {
      sortedMap.set(sortedString, [strs[i]]);
    }
  }

  let results = [];

  for (let [_, value] of sortedMap.entries()) {
    results.push(value);
  }

  return results;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));
