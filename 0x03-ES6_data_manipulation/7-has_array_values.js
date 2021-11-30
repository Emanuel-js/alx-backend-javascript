export default function hasValuesFromArray(array, set) {
  return array.every((item) => set.has(item));
}
