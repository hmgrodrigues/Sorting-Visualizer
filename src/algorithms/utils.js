// Randomize an array with a given size
export const randomize = (arraySize) => {
  const array = [];

  for (let i = 0; i < arraySize; i++)
    array.push({
      id: i,
      height: Math.floor(Math.random() * 500) + 20,
    });

  return array;
};

// Swap elements of an array
export const swapElements = (array, i, j) => {
  let aux = array[i];
  array[i] = array[j];
  array[j] = aux;
};
