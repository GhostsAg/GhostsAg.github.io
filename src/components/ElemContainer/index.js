import React from "react";
import "./style.css";

function ElemContainer(props) {
  return <div className="elemContainer">{props.children}</div>;
}

export default ElemContainer;
