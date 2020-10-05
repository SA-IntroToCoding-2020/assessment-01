var assert = require('assert');
var index = require('../index');

describe('cube', function () {
    it('cube(2) should return 8', function () {
      assert.equal(index.cube(2), 8);
    });
});