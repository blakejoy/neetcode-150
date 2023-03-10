/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Time: O(N) Space: O(N)
Time: O(NlogN) Space: O(1) sort and then use two pointers
Time: O(N^2) Space: O(1)

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

// Time: O(N) Space: O(N)
// const containsDuplicate = (arr) => {
//   const numSet = new Set();
//   for (let num of nums) {
//     numSet.add(num);
//   }
//   return numSet.size !== nums.length;
// };

// Time: O(N) Space: O(N)
// const containsDuplicate = (arr) => {
//   if (arr.length <= 1) {
//     return false;
//   }

//   let dupeMap = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     if (dupeMap.has(arr[i])) {
//       return true;
//     } else {
//       dupeMap.set(arr[i], i);
//     }
//   }
//   return false;
// };

// Time: O(NlogN) Space: O(1) sort and then use two pointers
// const containsDuplicate = (arr) => {
//   arr.sort();
//   let left = 0;
//   let right = 1;
//   while (right < arr.length) {
//     if (arr[left] === arr[right]) {
//       return true;
//     }
//     left = right;
//     right = left + 1;
//   }
//   return false;
// };

// Time: O(N^2) Space: O(1)
const containsDuplicate = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
