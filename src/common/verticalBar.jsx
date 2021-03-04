import React from "react";

const VerticalBar = ({ width, height, marginRight }) => {
  const style = {
    borderLeft: `${width}px solid gray`,
    height: `${height}px`,
    marginRight: `${marginRight}px`,
  };

  return <div style={style} className="regularBar"></div>;
};

export default VerticalBar;
