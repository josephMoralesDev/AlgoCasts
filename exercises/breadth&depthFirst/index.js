function breadthTraverse(t) {
  let arr = [];
  let que = [];
  que.push(t);

  while (que.length) {
    let r = que.shift();
    if (r) {
      arr.push(r.value);
      if (r.left) que.push(r.left);
      if (r.right) que.push(r.right);
    }
  }

  return arr;
}

function depthTraverse(t) {
  var arr = [];
  var que = []

  que.push(t);

  while (que.length) {
    let r = que.shift();
    if (r) {
      arr.push(r.value);
      if (r.right) que.unshift(r.right);
      if (r.left) que.unshift(r.left);
    }
  }
  return arr;
}
  //   1
  // 2   4
  //  3 5
module.exports = { breadthTraverse, depthTraverse };
