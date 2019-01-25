const reverseBST = require('./index.js');

const tA = {
  value: 6,
  left: {
    value: 4,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  },
  right: {
    value: 3,
    left: {
      value: 3,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: null
    }
  }
}

const tB = {
  value: 6,
  left: {
    value: 3,
    left: {
      value: 7,
      left: null,
      right: null
    },
    right: {
      value: 3,
      left: null,
      right: null
    }
  },
  right: {
    value: 4,
    left: {
      value: 8,
      left: null,
      right: null
    },
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}

describe('reverses tree', () => {
  test('reverse BST is a function', () => {
    expect(typeof reverseBST).toEqual('function');
  });

  test('revereses trees correctly', () => {
    expect(reverseBST(tA)).toEqual(tB);
  });
});
