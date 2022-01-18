import React from 'react';
import "./Element.css";

function Element({index, total, widthStr}) {

  const heightStr = (80 * (index + 1) / total).toFixed(2) + "vh";

  return (
    <div className="Element" style={{width: widthStr, height: heightStr}} />
  )
}

export default Element;
