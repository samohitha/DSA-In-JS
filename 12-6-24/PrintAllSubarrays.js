/**
 * Given an array print all subarrays of the given array ( you can print in any order)
 *
 * Subarray : It is a contiguous cross section of your array
 *
 * Ex : [1,2,3,4]
 * 1
 * 2
 * 3
 * 4
 * 1,2
 * 2,3
 * 3,4
 * 1,23,
 * 2,3,4
 * 1,2,3,4
 *
 * Every sub array can be uniquly identified by a pair of starting index and ending index
 *
 * How about if we can calculate all possible starting index and ending index
 *
 *
 *
 */

function printSubarrays(arr) {
  for (let start = 0; start < arr.length; start++) {
    let str = "";

    for (let end = start; end < arr.length; end++) {
      str += arr[end];
      console.log(str);
    }
  }
}

const arr = [1, 2, 3, 5];

printSubarrays(arr);
