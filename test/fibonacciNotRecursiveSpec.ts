import { expect } from 'chai';

import { fibonacci } from '../lib/fibonacciNotRecursive';

describe('Not recursive Fibonacci', function () {
  // run before every test
  beforeEach(function () {
    // do something
  });

  it('F(0)', function () {
    const expected = 0;
    const actual = fibonacci(0);

    expect(actual).to.deep.equal(expected);
  });

  it('F(1)', function () {
    const expected = 1;
    const actual = fibonacci(1);

    expect(actual).to.deep.equal(expected);
  });

  it('F(2)', function () {
    const expected = 1;
    const actual = fibonacci(2);

    expect(actual).to.deep.equal(expected);
  });

  it('F(3)', function () {
    const expected = 2;
    const actual = fibonacci(3);

    expect(actual).to.deep.equal(expected);
  });

  it('F(4)', function () {
    const expected = 3;
    const actual = fibonacci(4);

    expect(actual).to.deep.equal(expected);
  });

  it('F(5)', function () {
    const expected = 5;
    const actual = fibonacci(5);

    expect(actual).to.deep.equal(expected);
  });

  it('F(8)', function () {
    const expected = 21;
    const actual = fibonacci(8);

    expect(actual).to.deep.equal(expected);
  });

  it('F(14)', function () {
    const expected = 377;
    const actual = fibonacci(14);

    expect(actual).to.deep.equal(expected);
  });

  it('F(20)', function () {
    const expected = 6765;
    const actual = fibonacci(20);

    expect(actual).to.deep.equal(expected);
  });

  it('F(21)', function () {
    const expected = 10946;
    const actual = fibonacci(21);

    expect(actual).to.deep.equal(expected);
  });

  it('F(50)', function () {
    const expected = 12586269025;
    const actual = fibonacci(50);

    expect(actual).to.deep.equal(expected);
  });
});
