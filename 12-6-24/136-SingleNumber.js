/**
 * 
 * 136. Single Number
Easy
Topics
Companies
Hint
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
 * 
 * 
 */

var singleNumber = function (number) {};

// Approch 1: frequency map

// Approach 2 : Bitwise XOR

/**
 *
 * a    b   result
 * ==================
 * 0    0       0
 *
 * 0    1       1
 *
 * 1    0       1
 *
 * 1    1       0
 *
 * Then in xor operation if we xor two same values the output is zero where as xor of a value with 0 gives the same value
 *
 *
 */

var singleNumber1 = function (number) {
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    result = result ^ nums[1];
  }
  return result;
};
