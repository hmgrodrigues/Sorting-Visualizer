import React, { Fragment, useState, useEffect } from "react";
import NavBar from "./components/navBar";
import Body from "./components/body";
import { randomize, swapElements } from "./algorithms/utils";
import "./App.css";

const START_POINT = 78;
const ACC = 50;

function App() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    setBars(randomize(START_POINT));
  }, []);

  const bubbleSort = () => {
    const unsortedBars = [...bars];
    let delay = ACC;

    let stop = null;
    for (var i = 0; i < unsortedBars.length; i++) {
      stop = true;

      for (var j = 0; j < unsortedBars.length - i - 1; j++) {
        colorElements(unsortedBars, [j, j + 1], delay, "eval");
        delay += ACC;

        if (unsortedBars[j].height > unsortedBars[j + 1].height) {
          colorElements(unsortedBars, [j, j + 1], delay, "swap");
          delay += ACC;
          swapElements(unsortedBars, j, j + 1);
          colorElements(unsortedBars, [j, j + 1], delay, "eval");
          delay += ACC;
          stop = false;
        }
      }
      unsortedBars[j].status = "done";
      colorElements(unsortedBars, [], delay);
      delay += ACC;

      if (stop) break;
    }

    if (stop) {
      for (
        let remaining = 0;
        remaining < unsortedBars.length - i - 1;
        remaining++
      ) {
        unsortedBars[remaining].status = "done";
        colorElements(unsortedBars, [], delay);
        delay += ACC;
      }
    }
  };

  const mergeSort = () => {
    const unsortedBars = [...bars];
    sort(unsortedBars, 0, unsortedBars.length - 1, ACC, true);
  };

  const sort = (arr, l, r, delay, last) => {
    if (l < r) {
      const m = Math.floor((l + r) / 2);

      const delay1 = sort(arr, l, m, delay, false);
      const delay2 = sort(arr, m + 1, r, delay1, false);

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
      colorElements(arr, [l + i, m + 1 + j], delay, "eval");
      delay += ACC;
      if (L[i].height <= R[j].height) {
        arr.splice(arr.indexOf(L[i]), 1);
        arr.splice(k++, 0, L[i++]);
      } else {
        colorElements(
          arr,
          [arr.indexOf(L[i]), arr.indexOf(R[j])],
          delay,
          "swap"
        );
        delay += ACC;
        arr.splice(arr.indexOf(R[j]), 1);
        arr.splice(k++, 0, R[j++]);
      }

      if (last) {
        arr[k - 1].status = "done";
        colorElements(arr, [k - 1], delay);
        delay += ACC;
      }
    }

    while (i < n1) {
      arr[k++] = L[i++];
      if (last) {
        arr[k - 1].status = "done";
        colorElements(arr, [k - 1], delay);
        delay += ACC;
      }
    }
    while (j < n2) {
      arr[k++] = R[j++];
      if (last) {
        arr[k - 1].status = "done";
        colorElements(arr, [k - 1], delay);
        delay += ACC;
      }
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
        arraySize={bars.length === 0 ? START_POINT : bars.length}
        onClickRandomizeArray={() => setBars(randomize(bars.length))}
        onChangeArraySize={(e) => setBars(randomize(e.target.value))}
        onClickBubbleSort={bubbleSort}
        onClickMergeSort={mergeSort}
      />
      <Body bars={bars} />
    </Fragment>
  );
}

export default App;
