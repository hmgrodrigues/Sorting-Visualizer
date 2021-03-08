import { swapElements } from "./utils";

// Main function that implements Heap Sort
function heapSort(arr, n) {
  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);

  // One by one extract an element from the heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    swapElements(arr, 0, i);
    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
}

function heapify(arr, n, i) {
  let largest = i; //Initialize largest as root
  let l = 2 * i + 1; //left
  let r = 2 * i + 2; //right

  // If left child is larger than root
  if (l < n && arr[l] > arr[largest]) largest = l;

  // If right child is larger than largest so far
  if (r < n && arr[r] > arr[largest]) largest = r;

  // If largest is not root
  if (largest != i) {
    swapElements(arr, i, largest);

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}
