/**
 * Implementation of the standard search algorithms based on the book -
 * Introduction to Algorithms, third edition http://mitpress.mit.edu/books/introduction-algorithms
 */
export class Sort {
  public insertionSort(array: any[]): any[] {
    let i: number;
    let j: number;
    let length: number;
    let key: number;

    // http://stackoverflow.com/questions/3978492/javascript-fastest-way-to-duplicate-an-array-slice-vs-for-loop
    let A = array.slice(0); // shallow copy array

    for (j = 1, length = A.length; j < length; j++) {
      key = A[j];
      i = j - 1;

      while (i >= 0 && A[i] > key) {
        A[i + 1] = A[i];
        i = i - 1;
      }

      A[i + 1] = key;
    }

    return A;
  }

  public mergeSort(array: any[]): any[] {
    if (array.length < 2) {
      return array;
    }

    const middle = Math.floor(array.length / 2);
    // slice - get part array from start to end - 1
    const left = array.slice(0, middle);
    const right = array.slice(middle, array.length);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  private merge(left: any[], right: any[]): any[] {
    let result: any[] = [];

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while (left.length) {
      result.push(left.shift());
    }

    while (right.length) {
      result.push(right.shift());
    }

    return result;
  }
}
