import React, { Fragment, useState, useEffect } from "react";
import NavBar from "./components/navBar";
import Body from "./components/body";
import { randomize, swapElements } from "./algorithms/utils";
// import { bubbleSort } from "./algorithms/bubbleSort";
import "./App.css";

const START_POINT = 78;

function App() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    setBars(randomize(START_POINT));
  }, []);

  const bubbleSort = () => {
    const unsortedBars = [...bars];

    const ACC = 10;
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
      colorElements(unsortedBars, [j], delay, "done");
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
        colorElements(unsortedBars, [remaining], delay, "done");
        delay += ACC;
      }
    }
  };

  const colorElements = (array, elements, delay, action) => {
    const newArray = array.map((bar) => {
      return { ...bar };
    });
    elements.forEach((el) => (newArray[el].status = action));
    delayAnimation(newArray, delay);
  };

  const delayAnimation = (array, delay) => {
    setTimeout(() => {
      setBars([...array]);
    }, delay);
  };

  return (
    <Fragment>
      <NavBar
        arraySize={bars.length === 0 ? START_POINT : bars.length}
        onClickRandomizeArray={() => setBars(randomize(bars.length))}
        onChangeArraySize={(e) => setBars(randomize(e.target.value))}
        onClickBubbleSort={bubbleSort}
      />
      <Body bars={bars} />
    </Fragment>
  );
}

export default App;
