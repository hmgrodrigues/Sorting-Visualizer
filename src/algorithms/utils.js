export function randomize(arraySize) {
  const array = [];

  for (let i = 0; i < arraySize; i++)
    array.push({
      id: i,
      height: Math.floor(Math.random() * 500) + 20,
    });

  return array;
}
