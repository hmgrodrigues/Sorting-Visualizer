import React, { Fragment, useState, useEffect } from "react";
import NavBar from "./components/navBar";
import Body from "./components/body";
import { randomize, swapElements } from "./algorithms/utils";
import "./App.css";

const START_POINT = 78;
// const ACC = 1000;

function App() {
  const [size, setSize] = useState(0);
  const [bars, setBars] = useState([]);
  const [running, setRunning] = useState(false);

  //Array to operate in algorithms
  const unsortedBars = [...bars];
  const ACC = 1200 - Math.pow(size, 2) > 0 ? 1200 - Math.pow(size, 2) : 0;

  useEffect(() => {
    setSize(START_POINT);
    setRunning(false);
  }, []);

  useEffect(() => {
    setBars(randomize(size));
  }, [size]);

  const delayRunning = (run, delay) => {
    setTimeout(() => {
      setRunning(run);
    }, delay);
  };

  // Bubble Sort
  const handleBubbleSort = () => {
    // delayRunning(true, 10);
    const delay = bubbleSort(unsortedBars, ACC);
    // delayRunning(false, delay);
  };

  const bubbleSort = (arr, delay) => {
    let stop = null;
    for (var i = 0; i < arr.length; i++) {
      stop = true;

      for (var j = 0; j < arr.length - i - 1; j++) {
        colorElements(arr, [j, j + 1], delay, "eval");
        delay += ACC;

        if (arr[j].height > arr[j + 1].height) {
          colorElements(arr, [j, j + 1], delay, "swap");
          delay += ACC;
          swapElements(arr, j, j + 1);
          colorElements(arr, [j, j + 1], delay, "eval");
          delay += ACC;
          stop = false;
        }
      }
      arr[j].status = "done";
      colorElements(arr, [], delay);
      delay += ACC;

      if (stop) break;
    }

    if (stop) {
      for (let remaining = 0; remaining < arr.length - i - 1; remaining++) {
        arr[remaining].status = "done";
        colorElements(arr, [], delay);
        delay += ACC;
      }
    }

    return delay;
  };

  // Merge Sort
  const handleMergeSort = () => {
    // setRunning(true);
    const unsortedBars = [...bars];
    const delay = mergeSort(
      unsortedBars,
      0,
      unsortedBars.length - 1,
      ACC,
      true
    );
    // endRunning(delay);
  };

  const mergeSort = (arr, l, r, delay, last) => {
    if (l < r) {
      const m = Math.floor((l + r) / 2);

      const delay1 = mergeSort(arr, l, m, delay, false);
      const delay2 = mergeSort(arr, m + 1, r, delay1, false);

      return merge(arr, l, m, r, delay2, last);
    }
    return delay;
  };

  const merge = (arr, l, m, r, delay, last) => {
    const n1 = m - l + 1;
    const n2 = r - m;

    const L = [];
    const R = [];
    for (let i = 0; i < n1; i++) L[i] = arr[l + i];
    for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    let i = 0,
      j = 0;

    let k = l;
    while (i < n1 && j < n2) {
      const lIndex = arr.indexOf(L[i]);
      const rIndex = arr.indexOf(R[j]);
      colorElements(arr, [lIndex, rIndex], delay, "eval");
      delay += ACC;
      if (L[i].height <= R[j].height) {
        arr.splice(lIndex, 1);
        arr.splice(k++, 0, L[i++]);
      } else {
        colorElements(arr, [lIndex, rIndex], delay, "swap");
        delay += ACC;
        arr.splice(rIndex, 1);
        arr.splice(k++, 0, R[j++]);
        colorElements(arr, [k - 1, k], delay, "eval");
        delay += ACC;
      }

      if (last) {
        arr[k - 1].status = "done";
        colorElements(arr, [], delay);
        delay += ACC;
      }
    }

    while (i < n1) {
      arr[k++] = L[i++];
      if (last) {
        arr[k - 1].status = "done";
        colorElements(arr, [], delay);
        delay += ACC;
      }
    }
    while (j < n2) {
      arr[k++] = R[j++];
      if (last) {
        arr[k - 1].status = "done";
        colorElements(arr, [], delay);
        delay += ACC;
      }
    }

    return delay;
  };

  // Quick Sort
  const handleQuickSort = () => {
    // setRunning(true);
    const unsortedBars = [...bars];
    const delay = quickSort(unsortedBars, 0, unsortedBars.length - 1, ACC);
    // endRunning(delay);
  };

  const quickSort = (arr, low, high, delay) => {
    if (low < high) {
      console.log(delay);
      const [pivot, partDelay] = partition(arr, low, high, delay);

      const leftDelay = quickSort(arr, low, pivot - 1, partDelay);
      return quickSort(arr, pivot + 1, high, leftDelay);
    } else if (low < arr.length) {
      arr[low].status = "done";
      colorElements(arr, [], delay);
      return delay + ACC;
    }
    return delay;
  };

  function partition(arr, low, high, delay) {
    arr[high].status = "pivot";

    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      colorElements(arr, [i + 1, j], delay, "eval");
      delay += ACC;
      if (arr[j].height < pivot.height) {
        colorElements(arr, [i + 1, j], delay, "swap");
        delay += ACC;
        swapElements(arr, ++i, j);
        colorElements(arr, [i, j], delay, "eval");
        delay += ACC;
      }
    }

    colorElements(arr, [i + 1, high], delay, "swap");
    delay += ACC;
    swapElements(arr, i + 1, high);
    colorElements(arr, [i + 1, high], delay, "eval");
    delay += ACC;
    arr[i + 1].status = "done";
    colorElements(arr, [], delay);
    delay += ACC;
    return [i + 1, delay];
  }

  // Heap Sort
  const handleHeapSort = () => {
    // setRunning(true);
    const unsortedBars = [...bars];
    const delay = heapSort(unsortedBars, unsortedBars.length);
    // endRunning(delay);
  };

  const heapSort = (arr, n) => {
    let delay = ACC;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      delay = heapify(arr, n, i, delay);
    }

    for (let i = n - 1; i > 0; i--) {
      colorElements(arr, [0, i], delay, "swap");
      delay += ACC;
      swapElements(arr, 0, i);
      arr[i].status = "done";
      colorElements(arr, [], delay);
      delay += ACC;
      delay = heapify(arr, i, 0, delay);
    }
    arr[0].status = "done";
    colorElements(arr, [], delay);
    return delay;
  };

  const heapify = (arr, n, i, delay) => {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n) {
      colorElements(arr, [l, largest], delay, "heapCheck");
      delay += ACC;
      if (arr[l].height > arr[largest].height) largest = l;
    }

    if (r < n) {
      colorElements(arr, [r, largest], delay, "heapCheck");
      delay += ACC;
      if (arr[r].height > arr[largest].height) largest = r;
    }

    if (largest !== i) {
      colorElements(arr, [i, largest], delay, "swap");
      delay += ACC;
      swapElements(arr, i, largest);
      colorElements(arr, [i, largest], delay, "eval");
      delay += ACC;
      delay = heapify(arr, n, largest, delay);
    }

    return delay;
  };

  const colorElements = (arr, elements, delay, action) => {
    const newArr = arr.map((bar) => {
      return { ...bar };
    });
    if (action) elements.forEach((el) => (newArr[el].status = action));
    delayAnimation(newArr, delay);
  };

  const delayAnimation = (arr, delay) => {
    setTimeout(() => {
      setBars(arr);
    }, delay);
  };

  return (
    <Fragment>
      <NavBar
        arraySize={size}
        onClickRandomizeArray={() => setBars(randomize(size))}
        onChangeArraySize={(e) => setSize(e.target.value)}
        onClickBubbleSort={handleBubbleSort}
        onClickMergeSort={handleMergeSort}
        onClickQuickSort={handleQuickSort}
        onClickHeapSort={handleHeapSort}
        isRunning={running}
      />
      <Body bars={bars} />
    </Fragment>
  );
}

export default App;
