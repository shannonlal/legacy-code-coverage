const assert  = require('assert');

const {multiply} = require('../src/multiply');

describe('multiply example', function () {
  describe('multiply', function () {
    it('multplies 1 x 1', function () {
      assert.equal(multiply(1, 1), 1);
    });

    it('multiply 2 x 2', function () {
        assert.equal(multiply(2, 2), 4);
      });
  });
});