import React from "react";

const VerticalBar = ({ width, height }) => {
  const style = {
    display: "inline-block",
    borderLeft: `${width}px solid gray`,
    height: `${height}px`,
    marginRight: "10px",
  };
  return <div className="verticalBar" style={style}></div>;
};

export default VerticalBar;
