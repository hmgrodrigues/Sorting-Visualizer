import React, { Component, Fragment } from "react";
import NavBar from "./components/navBar";
import Table from "./components/table";
// import { bubbleSort } from "./algorithms/bubbleSort";
import "./App.css";

class App extends Component {
  state = {
    bars: [],
  };

  componentDidMount() {
    const bars = this.generateRandom(78);
    this.setState({ bars });
  }

  generateRandom(arraySize) {
    const array = [];
    for (let i = 0; i < arraySize; i++)
      array.push({
        id: i,
        height: Math.floor(Math.random() * 500) + 20,
      });
    return array;
  }

  handleRandomizeArray = () => {
    const bars = this.generateRandom(this.state.bars.length);
    this.setState({ bars });
  };

  handleArraySizeChange = (e) => {
    const bars = this.generateRandom(e.target.value);
    this.setState({ bars });
  };

  bubbleSort(array) {
    let count = -1;

    while (count !== 0) {
      count = 0;
      for (let i = 0; i < array.length - 1; i++) {
        let current = array[i];
        let next = array[i + 1];
        // current.status = "eval";
        // next.status = "eval";
        if (current.height > next.height) {
          const aux = array[i];
          array[i] = array[i + 1];
          array[i + 1] = aux;
          count++;
        }
      }
    }
    return array;
  }

  handleBubbleSort = () => {
    const unsortedBars = [...this.state.bars];
    const bars = this.bubbleSort(unsortedBars);
    this.setState({ bars });
  };

  render() {
    const { bars } = this.state;
    return (
      <Fragment>
        <NavBar
          arraySize={bars.length === 0 ? 78 : bars.length}
          onClickRandomizeArray={this.handleRandomizeArray}
          onChangeArraySize={this.handleArraySizeChange}
          onClickBubbleSort={this.handleBubbleSort}
        />
        <Table bars={bars} />
      </Fragment>
    );
  }
}

export default App;
