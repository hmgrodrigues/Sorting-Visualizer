import React, { Component } from "react";
import VerticalBar from "../common/verticalBar";

class Table extends Component {
  state = {};

  render() {
    const { bars } = this.props;
    const width = bars.length * 0.1;
    return (
      <div className="tableContainer">
        {bars.map((bar) => (
          <VerticalBar key={bar.id} height={bar.height} width={width} />
        ))}
      </div>
    );
  }
}

export default Table;
