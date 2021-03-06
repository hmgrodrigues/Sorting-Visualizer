// Main function to sort
function sort(arr, l, r) {
  if (l < r) {
    // Middle point
    const m = Math.floor((l + r) / 2);

    // Sort first and second halves
    sort(arr, l, m);
    sort(arr, m + 1, r);

    //Merge the sorted halves
    merge(arr, l, m, r);
  }
}

// Merges two subarrays of arr[]
// Arrays: arr[l...m] & arr[m+1...r]
function merge(arr, l, m, r) {
  // Sizes of the arrays
  const n1 = m - l + 1;
  const n2 = r - m;

  // Aux arrays
  const L = [];
  const R = [];
  for (let i = 0; i < n1; i++) L[i] = arr[l + i];
  for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  // Merge the Aux arrays
  let i = 0,
    j = 0;

  let k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}
