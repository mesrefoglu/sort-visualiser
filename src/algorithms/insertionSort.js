import { swap } from './sort'
import { updateArray } from '../components/toolbar/toolbar/Toolbar'

var array = [];
var i = 1;
var interval;
var isNormal;

var key, j;

function insertionSort(arr, nR, ms) {
  array = [...arr];
  isNormal = (nR === "Normal");
  interval = setInterval(insertionSortIteration, ms);
}

function insertionSortIteration() {

  if(i === array.length) {
    clearTimeout(interval);
    updateArray(array);
    i = 1;
    return;
  }

  key = array[i];
  j = i - 1;

  while (j >= 0 && isNormal ? array[j] > key : array[j] < key)
  {
    swap(j + 1, j);
    [array[j], array[j + 1]] = [array[j + 1], array[j]];
    j = j - 1;
  }  

  i++;
}

export default insertionSort;
