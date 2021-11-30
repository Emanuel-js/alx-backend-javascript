const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  let cnt = weakMap.has(endpoint) ? weakMap.get(endpoint) : 0;

  cnt += 1;
  weakMap.set(endpoint, cnt);
  if (cnt >= 5) {
    throw Error('Endpoint load is high');
  }
  return cnt;
};

export { weakMap, queryAPI };
