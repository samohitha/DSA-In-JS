function countSum(arr, target) {
  let start = 0;
  let count = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] + arr[end] > target) {
      end--;
    } else if (arr[start] + arr[end] < target) {
      start++;
    } else {
      if (arr[start] === arr[end]) {
        let fre = end - start + 1;
        count += Math.floor((fre * (fre - 1)) / 2);
        return count;
      } else {
        let x = 0;
        let y = 0;
        let a_s = arr[start];
        while (arr[start] === a_s) {
          start++;
          x++;
        }
        let a_e = arr[end];
        while (arr[end] === a_e) {
          end--;
          y++;
        }
        count += x * y;
      }
    }
  }
}

let arr = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6];

let target = 8;

console.log(countSum((arr, target)));

function countSum1(arr, target) {
  // Create a hash map to store the frequency of each number
  const numFreq = {};
  for (const num of arr) {
    numFreq[num] = (numFreq[num] || 0) + 1;
  }

  let count = 0;

  for (const num of arr) {
    const complement = target - num;
    // If the complement exists in the hash map and it's not the same number as the current one
    if (numFreq[complement] && num !== complement) {
      count += numFreq[complement];
    }
    // If the complement is the same number as the current one, we need to adjust the count
    if (complement === num) {
      count += numFreq[complement] - 1;
    }
  }

  // Since each pair is counted twice, divide the count by 2 to get the total number of pairs
  return count / 2;
}

console.log(countSum1(arr, target)); // Output: 10
