import React from "react";

const NavBar = ({
  arraySize,
  onClickRandomizeArray,
  onChangeArraySize,
  onClickMergeSort,
  onClickQuickSort,
  onClickHeapSort,
  onClickBubbleSort,
  isRunning,
}) => {
  return (
    <div id="navbar">
      <button
        type="button"
        className="btn btn-outline-light randomize"
        onClick={onClickRandomizeArray}
        disabled={isRunning}
      >
        Randomize Array
      </button>
      <div className="sliderContainer">
        <h5>Array Size: {arraySize}</h5>
        <input
          type="range"
          min="5"
          max="150"
          step="2"
          value={arraySize}
          className={`slider ${!isRunning ? "active" : "blocked"}`}
          onInput={onChangeArraySize}
          disabled={isRunning}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary algorithm "
        onClick={onClickMergeSort}
        disabled={isRunning}
      >
        Merge Sort
      </button>
      <button
        type="button"
        className="btn btn-success algorithm"
        onClick={onClickQuickSort}
        disabled={isRunning}
      >
        Quick Sort
      </button>
      <button
        type="button"
        className="btn btn-danger algorithm"
        onClick={onClickHeapSort}
        disabled={isRunning}
      >
        Heap Sort
      </button>
      <button
        type="button"
        className="btn btn-secondary algorithm"
        onClick={onClickBubbleSort}
        disabled={isRunning}
      >
        Bubble Sort
      </button>
    </div>
  );
};

export default NavBar;
