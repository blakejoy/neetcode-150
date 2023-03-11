/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Time: O(N) Space: O(N)

*/

// Time: O(N^2) Space: O(1)
// const twoSum = (arr, target) => {
//   if (arr.length === 2) {
//     return arr[0] + arr[1] === target && [0, 1]; // should be true but we can do this to be safe.
//   }

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       const sum = arr[i] + arr[j];
//       if (i !== j && sum === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// Time: O(N) Space: O(N)
const twoSum = (arr, target) => {
  const sumMap = new Map();
  let i = 0;
  let j = 1;

  if (arr.length === 2) {
    return arr[0] + arr[1] === target && [0, 1]; // should be true but we can do this to be safe.
  }

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];
    sumMap.set(diff, i);
  }

  for (let i = 0; i < arr.length; i++) {
    const currIdx = sumMap.get(arr[i]);
    const hitsTarget = currIdx && currIdx !== i;
    if (hitsTarget) {
      return [i, currIdx];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
