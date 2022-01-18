import React from 'react';
import "./Element.css";

function Element({i, total, widthStr}) {

  const heightStr = (80 * (i + 1) / total).toFixed(2) + "vh";

  return (
    <div className="Element" style={{width: widthStr, height: heightStr}} />
  )
}

export default Element;
