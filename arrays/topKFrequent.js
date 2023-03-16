/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

*/

/**
 *
 * O (nlogn)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function (nums, k) {
//   const frequencyMap = new Map();

//   if (nums.length === k) {
//     return nums;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (frequencyMap.has(nums[i])) {
//       let count = frequencyMap.get(nums[i]);
//       frequencyMap.set(nums[i], count + 1);
//     } else {
//       frequencyMap.set(nums[i], 1);
//     }
//   }

//   const frequencies = [...frequencyMap]
//     .map(([num, count]) => ({
//       num,
//       count,
//     }))
//     .sort((a, b) => b.count - a.count);

//   return frequencies.map(({ num }) => num).slice(0, k);
// };
var topKFrequent = function (nums, k) {
  if (nums.length === k) {
    return nums;
  }

  const count = new Map();
  const arrayMap = Array(nums.length).fill(0);
  let results = [];

  for (let i = 0; i < nums.length; i++) {
    if (count.has(nums[i])) {
      let currCount = count.get(nums[i]);
      count.set(nums[i], currCount + 1);
    } else {
      count.set(nums[i], 1);
    }
  }

  for (let [num, c] of count) {
    if (arrayMap[c] !== 0) {
      arrayMap[c] = [...arrayMap[c], num];
    } else {
      arrayMap[c] = [num];
    }
  }

  for (let i = arrayMap.length - 1; i >= 0; i--) {
    if (results.length === k) {
      break;
    } else {
      if (arrayMap[i] !== 0) {
        results = [...results, ...arrayMap[i]];
      }
    }
  }
  return results;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 2], 2));
