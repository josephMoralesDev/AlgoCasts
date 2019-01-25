const s = require('./index.js');
const breadthTraverse = s.breadthTraverse;
const depthTraverse = s.depthTraverse;

const t = {
  "value": 1,
  "left": {
      "value": 2,
      "left": null,
      "right": {
          "value": 3,
          "left": null,
          "right": null
      }
  },
  "right": {
      "value": 4,
      "left": {
          "value": 5,
          "left": null,
          "right": null
      },
      "right": null
  }
};

test('traverse tree - breadth', () => {
    expect(breadthTraverse(t)).toEqual([1, 2, 4, 3, 5]);
});

test('traverse tree - depth', () => {
    expect(depthTraverse(t)).toEqual([1, 2, 3, 4, 5]);
});


