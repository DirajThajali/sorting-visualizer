const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const auxiliaryArray = arr.slice();
  mergeSortHelper(arr, auxiliaryArray, 0, arr.length - 1);
};

const mergeSortHelper = (arr, auxiliaryArray, leftStart, rightEnd) => {
  if (leftStart >= rightEnd) {
    return;
  }
  // divide into two roughly equal halves
  const middle = Math.floor((leftStart + rightEnd) / 2);

  // mergesort left half
  mergeSortHelper(auxiliaryArray, arr, leftStart, middle);

  // mergesort right half
  mergeSortHelper(auxiliaryArray, arr, middle + 1, rightEnd);

  // sort the two sorted halves
  mergeSortedHalves(arr, auxiliaryArray, leftStart, middle, rightEnd);
};

const mergeSortedHalves = (
  arr,
  auxiliaryArray,
  leftStart,
  leftEnd,
  rightEnd
) => {
  let leftPointer = leftStart;
  let rightPointer = leftEnd + 1;
  let tempPointer = leftStart;

  while (leftPointer <= leftEnd && rightPointer <= rightEnd) {
    if (auxiliaryArray[leftPointer] <= auxiliaryArray[rightPointer]) {
      arr[tempPointer] = auxiliaryArray[leftPointer];
      leftPointer++;
    } else {
      arr[tempPointer] = auxiliaryArray[rightPointer];
      rightPointer++;
    }
    tempPointer++;
  }

  // if either left or right pointer are out of bound copy rest of the elems of non-empty array
  while (leftPointer <= leftEnd) {
    arr[tempPointer] = auxiliaryArray[leftPointer];
    leftPointer++;
    tempPointer++;
  }

  while (rightPointer <= rightEnd) {
    arr[tempPointer] = auxiliaryArray[rightPointer];
    rightPointer++;
    tempPointer++;
  }

  // copy the sorted auxiliaryArray back to the original array
  // for (let i = leftStart; i <= rightEnd; i++) {
  //   arr[i] = auxiliaryArray[i];
  // }
};

export default mergeSort;
