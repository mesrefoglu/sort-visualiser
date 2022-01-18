import React from 'react';
import "./Element.css";

function Element({index, total, widthStr}) {

  const heightStr = toString(1 + 80 * (index + 1) / total) + "vh";

  return (
    <div className="Element" style={{width: widthStr, height: heightStr}} />
  )
}

export default Element;
