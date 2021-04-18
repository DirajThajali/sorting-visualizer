import insertionSortAlgo from "../SortingAlgorithms/insertionSort";
import { areArraysEqual } from "../Utilities/utilities";

const testinsertionSort = (array) => {
  // console.log(array);
  const sortedArr = array.slice().sort((a, b) => a - b);
  insertionSortAlgo(array);
  // console.log(array);
  console.log(
    areArraysEqual(sortedArr, array)
      ? "Insertion Sort is correct"
      : "Insertion Sort is incorrect"
  );
};

export default testinsertionSort;
