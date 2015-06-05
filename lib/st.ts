//API for a generic basic symbol table
interface ST<Key, Value> {
  put(key: Key, val: Value): void;
  get(key: Key): Value;
  delete(key: Key): void;
  contains(key: Key): boolean;
  isEmpty(): boolean;
  size(): number;
  getKeys(): Key[];
}

export = ST;