const cache = new Map();

function add(...args) {
  return args.reduce((sum, currentValue) => sum + currentValue, 0);
}

const memoizeAdd = memoize(add);

memoizeAdd(100, 100);
memoizeAdd(100);
memoizeAdd(100, 200);
memoizeAdd(100, 100);

function memoize(add) {
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) return cache.get(key);
    cache.set(key, add(...args));
    return cache.get(key);
  };
}
