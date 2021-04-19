const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const animations = [];
  const auxiliaryArray = arr.slice();
  mergeSortHelper(arr, auxiliaryArray, 0, arr.length - 1, animations);
  return animations;
};

const mergeSortHelper = (
  arr,
  auxiliaryArray,
  leftStart,
  rightEnd,
  animations
) => {
  if (leftStart >= rightEnd) {
    return;
  }
  // divide into two roughly equal halves
  const middle = Math.floor((leftStart + rightEnd) / 2);

  // mergesort left half
  mergeSortHelper(auxiliaryArray, arr, leftStart, middle, animations);

  // mergesort right half
  mergeSortHelper(auxiliaryArray, arr, middle + 1, rightEnd, animations);

  // sort the two sorted halves
  mergeSortedHalves(
    arr,
    auxiliaryArray,
    leftStart,
    middle,
    rightEnd,
    animations
  );
};

const mergeSortedHalves = (
  arr,
  auxiliaryArray,
  leftStart,
  leftEnd,
  rightEnd,
  animations
) => {
  let leftPointer = leftStart;
  let rightPointer = leftEnd + 1;
  let tempPointer = leftStart;

  while (leftPointer <= leftEnd && rightPointer <= rightEnd) {
    // push it twice to convert and revert color
    animations.push([leftPointer, rightPointer, true]);
    animations.push([leftPointer, rightPointer, true]);

    if (auxiliaryArray[leftPointer] <= auxiliaryArray[rightPointer]) {
      // copy elem of auxiliaryArr at leftPointer to original array at tempPointer
      animations.push([tempPointer, auxiliaryArray[leftPointer], false]);
      arr[tempPointer] = auxiliaryArray[leftPointer];
      leftPointer++;
    } else {
      // copy elem of auxiliaryArr at rightPointer to original array at tempPointer
      animations.push([tempPointer, auxiliaryArray[rightPointer], false]);
      arr[tempPointer] = auxiliaryArray[rightPointer];
      rightPointer++;
    }
    tempPointer++;
  }

  // if either left or right pointer are out of bound copy rest of the elems of non-empty array
  while (leftPointer <= leftEnd) {
    // push twice to convert and revert their color
    animations.push([leftPointer, leftPointer, true]);
    animations.push([leftPointer, leftPointer, true]);

    // copy elem of auxiliaryArr at leftPointer to original array at tempPointer
    animations.push([tempPointer, auxiliaryArray[leftPointer], false]);
    arr[tempPointer] = auxiliaryArray[leftPointer];
    leftPointer++;
    tempPointer++;
  }

  while (rightPointer <= rightEnd) {
    // push twice to convert and revert their color
    animations.push([rightPointer, rightPointer, true]);
    animations.push([rightPointer, rightPointer, true]);

    // copy elem of auxiliaryArr at rightPointer to original array at tempPointer
    animations.push([tempPointer, auxiliaryArray[rightPointer], false]);
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
