const s = require('./index');

const binarySearch = s.binarySearch;

test('binarySearch value does exist', () => {
  expect(binarySearch([3,1,2,5], 2)).toEqual(true);
});

test('binarySearch value does not exist', () => {
  expect(binarySearch([3,1,2,5], 7)).toEqual(false);
});
