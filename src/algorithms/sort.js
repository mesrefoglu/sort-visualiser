import selectionSort from './selectionSort'
import bubbleSort from './bubbleSort'
import insertionSort from './insertionSort'

// swaps i and j
export function swap(i, j) {
  if(i === j) return;
  const temp = document.getElementById("e" + i).childNodes[0].style.height;
  document.getElementById("e" + i).childNodes[0].style.height =
    document.getElementById("e" + j).childNodes[0].style.height;
  document.getElementById("e" + j).childNodes[0].style.height = temp;
}

function sort(array, alg, nr, ms) {
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
