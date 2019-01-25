const rotateImage = require('./index.js');

const a = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

const solvedA = [[7,4,1],
[8,5,2],
[9,6,3]];

const b = [[10,9,6,3,7],
 [6,10,2,9,7],
 [7,6,3,8,2],
 [8,9,7,9,9],
 [6,8,6,8,2]];

const solvedB = [[6,8,7,6,10],
 [8,9,6,10,9],
 [6,7,3,2,6],
 [8,9,8,9,3],
 [2,9,2,7,7]];

test('is a function', () => {
  expect(typeof rotateImage).toEqual('function');
})

test('rotates array properly', () => {
  expect(rotateImage(a)).toEqual(solvedA);
  expect(rotateImage(b)).toEqual(solvedB)
});
