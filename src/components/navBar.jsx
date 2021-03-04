import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div id="navbar">
        <button type="button" className="btn btn-outline-light randomize">
          Randomize Array
        </button>
        <div className="slider">
          <h5>Array Size</h5>
          <input
            type="range"
            min="1"
            max="100"
            step="1"
            className="inputSlider"
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
  }
}

export default NavBar;
