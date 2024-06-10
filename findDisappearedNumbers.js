// 448. Find All Numbers Disappeared in an Array
// Easy
// Topics
// Companies
// Hint
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let x = Math.abs(nums[i]);
    let index = x - 1;
    if (nums[index] > 0) {
      nums[index] *= -1;
    }
  }
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};

// Example usage:
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log("Missing numbers:", findDisappearedNumbers(nums)); // Output: [5, 6]

// Dry Run Table
// | Iteration | nums                         | x  | index | Modified nums              |
// |-----------|------------------------------|----|-------|----------------------------|
// | 1         | [4, 3, 2, 7, 8, 2, 3, 1]     | 4  | 3     | [4, 3, 2, -7, 8, 2, 3, 1]  |
// | 2         | [4, 3, 2, -7, 8, 2, 3, 1]    | 3  | 2     | [4, 3, -2, -7, 8, 2, 3, 1] |
// | 3         | [4, 3, -2, -7, 8, 2, 3, 1]   | 2  | 1     | [4, -3, -2, -7, 8, 2, 3, 1]|
// | 4         | [4, -3, -2, -7, 8, 2, 3, 1]  | 7  | 6     | [4, -3, -2, -7, 8, 2, -3, 1]|
// | 5         | [4, -3, -2, -7, 8, 2, -3, 1] | 8  | 7     | [4, -3, -2, -7, 8, 2, -3, -1]|
// | 6         | [4, -3, -2, -7, 8, 2, -3, -1]| 2  | 1     | [4, 3, -2, -7, 8, 2, -3, -1]|
// | 7         | [4, 3, -2, -7, 8, 2, -3, -1] | 3  | 2     | [4, 3, 2, -7, 8, 2, -3, -1] |
// | 8         | [4, 3, 2, -7, 8, 2, -3, -1]  | 1  | 0     | [4, 3, 2, -7, 8, 2, -3, -1] |
