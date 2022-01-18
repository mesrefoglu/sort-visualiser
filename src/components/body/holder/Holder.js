import React from 'react';
import ReactDOM from 'react-dom';
import Element from '../element/Element'
import "./Holder.css";

function Holder() {

  var arrElem = [];

  function generateElements(arr) {
    arrElem = [];
    var reactfrag;
    const total = arr.length;
    const widthStr = (90.0 / total).toFixed(2) + "vw";
    for(let i = 0; i < total; i++) {
      arrElem.push(React.createElement(Element, {index: arr[i], total: total, widthStr: widthStr}, ''));
    }
    reactfrag = <React.Fragment>{arrElem.map(item => <div key={Math.random()}>{item}</div>)}</React.Fragment>
    ReactDOM.render(reactfrag, document.getElementById("holder"));
  }

  return (
    <div className="Holder" id="holder" onClick={() => generateElements(Array.from(Array(10).keys()))} />
  )
}

export default Holder;
