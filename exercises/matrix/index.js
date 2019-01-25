// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

  let matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n));
  }

  let i = 1
  let first = 0;
  let last = n - 1;

  while (i <= n * n) {
    for (let j = first; j <= last; j++) {
      matrix[first][j] = i;
      i++;
    }

    for (let j = first + 1; j <= last; j++) {
      matrix[j][last] = i;
      i++;
    }

    for (let j = last - 1; j >= first; j--) {
      matrix[last][j] = i;
      i++;
    }

    for (let j = last - 1; j >= first + 1; j--) {
      matrix[j][first] = i;
      i++;
    }

    first++;
    last--;
  }

  return matrix;
}

//create n*n array


module.exports = matrix;
