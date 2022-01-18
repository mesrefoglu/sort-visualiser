import React from "react";
import Logo from "../logo/Logo";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Toolbar.css";

function Toolbar() {
  
  const generateArray = () => {
    console.log("Array Will Be Generated");
  };

  function selectAlg(algStr) {
    document.getElementById("alg-select").innerHTML = algStr;
  }

  function selectNR(nr) {
    document.getElementById("normal-reverse").innerHTML = nr;
  }

  return (
    <div className="Toolbar">
      <Logo />
      <Button variant="" disabled>Number of elements:</Button>
      <input type="number" id="name" style={{width: "5vw", right: "10vw"}} />
      <Button id="generate-array" variant="" onClick={generateArray}>Generate Array</Button>
      <div style={{width: ".15vw", height: "10vh", background: "#ae77b4"}}></div>
      <DropdownButton id="alg-select" variant="" title="Insertion Sort" style={{width: "10vw"}}>
        <Dropdown.Item href="#" onClick={() => selectAlg("Insertion Sort")}>
          Insertion Sort
        </Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => selectAlg("Quicksort")}>
          Quicksort
        </Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => selectAlg("Bubble Sort")}>
          Bubble Sort
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton id="normal-reverse" variant="" title="Normal" style={{width: "7vw"}}>
        <Dropdown.Item href="#" onClick={() => selectNR("Normal")}>
          Normal
        </Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => selectNR("Reverse")}>
          Reverse
        </Dropdown.Item>
      </DropdownButton>
      <div style={{width: ".15vw", height: "10vh", background: "#ae77b4"}}></div>
      <Button id="run" variant="" onClick={generateArray}>Sort it!</Button>
    </div>
  );
}

export default Toolbar;
