import selectionSort from './selectionSort'
import bubbleSort from './bubbleSort'
import insertionSort from './insertionSort'
import mergeSort from './mergeSort'

var n = 0;

// swaps i and j
export function swap(i, j) {
  if(i === j) return;
  const temp = document.getElementById("e" + i).childNodes[0].style.height;
  document.getElementById("e" + i).childNodes[0].style.height =
    document.getElementById("e" + j).childNodes[0].style.height;
  document.getElementById("e" + j).childNodes[0].style.height = temp;
}

// set i's value to j (not j in array, but j in sorted version. for example j = 0 means set i to smallest element)
export function set(i, j) {
  document.getElementById("e" + i).childNodes[0].style.height = ((80 * (j + 1)) / n).toFixed(2) + "vh";
}

function sort(array, alg, nr, ms) {
  n = array.length;
  switch (alg) {
    case "Selection Sort":
      selectionSort(array, nr, ms);
      break;
    case "Bubble Sort":
      bubbleSort(array, nr, ms);
      break;
    case "Insertion Sort":
      insertionSort(array, nr, ms);
      break;
    case "Merge Sort":
      mergeSort(array, nr, ms);
      break;
    case "Quicksort":
      break;
    case "Heap Sort":
      break;
    case "Counting Sort":
      break;
    case "Radix Sort":
      break;
    case "Bucket Sort":
      break;
    case "Shellsort":
      break;
    case "Timsort":
      break;
    case "Comb Sort":
      break;
    case "Pigeonhole Sort":
      break;
    case "Cycle Sort":
      break;
    case "Cocktail Sort":
      break;
    case "Strand Sort":
      break;
    case "Bitonic Sort":
      break;
    case "Pancake Sorting":
      break;
    case "Gnome Sort":
      break;
    case "Bogosort":
      break;
    default:
      break;
  }
}

export default sort;
