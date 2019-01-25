function rotateImage(a) {

  length = a.length;

  for (let layer = 0; layer < length / 2; layer++) {
    let first = layer;
    let last = length - 1 - layer;

    for (let i = first; i < last; i++) {
      let offset = i - first;

      //grab top
      let temp = a[first][i];
      //left -> top
      a[first][i] = a[last - offset][first];
      //bottom -> left
      a[last - offset][first] = a[last][last - offset];
      //right -> bottom
      a[last][last - offset] = a[i][last];
      //top -> right
      a[i][last] = temp;
    }
  }

  return a;
}


module.exports = rotateImage;
