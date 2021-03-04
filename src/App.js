import React, { Component, Fragment } from "react";
import NavBar from "./components/navBar";
import Table from "./components/table";
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
      array.push({ id: i, height: Math.floor(Math.random() * 500) + 20 });
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

  render() {
    const { bars } = this.state;
    return (
      <Fragment>
        <NavBar
          arraySize={bars.length === 0 ? 78 : bars.length}
          onChangeRandomizeArray={this.handleRandomizeArray}
          onChangeArraySize={this.handleArraySizeChange}
        />
        <Table bars={bars} />
      </Fragment>
    );
  }
}

export default App;
