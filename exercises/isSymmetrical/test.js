const isSymettrical = require('./index.js');

const tA = {
  value: 4,
  left: {
    value: 5,
    left: {
      value: 7,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null,
    }
  },
  right: {
    value: 5,
    left: {
      value: 8,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null
    }
  }
};

const tB = {
  value: 4,
  left: {
    value: 5,
    left: {
      value: 7,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null,
    }
  },
  right: {
    value: 5,
    left: {
      value: 8,
      left: null,
      right: null,
    },
    right: null
  }
};

test('is symettrical is a function', () => {
  expect(typeof isSymettrical).toEqual('function');
});

test('Big tree is symmetrical', () => {
  expect(isSymettrical(tA)).toEqual(true);
});

test('Big tree is not symmetrical', () => {
  expect(isSymettrical(tB)).toEqual(false);
})
