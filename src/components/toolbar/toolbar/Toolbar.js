import React from "react";
import ReactDOM from "react-dom";
import Logo from "../logo/Logo";
import Element from "../../body/element/Element";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Toolbar.css";

function Toolbar() {
  var array = [];
  var arrElem = [];

  const generateArray = () => {
    var num = document.getElementById("num").value;
    array = Array.from(Array(parseInt(num)).keys());

    // Durstenfeld shuffle, https://stackoverflow.com/a/12646864/8620432
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    generateElements(array);
  };

  function handleOnDragEnd(result) {
    var items = Array.from(arrElem);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    arrElem = items.slice();
  }

  function generateElements(arr) {
    arrElem = [];
    var dragdrop;
    const total = arr.length;
    const widthStr = (90.0 / total).toFixed(2) + "vw";
    for (let i = 0; i < total; i++) {
      arrElem.push({ i: arr[i], total: total, widthStr: widthStr });
    }

    dragdrop = (
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="elements" direction="horizontal">
          {(provided) => (
            <ul
              className="elements"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {arrElem.map(({ i, total, widthStr }, index) => {
                return (
                  <Draggable
                    key={i.toString()}
                    draggableId={i.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {React.createElement(
                          Element,
                          {
                            i: i,
                            total: total,
                            widthStr: widthStr,
                          },
                          ""
                        )}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    );
    ReactDOM.render(dragdrop, document.getElementById("holder"));
  }

  function selectAlg(algStr) {
    document.getElementById("alg-select").innerHTML = algStr;
  }

  function selectNR(nr) {
    document.getElementById("normal-reverse").innerHTML = nr;
  }

  return (
    <div className="Toolbar">
      <Logo />
      <div>Number of elements:</div>
      <input
        type="text"
        id="num"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        style={{ width: "2.5em" }}
        maxLength={3}
      />
      <Button id="generate-array" variant="" onClick={generateArray}>
        Generate Array
      </Button>
      <div
        style={{ width: ".15vw", height: "10vh", background: "#ae77b4" }}
      ></div>
      <DropdownButton
        id="alg-select"
        variant=""
        title="Insertion Sort"
        style={{ width: "12vw" }}
      >
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
      <DropdownButton
        id="normal-reverse"
        variant=""
        title="Normal"
        style={{ width: "9vw" }}
      >
        <Dropdown.Item href="#" onClick={() => selectNR("Normal")}>
          Normal
        </Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => selectNR("Reverse")}>
          Reverse
        </Dropdown.Item>
      </DropdownButton>
      <div
        style={{ width: ".15vw", height: "10vh", background: "#ae77b4" }}
      ></div>
      <Button id="run" variant="" onClick={generateArray}>
        Sort it!
      </Button>
    </div>
  );
}

export default Toolbar;
