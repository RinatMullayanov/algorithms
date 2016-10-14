/**
 * API for a generic basic symbol table
 */
export interface IST<Key, Value> {
  put(key: Key, val: Value): void;
  get(key: Key): Value;
  delete(key: Key): void;
  contains(key: Key): boolean;
  isEmpty(): boolean;
  size(): number;
  getKeys(): Key[];
}
