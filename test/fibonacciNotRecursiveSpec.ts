import { fibonacci } from '../lib/fibonacciNotRecursive';
import { sharedFibonacciBehavior } from './sharedFibonacciBehavior';

describe('Not recursive Fibonacci', function () {
  // run before every test
  beforeEach(function () {
    // do something
  });

  sharedFibonacciBehavior(fibonacci);
});
