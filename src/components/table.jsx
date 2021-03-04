import React, { Component } from "react";
import VerticalBar from "../common/verticalBar";

class Table extends Component {
  state = {};
  render() {
    return (
      <div className="tableContainer">
        <VerticalBar width={120} height={200} />
        <VerticalBar width={15} height={100} />
      </div>
    );
  }
}

export default Table;
