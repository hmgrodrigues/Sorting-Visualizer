import React from "react";

const VerticalBar = ({ width, height }) => {
  const style = {
    borderLeft: `${width}px solid gray`,
    height: `${height}px`,
  };

  return <div style={style} className="regularBar"></div>;
};

export default VerticalBar;
