import { IST } from  './st';

/**
 * Symbol table implementation with unordered array
 * taken as a basis http://algs4.cs.princeton.edu/31elementary/ArrayST.java.html
 */
export class ArrayST<Key, Value> implements IST<Key, Value> {
  private vals: Value[];
  private keys: Key[];
  private count: number;

  constructor() {
    this.vals = [];
    this.keys = [];
    this.count = 0;
  }

  public put(key: Key, val: Value): void {
    // to deal with duplicates
    this.delete(key);

    // add new key and value at the end of array    
    this.vals.push(val);
    this.keys.push(key);
    this.count++;
  }

  public get(key: Key): Value {
    const index = this.keys.indexOf(key);
    if (index > -1) {
      return this.vals[index];
    }

    return null;
  }

  public delete(key: Key): void {
    const index = this.keys.indexOf(key);
    if (index > -1) {
      this.keys.splice(index, 1);
      this.vals.splice(index, 1);
    }
  }

  public contains(key: Key): boolean {
    return this.keys.indexOf(key) > -1;
  }

  public size(): number {
    return this.count;
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public getKeys(): Key[] {
     return this.keys;
  }
}
