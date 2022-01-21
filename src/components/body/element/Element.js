import React from "react";
import "./Element.css";

function Element({ i, total, widthStr }) {
  // calculates the height based on it's "right" order (from small to big) and the total number of elements
  const heightStr = ((80 * (i + 1)) / total).toFixed(2) + "vh";
  console.log(i, heightStr);
  return (
    <div className="Element" style={{ width: widthStr, height: heightStr }} />
  );
}

export default Element;
