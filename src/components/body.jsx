import React from "react";
import VerticalBar from "../common/verticalBar";

const Body = ({ bars }) => {
  const width = 450 / bars.length;
  const marginRight =
    bars.length <= 5
      ? 10
      : bars.length <= 10
      ? 8
      : bars.length <= 15
      ? 6
      : bars.length <= 20
      ? 4
      : bars.length <= 50
      ? 3.5
      : bars.length <= 100
      ? 3
      : 2;
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
};

export default Body;
