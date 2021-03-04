import React from "react";

const NavBar = ({ arraySize, onChangeRandomizeArray, onChangeArraySize }) => {
  return (
    <div id="navbar">
      <button
        type="button"
        className="btn btn-outline-light randomize"
        onClick={onChangeRandomizeArray}
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
      <button type="button" className="btn btn-primary algorithm">
        Bubble Sort
      </button>
      <button type="button" className="btn btn-secondary algorithm ">
        Merge Sort
      </button>
      <button type="button" className="btn btn-success algorithm">
        Quick Sort
      </button>
      <button type="button" className="btn btn-danger algorithm">
        Heap Sort
      </button>
    </div>
  );
};

export default NavBar;