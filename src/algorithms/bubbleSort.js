export function bubbleSort(array) {
  let count = -1;

  while (count !== 0) {
    count = 0;
    for (let i = 0; i < array.length - i - 1; i++) {
      let current = array[i].height;
      let next = array[i + 1].height;

      if (current > next) {
        const aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        count++;
      }
    }
  }
  return array;
}
