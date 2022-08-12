import { swap } from './sort'
import { updateArray } from '../components/toolbar/toolbar/Toolbar'

var array = [];
var i = 0;
var interval;
var isNormal;

function bubbleSort(arr, nR, ms) {
  array = [...arr];
  isNormal = (nR === "Normal");
  interval = setInterval(bubbleSortIteration, ms);
}

function bubbleSortIteration() {

  if (i === array.length) {
    clearTimeout(interval);
    updateArray(array);
    i = 0;
    return;
  }

  for (var j = 0; j < array.length - i - 1; j++) {
    if (isNormal ? array[j] > array[j + 1] : array[j] < array[j + 1]) {
      swap(j, j + 1);
      [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
  }

  i++;
}

export default bubbleSort;
