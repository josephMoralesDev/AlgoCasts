const isBalanced = require('./index');

const isB = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: null
  },
  right: {
    value: 3,
    left: null,
    right: null,
  }
}

const notB = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 5,
        left: null,
        right: null
      },
      right: null,
    },
    right: null
  },
  right: {
    value: 3,
    left: null,
    right: null,
  }
}

const reallyNotB = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: null
  },
  right: {
    value: 3,
    left: null,
    right: {
      value: 5,
      left: null,
      right: {
        value: 3,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: null
      }
    }
  }
}

test('confirms if tree is balanced', () => {
  expect(isBalanced(isB)).toEqual(true);
});

test('confirms if tree is not balanced', () => {
  expect(isBalanced(notB)).toEqual(false);
  expect(isBalanced(reallyNotB)).toEqual(false);
});
