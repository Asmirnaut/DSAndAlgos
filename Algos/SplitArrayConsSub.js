/* ----- NOT YET SOLVED, COMING BACK LATER ---- */

//Given an array nums sorted in ascending order, return true if and only if you can split it into 1 or more subsequences such that each subsequence consists of consecutive integers and has length at least 3.

/* Input: [1,2,3,3,4,5]
Output: True
Explanation:
You can split them into two consecutive subsequences :
1, 2, 3
3, 4, 5 */

const isPossible = (nums) => {
  let arr1 = [];
  let arr2 = [];

  let numPoint = 1;

  arr1.push(nums[0]);

  while (numPoint < nums.length) {
    if (nums[numPoint] === arr1[arr1.length - 1] + 1) {
      arr1.push(nums[numPoint]);
    } else if (arr2.length === 0) {
      arr2.push(nums[numPoint]);
    } else if (nums[numPoint] === arr2[arr2.length - 1] + 1) {
      arr2.push(nums[numPoint]);
    }
    numPoint++;
  }

  if (arr1.length >= 3 && arr2.length >= 3) {
    return true;
  }
  return false;
};

console.log(isPossible([1, 2, 3, 3, 4, 5]));
