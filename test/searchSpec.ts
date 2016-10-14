import { assert } from 'chai';

import { ArrayST } from '../lib/search';
let st1: ArrayST<any, any>;

describe('ArrayST', function () {
  beforeEach(function () {
    st1 = new ArrayST<number, string>();
  });

  it('test put and get function', function () {
    st1.put(1, 'test1');
    st1.put(2, 'test2');
    const expected = 'test1';

    assert.equal(st1.get(1), expected);
  });
});
