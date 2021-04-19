const insertionSort = (arr) => {
  const animations = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // push it twice to be able to convert and revert color
      animations.push([j, j - 1, true]);
      animations.push([j, j - 1, true]);
      if (arr[j - 1] <= arr[j]) {
        break;
      }

      swap(arr, j, j - 1);
      // swap animation
      animations.push([j, arr[j], false]);
      animations.push([j - 1, arr[j - 1], false]);
    }
  }
  return animations;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

export default insertionSort;
