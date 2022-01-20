import React from "react";
import ReactDOM from "react-dom";
import Logo from "../logo/Logo";
import Element from "../../body/element/Element";
import sort from "../../../algorithms/sort";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Toolbar.css";

var array = [];
var arrayElem = [];

var alg = "Selection Sort";
var nr = "Normal";

export function updateArray(newArr) {
  array = [...newArr];
}

// generates an array with the entered amount of numbers in random order
const generateArray = () => {
  var num = 0;
  if (document.getElementById("num").value !== "") {
    num = document.getElementById("num").value;
  }
  array = Array.from(Array(parseInt(num)).keys());

  // Durstenfeld shuffle, https://stackoverflow.com/a/12646864/8620432
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  //generates elements (on screen) with the random array
  generateElements(array);
};

// generates the UI elements (rectangles) on the screen with the array given
function generateElements(array) {
  arrayElem = [...array];
  var dragdrop;
  const total = array.length;
  // calculates the width based on the number of elements
  const widthStr = (90.0 / total).toFixed(2) + "vw";

  // creates the whole object to be added to the html
  dragdrop = (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="elements" direction="horizontal">
        {(provided) => (
          <ul
            className="elements"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {arrayElem.map((i, index) => {
              return (
                <Draggable
                  key={i.toString()}
                  draggableId={i.toString()}
                  index={index}
                >
                  {(provided) => (
                    <li
                      id={"e" + index}
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

  //adds it to the html
  ReactDOM.render(dragdrop, document.getElementById("holder"));
}

// changes the elements in the list
function handleOnDragEnd(result) {
  const items = Array.from(arrayElem);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem);
  arrayElem = items.slice();

  const numbers = Array.from(array);
  const [reorderedNumber] = numbers.splice(result.source.index, 1);
  numbers.splice(result.destination.index, 0, reorderedNumber);
  array = numbers.slice();
}

// changes algorithm
function selectAlg(algStr) {
  document.getElementById("alg-select").innerHTML = algStr;
  alg = algStr;
}

// changes between normal/reverse
function selectNR(nR) {
  document.getElementById("normal-reverse").innerHTML = nR;
  nr = nR;
}

// starts sorting
function sortButton() {
  sort(array, alg, nr, 8);
}

function Toolbar() {
  // creates the toolbar
  return (
    <div className="Toolbar">
      {/* Logo */}
      <Logo />

      {/* Input (Text And) Bar */}
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

      {/* Generate Array Button */}
      <Button id="generate-array" variant="" onClick={generateArray}>
        Generate Array
      </Button>

      {/* Drag and Drop Information */}
      <div className="disappear">
        (You can also drag and drop the elements.)
      </div>

      {/* Seperator Line */}
      <div
        style={{ width: ".15vw", height: "10vh", background: "#ae77b4" }}
      ></div>

      {/* Algorithm Chooser Dropdown */}
      <DropdownButton
        id="alg-select"
        variant=""
        title="Selection Sort"
        style={{ width: "12vw" }}
      >
        <Dropdown.Item onClick={() => selectAlg("Selection Sort")}>
          Selection Sort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Bubble Sort")}>
          Bubble Sort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Insertion Sort")}>
          Insertion Sort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Merge Sort")}>
          Merge Sort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Quicksort")}>
          Quicksort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Heap Sort")}>
          Heap Sort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Counting Sort")}>
          Counting Sort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Radix Sort")}>
          Radix Sort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Bucket Sort")}>
          Bucket Sort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Shellsort")}>
          Shellsort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Timsort")}>
          Timsort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Comb Sort")}>
          Comb Sort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Pigeonhole Sort")}>
          Pigeonhole Sort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Cycle Sort")}>
          Cycle Sort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Cocktail Sort")}>
          Cocktail Sort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Strand Sort")}>
          Strand Sort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Bitonic Sort")}>
          Bitonic Sort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Pancake Sorting")}>
          Pancake Sorting
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Gnome Sort")}>
          Gnome Sort
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectAlg("Bogosort")}>
          Bogosort
        </Dropdown.Item>
      </DropdownButton>

      {/* Normal/Reverse Chooser Dropdown */}
      <DropdownButton
        id="normal-reverse"
        variant=""
        title="Normal"
        style={{ width: "9vw" }}
      >
        <Dropdown.Item onClick={() => selectNR("Normal")}>Normal</Dropdown.Item>
        <Dropdown.Item onClick={() => selectNR("Reverse")}>
          Reverse
        </Dropdown.Item>
      </DropdownButton>

      {/* Seperator Line */}
      <div
        style={{ width: ".15vw", height: "10vh", background: "#ae77b4" }}
      ></div>

      {/* Sort Button */}
      <Button id="run" variant="" onClick={sortButton}>
        Sort it!
      </Button>
    </div>
  );
}

export default Toolbar;
