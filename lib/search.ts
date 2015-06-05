/// <reference path="../typings/lodash/lodash.d.ts" />
import _ = require('lodash');
import ST = require('./st');

//  Symbol table implementation with unordered array
class ArrayST<Key, Value> implements ST<Key, Value> {
  private vals: Value[];
  private keys: Key[];
  private count: number;
  
  constructor() {
    this.vals = [];
    this.keys = [];
    this.count = 0;
  }
  
  put(key: Key, val: Value): void {
    // to deal with duplicates
    this.delete(key);
    
    // add new key and value at the end of array    
    this.vals.push(val);
    this.keys.push(key);
    this.count++;
  }

  get(key: Key): Value {
    var index = this.keys.indexOf(key);
    if(index > -1) {
      return this.vals[index];
    }

    return null;
  }

  delete(key: Key): void {
    var index = this.keys.indexOf(key);
    if (index > -1) {
      this.keys.splice(index, 1);
      this.vals.splice(index, 1);      
    }
  }

  contains(key: Key): boolean {
    return this.keys.indexOf(key) > -1;
  }

  size(): number {
    return this.count;
  }
  
  isEmpty(): boolean {
    return this.size() === 0;
  }

  getKeys(): Key[] {
     return this.keys;
  }
}

export = ArrayST;