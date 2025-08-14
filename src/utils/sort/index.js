export function bubbleSort(array) {
  const len = array.length;
  if (len < 2) return array;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[i]) {
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}
export function insertSort(array) {
  const len = array.length;
  let current;
  let prev;
  for (let i = 1; i < len; i++) {
    current = array[i];
    prev = i - 1;
    while (prev >= 0 && array[prev] > current) {
      array[prev + 1] = array[prev];
      prev--;
    }
    array[prev + 1] = current;
  }
  return array;
}
