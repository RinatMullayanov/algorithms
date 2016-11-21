export function memoized(fn: any, keymakerFunc?: any) {
  const lookupTable: {
    [prop: string]: any,
  } = {};
  const keymaker = keymakerFunc || function(args: any) {
      return JSON.stringify(args);
    };

  return function() {
    let key = keymaker.call(this, arguments);
    if (!lookupTable[key]) {
      lookupTable[key] = fn.apply(this, arguments);
    }
    return lookupTable[key];
  };
}
