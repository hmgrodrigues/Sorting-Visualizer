import { swapElements } from "./utils";

// Main function that implements QuickSort
function quickSort(arr, low, high) {
  if (low < high) {
    // Partition index, and arr[pivot] is at the correct position
    const pivot = partition(arr, low, high);

    // Separately sort elements before partition and after partition
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
}

// The function takes last element as pivot and places it at its correct position
// Places all smaller to the left and all greater to the right
function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      swapElements(arr, ++i, j);
    }
  }
  swapElements(arr, i + 1, high);
  return i + 1;
}
