import insertionSortAnimation from "./SortingAlgorithms/InsertionSort/insertionSortAnimation";
import mergeSortAnimation from "./SortingAlgorithms/MergeSort/mergeSortAnimation";
import quickSortAnimation from "./SortingAlgorithms/QuickSort/quickSortAnimation";
import heapSortAnimation from "./SortingAlgorithms/HeapSort/heapSortAnimation";
import selectionSortAnimation from "./SortingAlgorithms/SelectionSort/selectionSortAnimation";
import bubbleSortAnimation from "./SortingAlgorithms/BubbleSort/bubbleSortAnimation";
import mergeInsertionSortAnimation from "./SortingAlgorithms/MergeInsertionSort/mergeInsertionSortAnimation";

const getAlgo = (array, animationSpeed) => {
  const sortingAlgoNames = [
    "Insertion Sort",
    "Merge Sort",
    "Quick Sort",
    "Heap Sort",
    "Selection Sort",
    "Bubble Sort",
    "Merge Insertion Sort",
  ];

  const sortingAlgorithms = [
    () => insertionSortAnimation(array, animationSpeed),
    () => mergeSortAnimation(array, animationSpeed),
    () => quickSortAnimation(array, animationSpeed),
    () => heapSortAnimation(array, animationSpeed),
    () => selectionSortAnimation(array, animationSpeed),
    () => bubbleSortAnimation(array, animationSpeed),
    () => mergeInsertionSortAnimation(array, animationSpeed),
  ];

  return [sortingAlgoNames, sortingAlgorithms];
};

export default getAlgo;
