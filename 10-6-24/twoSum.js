// 1. Two Sum
// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

/**
 * Brute Force Solution for Two Sum Problem
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @return {number[]} - Indices of two numbers
 */
var twoSum = function (nums, target) {
  // Dry Run Table
  // | Iteration | nums[i] | nums[j] | Sum | Result  |
  // |-----------|---------|---------|-----|---------|
  // | 1         | 2       | 7       | 9   | [0, 1]  |
  // | 2         | 2       | 11      | 13  |         |
  // | 3         | 2       | 15      | 17  |         |
  // | 4         | 7       | 11      | 18  |         |
  // | 5         | 7       | 15      | 22  |         |
  // | 6         | 11      | 15      | 26  |         |
  // | 7         | 3       | 2       | 5   |         |
  // | 8         | 3       | 4       | 7   |         |
  // | 9         | 3       | 3       | 6   | [0, 1]  |
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return []; // No solution found
};

// Example usage:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log("Indices of two numbers:", twoSum(nums1, target1)); // Output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log("Indices of two numbers:", twoSum(nums2, target2)); // Output: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log("Indices of two numbers:", twoSum(nums3, target3)); // Output: [0, 1]

// Note: In one sec your computer can approximately execute 10^8 instructions

// Array.sort()

// In js if u didn't pass any arguments for sort it sorts in the dictionary order

// 0 => A
// 1 => B
// 2 => C
// 3 => D
// 4 => E
// 5 => F

// arr = [1, 10, 100, 2, 4, 3, 30]
// 1 => A
// 10 => BA
// 100 => BAA
// 2 => C
// 4 => E
// 3 => D
// 30 => DA

// In dictionary order / lexical is => B -> BA -> BAA -> C -> D -> DA -> E

function fn(x, y) {
  return x[0] - y[0];
}

// if (x < y) => x-y => -ve
// if (x > y) => x-y => +ve

var twoSum1 = function (arr, target) {
  for (let index = 0; index < arr.length; index++) {
    arr[index] = [arr[index], i];
  }

  arr.sort(fn);

  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] + arr[end] === target) {
      return [arr[start][1], arr[end][1]];
    } else if (arr[start] + arr[end] > target) {
      end--;
    } else {
      start++;
    }
  }
};
