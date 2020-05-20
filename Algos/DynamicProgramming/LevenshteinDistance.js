/*
Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character
 */

/*
 Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
 */

var minDistance = function (str1, str2) {
  const grid = [];
  for (let i = 0; i < str1.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str2.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    grid.push(row);
  }
  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        grid[i][j] = grid[i - 1][j - 1];
      } else {
        let min =
          1 + Math.min(grid[i - 1][j - 1], grid[i - 1][j], grid[i][j - 1]);
        grid[i][j] = min;
      }
    }
  }
  return grid[str1.length][str2.length];
};
