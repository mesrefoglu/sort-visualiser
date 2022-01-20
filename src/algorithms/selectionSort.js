import { swap } from './sort'
import { updateArray } from '../components/toolbar/toolbar/Toolbar'

var array = [];
var i = 0;
var interval;

function selectionSort(arr, nr, ms) {
  array = [...arr];
  interval = setInterval(selectionsort, 50);
}

function selectionsort() {
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
    if (array[j] < array[min_idx]) min_idx = j;
  }

  // Swap the found minimum element with the first element
  swap(array, min_idx, i);
  [array[i], array[min_idx]] = [array[min_idx], array[i]];

  i++;
}

export default selectionSort;
