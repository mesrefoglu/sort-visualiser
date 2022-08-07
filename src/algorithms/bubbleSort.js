import { swap } from './sort'
import { updateArray } from '../components/toolbar/toolbar/Toolbar'

var array = [];
var i = 0;
var interval;
var nr;

function bubbleSort(arr, nR, ms) {
  array = [...arr];
  nr = nR;
  interval = setInterval(bubbleSortIteration, ms);
}

function bubbleSortIteration() {

  if(i === array.length) {
    clearTimeout(interval);
    updateArray(array);
    i = 0;
    return;
  }

  for(var j = 0; j < array.length - i - 1; j++) {
    if (array[j] > array[j + 1]) {
      swap(j, j + 1);
      [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
  }

  i++;
}

export default bubbleSort;
