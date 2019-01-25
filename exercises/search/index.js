//time complexity logn
//space complexity n


function binarySearch (array, value) {
  if (!array.length) {
    return false;
  }

  let pivot = Math.ceil(array.length / 2);

  if (array[pivot] === value) {
    return true;
  }

  let left = array.slice(0, pivot - 1);
  let right = array.slice(pivot);

  return binarySearch(left, value) || binarySearch(right, value);

}

module.exports = { binarySearch };

