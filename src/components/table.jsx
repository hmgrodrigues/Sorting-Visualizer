import React, { Component } from "react";
import VerticalBar from "../common/verticalBar";

class Table extends Component {
  state = {};

  render() {
    const { bars } = this.props;
    const width = 300 / bars.length;
    const marginRight = 2;
    return (
      <div className="tableContainer">
        {bars.map((bar) => (
          <VerticalBar
            key={bar.id}
            height={bar.height}
            width={width}
            marginRight={marginRight}
            status={bar.status ? bar.status : null}
          />
        ))}
      </div>
    );
  }
}

export default Table;
