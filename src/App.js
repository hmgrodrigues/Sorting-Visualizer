import React, { Fragment, useState, useEffect, useCallback } from "react";
import NavBar from "./components/navBar";
import Table from "./components/table";
import { randomize } from "./algorithms/utils";
import { bubbleSort } from "./algorithms/bubbleSort";
import "./App.css";

const START_POINT = 78;

function App() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    setBars(randomize(START_POINT));
  }, []);

  const handleBubbleSort = useCallback(() => {
    const unsortedBars = [...bars];
    setBars(bubbleSort(unsortedBars));
  }, [bars]);

  return (
    <Fragment>
      <NavBar
        arraySize={bars.length === 0 ? START_POINT : bars.length}
        onClickRandomizeArray={() => setBars(randomize(bars.length))}
        onChangeArraySize={(e) => setBars(randomize(e.target.value))}
        onClickBubbleSort={handleBubbleSort}
      />
      <Table bars={bars} />
    </Fragment>
  );
}

export default App;
