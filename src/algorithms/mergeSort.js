import { set } from './sort'
import { updateArray } from '../components/toolbar/toolbar/Toolbar'

var array = [];
var n;
var isNormal;
var delay;
var interval;

var size = 1;

function mergeSort(arr, nR, ms) {
  array = [...arr];
  n = arr.length;
  delay = ms;
  isNormal = (nR === "Normal");
  generateArrayToDisplay();
  interval = setInterval(displayIteration, delay);
}

let arr2 = Array(n);

function generateArrayToDisplay() {
	let p = 0, q = 0;

	while (q < n) {
		let l = p, r = l + size;
		while (l < p + size && r < p + size * 2 && l < n && r < n) {
			if (isNormal ? array[l] < array[r] : array[l] > array[r]) {
				arr2[q] = array[l];
				l++;
			}
			else {
				arr2[q] = array[r];
				r++;
			}
			q++;
		}
		while (l < p + size && l < n) {
			arr2[q] = array[l];
			l++;
			q++;
		}
		while (r < p + size * 2 && r < n) {
			arr2[q] = array[r];
			r++;
			q++;
		}
		p += size * 2;
	}
}

function mergeSortWrapper() {
	if(size >= n) {
		updateArray(arr2);
		size = 1;
		return;
	}
	array = [...arr2];
	arr2 = Array(n);
	size *= 2;

	generateArrayToDisplay();
	interval = setInterval(displayIteration, delay);
}

let displayIndex = 0;
function displayIteration() {
	if (displayIndex === n) {
		clearTimeout(interval);
		mergeSortWrapper();
		displayIndex = 0;
		return;
	}
	set(displayIndex, arr2[displayIndex]);
	displayIndex++;
}

export default mergeSort;
