// Given an integer n,
// return an array ans of length n + 1
// such that for each i (0 <= i <= n),
// ans[i] is the number of 1's
// in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

/**
 * @param {number} n
 * @return {number[]}
 */

var countBits = function countBits(n) {
  const ans = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }
  return ans;
};
