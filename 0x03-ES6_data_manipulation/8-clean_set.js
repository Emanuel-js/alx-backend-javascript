export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  if (typeof set !== 'object') {
    return '';
  }
  const newStr = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      newStr.push(item.slice(startString.length));
    }
  }
  return newStr.join('-');
}
