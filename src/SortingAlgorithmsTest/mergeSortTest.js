import mergeSortAlgo from "../SortingAlgorithms/mergeSort";
import { areArraysEqual } from "../Utilities/utilities";

const testMergeSort = (array) => {
  const sortedArr = array.slice().sort((a, b) => a - b);
  mergeSortAlgo(array);
  console.log(
    areArraysEqual(sortedArr, array)
      ? "Mergesort is correct"
      : "Mergesort is incorrect"
  );
};

export default testMergeSort;
