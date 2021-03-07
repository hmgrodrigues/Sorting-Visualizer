import React from "react";

const NavBar = ({
  arraySize,
  onClickRandomizeArray,
  onChangeArraySize,
  onClickBubbleSort,
  onClickMergeSort,
  onClickQuickSort,
  onClickHeapSort,
}) => {
  return (
    <div id="navbar">
      <button
        type="button"
        className="btn btn-outline-light randomize"
        onClick={onClickRandomizeArray}
      >
        Randomize Array
      </button>
      <div className="sliderContainer">
        <h5>Array Size</h5>
        <input
          type="range"
          min="5"
          max="150"
          step="2"
          value={arraySize}
          className="slider"
          onChange={onChangeArraySize}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary algorithm"
        onClick={onClickBubbleSort}
      >
        Bubble Sort
      </button>
      <button
        type="button"
        className="btn btn-secondary algorithm "
        onClick={onClickMergeSort}
      >
        Merge Sort
      </button>
      <button
        type="button"
        className="btn btn-success algorithm"
        onClick={onClickQuickSort}
      >
        Quick Sort
      </button>
      <button
        type="button"
        className="btn btn-danger algorithm"
        onClick={onClickHeapSort}
      >
        Heap Sort
      </button>
    </div>
  );
};

export default NavBar;
