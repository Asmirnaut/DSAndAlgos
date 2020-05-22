/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
 */

var rotate = function (matrix) {
  let n = matrix.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n - 2 * i - 1; j++) {
      let temp = matrix[i + j][n - 1 - i];
      matrix[i + j][n - 1 - i] = matrix[i][i + j];
      matrix[i][i + j] = temp;

      temp = matrix[n - 1 - i][n - 1 - i - j];
      matrix[n - 1 - i][n - 1 - i - j] = matrix[i][i + j];
      matrix[i][i + j] = temp;

      temp = matrix[n - 1 - i - j][i];
      matrix[n - 1 - i - j][i] = matrix[i][i + j];
      matrix[i][i + j] = temp;
    }
  }

  return matrix;
};
