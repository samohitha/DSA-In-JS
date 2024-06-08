// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums2 into nums1 as one sorted array

var merge = function (num1, m, num2, n) {
  let result = Array(m + n).fill(0);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < m && j < n) {
    if (num1[i] < num2[j]) {
      result[k] = num1[i];
      i++;
      k++;
    } else {
      result[k] = num2[i];
      j++;
      k++;
    }
  }

  while (i < m) {
    result[k] = num1[i];
    i++;
    k++;
  }

  while (j < n) {
    result[k] = num2[j];
    j++;
    k++;
  }
};
