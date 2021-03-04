import React from "react";

const VerticalBar = ({ width, height, marginRight, status }) => {
  const color = !status
    ? "gray"
    : status === "eval"
    ? "green"
    : status === "swap"
    ? "red"
    : "black";

  const style = {
    borderLeft: `${width}px solid ${color}`,
    height: `${height}px`,
    marginRight: `${marginRight}px`,
  };

  return <div style={style} className="regular"></div>;
};

export default VerticalBar;
