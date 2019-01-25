// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
// split into 2 until 1
// start swaping

//space complexity n
//time complexity nlogn
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let center = Math.floor(arr.length) / 2;
  let left = arr.slice(0, center);
  let right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];

}

//space complexity n
//average case (nlogn)
//worst case (n^2)
function quickSort(array){
  if (array.length < 2) {
    return array;
  }

  let pivot = array[0];
  let lesser = [];
  let greater = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quickSort(lesser).concat(pivot, greater);
}



module.exports = { mergeSort, merge, quickSort };
