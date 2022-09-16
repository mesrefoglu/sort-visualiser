import { swap } from "./sort";
import { updateArray } from "../components/toolbar/toolbar/Toolbar";

var array = [];
var n;
var isNormal;
var delay;

function quickSort(arr, nR, ms) {
  array = [...arr];
  n = arr.length;
  delay = ms;
  isNormal = nR === "Normal";
  quickSortIterative();
}

function partition(arr, low, high) {
  let pivot = arr[high];

  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (isNormal ? arr[j] <= pivot : arr[j] >= pivot) {
      i++;
      swap(i, j);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  swap(i + 1, high);
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}

function quickSortIterative() {
  let stack = new Array(n).fill(0);

  let l = 0;
  let h = n - 1;

  let top = -1;

  stack[++top] = l;
  stack[++top] = h;

  while (top >= 0) {
    h = stack[top--];
    l = stack[top--];

    let p = partition(array, l, h);

    if (p - 1 > l) {
      stack[++top] = l;
      stack[++top] = p - 1;
    }

    if (p + 1 < h) {
      stack[++top] = p + 1;
      stack[++top] = h;
    }
  }

  updateArray(array);
}

export default quickSort;
