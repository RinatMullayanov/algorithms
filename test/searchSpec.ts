/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import chai = require('chai');
var assert = chai.assert;

import ArrayST = require('../lib/search');
var st1;

describe('ArrayST', function () {
  beforeEach(function () {
    st1 = new ArrayST<number, string>();
  });
  
  it('test put and get function', function () {
    st1.put(1, 'test1');
    st1.put(2, 'test2');
    var expected = 'test1';
    
    assert.equal(st1.get(1), expected);
  });
});