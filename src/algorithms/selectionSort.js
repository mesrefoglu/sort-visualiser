import { swap } from './sort'
import { updateArray } from '../components/toolbar/toolbar/Toolbar'

var array = [];
var i = 0;
var interval;
var nr;

function selectionSort(arr, nR, ms) {
  array = [...arr];
  nr = nR;
  interval = setInterval(selectionSortIteration, ms);
}

function selectionSortIteration() {
  var j = 0, min_idx = 0;

  if(i === array.length - 1) {
    clearTimeout(interval);
    updateArray(array);
    i = 0;
    return;
  }

  // Find the minimum element in unsorted array
  min_idx = i;
  for (j = i + 1; j < array.length; j++) {
    if (((nr === "Normal") ? (array[j] < array[min_idx]) : (array[j] > array[min_idx]))) min_idx = j;
  }

  // Swap the found minimum element with the first element
  swap(min_idx, i);
  [array[i], array[min_idx]] = [array[min_idx], array[i]];

  i++;
}

export default selectionSort;
