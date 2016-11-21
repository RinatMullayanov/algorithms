import { memoized } from '../lib/memoized';
/**
 * Recursive memoized Fibonacci
 * https://www.sitepoint.com/implementing-memoization-in-javascript/
 */
export const memoizedFibonacci: (n: number) => number = memoized(function (n: number) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
  }
});
