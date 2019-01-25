
function isSymmetrical(t) {
  if (t) {
    return driver(t.left, t.right);
  }
  else {
    return false;
  }
}

function driver(a, b) {
  if ((a && !b) || (!a && b)) {
    return false;
  }

  if (!a && !b) {
    return true;
  }

  if (a.value === b.value) {
    return driver(a.left, b.right) && driver(a.right, b.left);
  }
}

module.exports = isSymmetrical;
