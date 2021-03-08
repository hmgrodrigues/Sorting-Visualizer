import { swapElements } from "./utils";

function bubbleSort(array) {
  if (n === 1) return;

  for (let i = 0; i < n - 1; i++)
    if (arr[i] > arr[i + 1]) swapElements(arr, i, i + 1);

  bubbleSort(arr, n - 1, delay);
}
