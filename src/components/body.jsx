import React from "react";
import VerticalBar from "../common/verticalBar";

const Body = ({ bars }) => {
  const width = 400 / bars.length;
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
};

export default Body;
