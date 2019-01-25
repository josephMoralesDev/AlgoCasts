function isBalanced(t) {
  let result = driver(t);

  return typeof result === 'number' ? true : false;
}

function driver(t, h = 0) {
  if (!t) {
    return h;
  }

  h++;

  let leftH = driver(t.left, h);
  let rightH = driver(t.right, h);

  let result = Math.abs(leftH - rightH);
  return result > 1 ? false : Math.max(leftH, rightH);

}

module.exports = isBalanced;
