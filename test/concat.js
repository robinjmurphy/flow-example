//@flow

const assert = require('assert');
const concat = require('../src/concat');

describe('concat', () => {
  it('concatenates two strings', () => {
    assert.equal(concat('foo', 'bar'), 'foobar');
  });
});
