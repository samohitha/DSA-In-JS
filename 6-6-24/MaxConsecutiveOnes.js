/**
 * To solve the problem of finding the maximum number of consecutive 1s in a binary array, we need to iterate through the array and keep track of the current streak of 1s and the maximum streak encountered so far.

Problem Statement
Given a binary array nums, find the maximum number of consecutive 1s in the array.

Approach
Initialization:

maxCount to keep track of the maximum number of consecutive 1s found so far (initialized to 0).
currentCount to count the current streak of consecutive 1s (initialized to 0).
Iteration:

Loop through each element in the array:
If the current element is 1, increment currentCount.
If the current element is not 1, compare currentCount with maxCount and update maxCount if necessary. Then, reset currentCount to 0.
Final Check:

After the loop, there might be a streak of 1s ending at the last element, so we need to compare currentCount with maxCount one last time.
Return:

Return maxCount which holds the maximum number of consecutive 1s.
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0; // To store the maximum count of consecutive 1s
  let currentCount = 0; // To store the current streak of consecutive 1s

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      // If the current element is 1, increment the current streak
      currentCount++;
      // Update maxCount if the current streak is greater
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    } else {
      // If the current element is not 1, reset the current streak
      currentCount = 0;
    }
  }

  return maxCount; // Return the maximum count of consecutive 1s found
};

// Example usage:
const nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums)); // Output: 3 (there are three consecutive 1s at the end)
