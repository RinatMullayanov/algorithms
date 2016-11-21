import { memoizedFibonacci } from '../lib/fibonacciRecursiveMemoized';
import { sharedFibonacciBehavior } from './sharedFibonacciBehavior';

describe('Recursive memoized Fibonacci', function () {
  // run before every test
  beforeEach(function () {
    // do something
  });

  sharedFibonacciBehavior(memoizedFibonacci);
});
